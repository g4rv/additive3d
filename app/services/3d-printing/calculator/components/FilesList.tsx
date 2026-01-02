'use client';

import { useCalculator } from '../context/CalculatorContext';
import FileCard from './FileCard';

export default function FilesList() {
  const { state } = useCalculator();

  if (state.files.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {state.files.map((file) => (
        <FileCard key={file.id} fileId={file.id} />
      ))}
    </div>
  );
}
