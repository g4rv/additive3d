'use client';

import { useState } from 'react';
import { Trash2, AlertTriangle } from 'lucide-react';
import { deleteUser } from './actions';

export default function DeleteByIdForm() {
  const [userId, setUserId] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId.trim()) {
      setMessage({ type: 'error', text: 'Please enter a user ID' });
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete user with ID: ${userId}?\n\nThis will:\n- Delete the user from authentication\n- Delete their profile\n- This action CANNOT be undone!`
    );

    if (!confirmed) return;

    setIsDeleting(true);
    setMessage(null);

    const result = await deleteUser(userId.trim());

    if (result.success) {
      setMessage({ type: 'success', text: result.message || 'User deleted successfully!' });
      setUserId(''); // Clear input on success
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to delete user' });
    }

    setIsDeleting(false);
  };

  return (
    <div className="bg-base-200 rounded-box shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-error/10 p-3 rounded-lg">
          <Trash2 className="w-6 h-6 text-error" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Видалити користувача за ID</h2>
          <p className="text-sm text-base-content/70">
            Введіть ID користувача для видалення з системи
          </p>
        </div>
      </div>

      {/* Warning */}
      <div className="alert alert-warning mb-4">
        <AlertTriangle className="w-4 h-4" />
        <span className="text-sm">
          Ця операція незворотна. Користувач буде повністю видалений з бази даних.
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="userId" className="text-sm font-medium">
            User ID (UUID)
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="e.g., 123e4567-e89b-12d3-a456-426614174000"
            className="input input-bordered w-full"
            disabled={isDeleting}
          />
          <p className="text-xs text-base-content/60">
            UUID формату: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
          </p>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`alert ${
              message.type === 'success' ? 'alert-success' : 'alert-error'
            }`}
          >
            <span>{message.text}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isDeleting || !userId.trim()}
          className="btn btn-error gap-2"
        >
          {isDeleting ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Видалення...
            </>
          ) : (
            <>
              <Trash2 className="w-4 h-4" />
              Видалити користувача
            </>
          )}
        </button>
      </form>

      {/* Tip */}
      <div className="mt-4 bg-base-300 rounded-lg p-3">
        <p className="text-xs text-base-content/70">
          <strong>Підказка:</strong> ID користувача можна знайти в таблиці нижче
          (показано перші 8 символів у підписі).
        </p>
      </div>
    </div>
  );
}
