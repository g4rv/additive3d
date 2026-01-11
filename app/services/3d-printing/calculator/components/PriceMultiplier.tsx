'use client';

import { useCalculator } from '../context/CalculatorContext';

interface PriceMultiplierProps {
  userRole: 'user' | 'admin';
}

export default function PriceMultiplier({ userRole }: PriceMultiplierProps) {
  const { state, setPriceMultiplier } = useCalculator();
  const isAdmin = userRole === 'admin';

  // Hide completely for default users
  if (!isAdmin) {
    return null;
  }

  const handleChange = (value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0) {
      setPriceMultiplier(num);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="price-multiplier" className="label">
        <span className="label-text font-semibold">Ціна за грам (грн):</span>
      </label>
      <input
        id="price-multiplier"
        type="number"
        value={state.priceMultiplier}
        onChange={(e) => handleChange(e.target.value)}
        min="0"
        step="0.01"
        className="input input-bordered w-28"
      />
    </div>
  );
}
