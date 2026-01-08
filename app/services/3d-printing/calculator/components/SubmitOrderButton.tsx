'use client';

import { useState } from 'react';
import { useCalculator } from '../context/CalculatorContext';
import { Send } from 'lucide-react';
import { uploadOrder } from '../actions';

export default function SubmitOrderButton() {
  const { state } = useCalculator();
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmitOrder = async () => {
    if (state.files.length === 0) {
      alert('Будь ласка, додайте файли перед відправкою замовлення');
      return;
    }

    // Check total file size
    const MAX_TOTAL_SIZE = 200 * 1024 * 1024; // 200MB
    const totalSize = state.files.reduce((sum, file) => sum + file.file.size, 0);

    if (totalSize > MAX_TOTAL_SIZE) {
      const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
      alert(`Загальний розмір файлів (${totalSizeMB} MB) перевищує максимально допустимий 200 MB`);
      return;
    }

    setIsUploading(true);

    try {
      // Calculate order totals
      const totalPrice = state.files.reduce((sum, f) => sum + f.totalPrice, 0);
      const totalWeight = state.files.reduce((sum, f) => sum + f.modelWeight * f.quantity, 0);

      // Create FormData with all files and order metadata
      const formData = new FormData();
      state.files.forEach((stlFile) => {
        formData.append('files', stlFile.file);
      });

      // Add order metadata
      const orderMetadata = {
        totalPrice,
        totalWeight,
        priceMultiplier: state.priceMultiplier,
        files: state.files.map(f => ({
          name: f.name,
          weight: f.modelWeight,
          quantity: f.quantity,
          includePaint: f.includePaint,
          pricePerUnit: f.pricePerUnit,
          totalPrice: f.totalPrice,
        })),
      };
      formData.append('orderData', JSON.stringify(orderMetadata));

      // Upload to Cloudflare R2 via Server Action
      const result = await uploadOrder(formData);

      if (!result.success) {
        throw new Error(result.error || 'Failed to upload files');
      }

      // Success
      alert(
        `Замовлення успішно відправлено!\n\n` +
          `Номер замовлення: ${result.order.orderNumber}\n` +
          `Кількість файлів: ${result.order.files.length}\n` +
          `Загальна вартість: ${result.order.totalPrice.toFixed(2)} грн\n` +
          `Загальна вага: ${result.order.totalWeight.toFixed(2)} г\n\n` +
          `Ми зв'яжемося з вами найближчим часом!`
      );

    } catch (error) {
      console.error('Error submitting order:', error);
      alert(
        `Помилка відправки замовлення: ${error instanceof Error ? error.message : 'Невідома помилка'}\n\n` +
          `Будь ласка, спробуйте ще раз або зв'яжіться з нами.`
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <button
      onClick={handleSubmitOrder}
      disabled={state.files.length === 0 || isUploading}
      className="btn btn-success gap-2"
    >
      {isUploading ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          Відправка...
        </>
      ) : (
        <>
          <Send className="h-5 w-5" />
          Відправити замовлення
        </>
      )}
    </button>
  );
}
