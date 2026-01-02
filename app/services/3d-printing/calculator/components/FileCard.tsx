'use client';

import { useCalculator } from '../context/CalculatorContext';
import StlViewer from './StlViewer';
import { Trash2, Plus, Minus } from 'lucide-react';

interface FileCardProps {
  fileId: string;
}

export default function FileCard({ fileId }: FileCardProps) {
  const { state, removeFile, incrementQuantity, decrementQuantity, updateQuantity, togglePaint } =
    useCalculator();

  const file = state.files.find((f) => f.id === fileId);

  if (!file) return null;

  const handleQuantityChange = (value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      updateQuantity(file.id, num);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl overflow-hidden">
      {/* 3D Viewer */}
      <div className="relative h-48">
        <StlViewer url={file.url} className="w-full h-full" />

        {/* Remove Button */}
        <button
          onClick={() => removeFile(file.id)}
          className="btn btn-circle btn-error btn-sm absolute top-2 right-2"
          aria-label="Видалити файл"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      {/* Card Body */}
      <div className="card-body bg-primary text-primary-content gap-4">
        {/* File Info */}
        <div className="space-y-2">
          <h3 className="card-title text-lg break-words">{file.name}</h3>
          <p className="text-sm">Ціна/од: {file.pricePerUnit.toLocaleString('uk-UA')} грн</p>
          <p className="text-sm">Вага/од: {file.modelWeight.toLocaleString('uk-UA')} г</p>

          {/* Paint Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="checkbox checkbox-sm bg-base-100"
              checked={file.includePaint}
              onChange={() => togglePaint(file.id)}
            />
            <span className="text-sm">Фарбувати (+10%)</span>
          </label>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => decrementQuantity(file.id)}
            disabled={file.quantity <= 1}
            className="btn btn-circle btn-sm btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
            aria-label="Зменшити кількість"
          >
            <Minus className="h-4 w-4" />
          </button>

          <input
            type="number"
            value={file.quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
            min="1"
            max="99999"
            className="input input-sm w-20 text-center bg-base-100 text-base-content"
          />

          <button
            onClick={() => incrementQuantity(file.id)}
            disabled={file.quantity >= 99999}
            className="btn btn-circle btn-sm btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
            aria-label="Збільшити кількість"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Totals */}
        <div className="space-y-1 text-sm border-t border-primary-content/30 pt-3">
          <p className="flex justify-between">
            <span>Вага:</span>
            <span className="font-semibold">
              {(file.modelWeight * file.quantity).toLocaleString('uk-UA')} г
            </span>
          </p>
          <p className="flex justify-between">
            <span>Ціна:</span>
            <span className="font-semibold">{file.totalPrice.toLocaleString('uk-UA')} грн</span>
          </p>
        </div>
      </div>
    </div>
  );
}
