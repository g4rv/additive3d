'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calculateStlWeight, calculatePrice } from '../utils/stl-calculator';

// Types
export interface STLFile {
  id: string;
  name: string;
  url: string; // Blob URL for 3D preview
  file: File; // Original file for upload
  modelWeight: number; // Weight in grams
  includePaint: boolean;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
}

interface CalculatorState {
  files: STLFile[];
  priceMultiplier: number; // Price per gram (UAH/g)
}

type CalculatorAction =
  | { type: 'ADD_FILES'; payload: STLFile[] }
  | { type: 'REMOVE_FILE'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'INCREMENT_QUANTITY'; payload: string }
  | { type: 'DECREMENT_QUANTITY'; payload: string }
  | { type: 'TOGGLE_PAINT'; payload: string }
  | { type: 'SET_PRICE_MULTIPLIER'; payload: number }
  | { type: 'CLEAR_ALL_FILES' };

// Initial state
const initialState: CalculatorState = {
  files: [],
  priceMultiplier: 40, // Default: 40 UAH/g
};

// Reducer
function calculatorReducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
  switch (action.type) {
    case 'ADD_FILES': {
      // Prevent duplicates by name
      const existingNames = new Set(state.files.map((f) => f.name));
      const newFiles = action.payload.filter((file) => !existingNames.has(file.name));
      return {
        ...state,
        files: [...state.files, ...newFiles],
      };
    }

    case 'REMOVE_FILE': {
      const file = state.files.find((f) => f.id === action.payload);
      if (file) {
        URL.revokeObjectURL(file.url); // Clean up blob URL
      }
      return {
        ...state,
        files: state.files.filter((f) => f.id !== action.payload),
      };
    }

    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        files: state.files.map((file) => {
          if (file.id === action.payload.id) {
            const quantity = Math.max(1, Math.min(99999, action.payload.quantity));
            const { totalPrice } = calculatePrice(
              file.modelWeight,
              state.priceMultiplier,
              file.includePaint,
              quantity
            );
            return { ...file, quantity, totalPrice };
          }
          return file;
        }),
      };
    }

    case 'INCREMENT_QUANTITY': {
      return {
        ...state,
        files: state.files.map((file) => {
          if (file.id === action.payload && file.quantity < 99999) {
            const quantity = file.quantity + 1;
            const { totalPrice } = calculatePrice(
              file.modelWeight,
              state.priceMultiplier,
              file.includePaint,
              quantity
            );
            return { ...file, quantity, totalPrice };
          }
          return file;
        }),
      };
    }

    case 'DECREMENT_QUANTITY': {
      return {
        ...state,
        files: state.files.map((file) => {
          if (file.id === action.payload && file.quantity > 1) {
            const quantity = file.quantity - 1;
            const { totalPrice } = calculatePrice(
              file.modelWeight,
              state.priceMultiplier,
              file.includePaint,
              quantity
            );
            return { ...file, quantity, totalPrice };
          }
          return file;
        }),
      };
    }

    case 'TOGGLE_PAINT': {
      return {
        ...state,
        files: state.files.map((file) => {
          if (file.id === action.payload) {
            const includePaint = !file.includePaint;
            const { pricePerUnit, totalPrice } = calculatePrice(
              file.modelWeight,
              state.priceMultiplier,
              includePaint,
              file.quantity
            );
            return { ...file, includePaint, pricePerUnit, totalPrice };
          }
          return file;
        }),
      };
    }

    case 'SET_PRICE_MULTIPLIER': {
      const priceMultiplier = action.payload;
      return {
        ...state,
        priceMultiplier,
        files: state.files.map((file) => {
          const { pricePerUnit, totalPrice } = calculatePrice(
            file.modelWeight,
            priceMultiplier,
            file.includePaint,
            file.quantity
          );
          return { ...file, pricePerUnit, totalPrice };
        }),
      };
    }

    case 'CLEAR_ALL_FILES': {
      // Clean up all blob URLs
      state.files.forEach((file) => {
        URL.revokeObjectURL(file.url);
      });
      return {
        ...state,
        files: [],
      };
    }

    default:
      return state;
  }
}

// Context
interface CalculatorContextType {
  state: CalculatorState;
  addFiles: (files: File[]) => Promise<void>;
  removeFile: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  togglePaint: (id: string) => void;
  setPriceMultiplier: (multiplier: number) => void;
  clearAllFiles: () => void;
  getTotalWeight: () => number;
  getTotalPrice: () => number;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

// Provider
interface CalculatorProviderProps {
  children: ReactNode;
  initialPpg?: number;
  userRole?: 'user' | 'admin';
}

export function CalculatorProvider({
  children,
  initialPpg = 40,
  userRole = 'user'
}: CalculatorProviderProps) {
  const [state, dispatch] = useReducer(calculatorReducer, {
    ...initialState,
    priceMultiplier: initialPpg,
  });

  const addFiles = async (files: File[]) => {
    const stlFiles: STLFile[] = await Promise.all(
      files.map(async (file) => {
        // Clean filename (remove .stl extension)
        const name = file.name.replace(/\.stl$/i, '');

        // Create blob URL for 3D preview
        const url = URL.createObjectURL(file);

        // Calculate weight
        const modelWeight = await calculateStlWeight(file);

        // Calculate initial price
        const { pricePerUnit, totalPrice } = calculatePrice(
          modelWeight,
          state.priceMultiplier,
          false,
          1
        );

        return {
          id: uuidv4(),
          name,
          url,
          file, // Store original file for upload
          modelWeight,
          includePaint: false,
          quantity: 1,
          pricePerUnit,
          totalPrice,
        };
      })
    );

    dispatch({ type: 'ADD_FILES', payload: stlFiles });
  };

  const removeFile = (id: string) => {
    dispatch({ type: 'REMOVE_FILE', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const incrementQuantity = (id: string) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  };

  const decrementQuantity = (id: string) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  };

  const togglePaint = (id: string) => {
    dispatch({ type: 'TOGGLE_PAINT', payload: id });
  };

  const setPriceMultiplier = (multiplier: number) => {
    dispatch({ type: 'SET_PRICE_MULTIPLIER', payload: multiplier });
  };

  const clearAllFiles = () => {
    dispatch({ type: 'CLEAR_ALL_FILES' });
  };

  const getTotalWeight = () => {
    return state.files.reduce((sum, file) => sum + file.modelWeight * file.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.files.reduce((sum, file) => sum + file.totalPrice, 0);
  };

  return (
    <CalculatorContext.Provider
      value={{
        state,
        addFiles,
        removeFile,
        updateQuantity,
        incrementQuantity,
        decrementQuantity,
        togglePaint,
        setPriceMultiplier,
        clearAllFiles,
        getTotalWeight,
        getTotalPrice,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

// Hook
export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within CalculatorProvider');
  }
  return context;
}
