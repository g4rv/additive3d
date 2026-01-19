'use client';

import { useState } from 'react';
import { useCalculator } from '../context/CalculatorContext';
import { Upload } from 'lucide-react';

export default function FileUpload() {
  const [highlight, setHighlight] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { addFiles } = useCalculator();

  const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200MB in bytes
  const MAX_TOTAL_SIZE = 200 * 1024 * 1024; // 200MB total per order

  const isValidSTL = (file: File) => file.name.toLowerCase().endsWith('.stl');

  const handleFiles = async (fileList: FileList | null) => {
    if (!fileList) return;

    const files = Array.from(fileList).filter(isValidSTL);
    if (files.length === 0) {
      alert('Будь ласка, виберіть файли формату .STL');
      return;
    }

    // Check individual file sizes
    const oversizedFiles = files.filter(file => file.size > MAX_FILE_SIZE);
    if (oversizedFiles.length > 0) {
      alert(`Наступні файли перевищують максимальний розмір 200MB:\n${oversizedFiles.map(f => f.name).join('\n')}`);
      return;
    }

    // Check total size
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_TOTAL_SIZE) {
      const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
      alert(`Загальний розмір файлів (${totalSizeMB} MB) перевищує максимально допустимий 200 MB`);
      return;
    }

    setIsUploading(true);
    try {
      await addFiles(files);
    } finally {
      setIsUploading(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setHighlight(false);
    handleFiles(e.dataTransfer.files);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setHighlight(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setHighlight(false);
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    e.currentTarget.value = '';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`border-2 border-dashed rounded-lg p-8 transition-all cursor-pointer ${
          highlight
            ? 'border-primary bg-primary/10 scale-[1.02]'
            : 'border-base-300 bg-base-200 hover:border-primary/50'
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <Upload className={`h-12 w-12 ${highlight ? 'text-primary' : 'text-base-content/50'}`} />

          <div>
            <p className="text-base-content mb-2">
              Перенесіть <code className="badge badge-sm">.stl</code> файли сюди
            </p>
            <label className="link link-primary cursor-pointer">
              <input
                accept=".stl"
                type="file"
                multiple
                className="hidden"
                onChange={onFileInputChange}
                disabled={isUploading}
              />
              або оберіть з пристрою
            </label>
          </div>

          {isUploading && (
            <div className="flex items-center gap-2 text-sm text-base-content/70">
              <span className="loading loading-spinner loading-sm"></span>
              <span>Завантаження та аналіз файлів...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
