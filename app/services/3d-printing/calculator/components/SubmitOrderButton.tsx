'use client';

import { useState } from 'react';
import { useCalculator } from '../context/CalculatorContext';
import { Send } from 'lucide-react';
import { uploadOrder } from '../actions';
import { Popup, usePopup } from '@/components/ui/popup';
import { useToast } from '@/components/ui/toast';
import ConsentModal from '@/components/ConsentModal';
import { updateUserConsent } from '@/app/user/user-settings/actions';

export default function SubmitOrderButton() {
  const { state } = useCalculator();
  const [isUploading, setIsUploading] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);
  const { popup, showSuccess: showSuccessPopup, close } = usePopup();
  const { success: showSuccessToast, error: showErrorToast, ToastContainer } = useToast();

  const handleSubmitOrder = async () => {
    if (state.files.length === 0) {
      showErrorToast('Будь ласка, додайте файли перед відправкою замовлення');
      return;
    }

    // Check total file size
    const MAX_TOTAL_SIZE = 200 * 1024 * 1024; // 200MB
    const totalSize = state.files.reduce((sum, file) => sum + file.file.size, 0);

    if (totalSize > MAX_TOTAL_SIZE) {
      const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
      showErrorToast(`Загальний розмір файлів (${totalSizeMB} MB) перевищує максимально допустимий 200 MB`);
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
        // Check if consent is required
        if (result.error === 'consent_required') {
          setShowConsentModal(true);
          setIsUploading(false);
          return;
        }
        throw new Error(result.error || 'Failed to upload files');
      }

      // Success - Show detailed popup with order info
      showSuccessPopup(
        `Номер замовлення: ${result.order.orderNumber}\n` +
          `Кількість файлів: ${result.order.files.length}\n` +
          `Загальна вартість: ${result.order.totalPrice.toFixed(2)} грн\n` +
          `Загальна вага: ${result.order.totalWeight.toFixed(2)} г\n\n` +
          `📧 Перевірте свою електронну пошту для отримання деталей замовлення.\n\n` +
          `Ми зв'яжемося з вами найближчим часом!`,
        'Замовлення успішно відправлено!'
      );

    } catch (error) {
      console.error('Error submitting order:', error);
      showErrorToast(
        'Помилка відправки замовлення',
        error instanceof Error ? error.message : 'Невідома помилка'
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleConsent = async (agreeToShare: boolean, hasNotSignedNda: boolean) => {
    const result = await updateUserConsent(agreeToShare, hasNotSignedNda);

    if (!result.success) {
      throw new Error(result.error || 'Failed to update consent');
    }

    // Close modal
    setShowConsentModal(false);

    // Show success message
    showSuccessToast('Згоду збережено! Тепер ви можете розмістити замовлення.');

    // Automatically retry order submission
    setTimeout(() => {
      handleSubmitOrder();
    }, 500);
  };

  return (
    <>
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

      {/* Popup for detailed success info */}
      {popup && (
        <Popup
          isOpen={popup.isOpen}
          onClose={close}
          title={popup.title}
          message={popup.message}
          type={popup.type}
          confirmText={popup.confirmText}
          cancelText={popup.cancelText}
          onConfirm={popup.onConfirm}
          onCancel={popup.onCancel}
        />
      )}

      {/* Toast for quick error messages */}
      <ToastContainer />

      {/* Consent Modal */}
      <ConsentModal
        isOpen={showConsentModal}
        onClose={() => setShowConsentModal(false)}
        onConsent={handleConsent}
      />
    </>
  );
}
