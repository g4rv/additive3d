'use client';

import { useState } from 'react';
import { Profile } from '@/lib/types/auth';
import { Trash2, Check, X } from 'lucide-react';
import { updateUserRole, updateUserPpg, deleteUser } from './actions';

interface UserRowProps {
  user: Profile;
  currentUserId?: string | null;
}

const UserRow = ({ user, currentUserId }: UserRowProps) => {
  const [isEditingPpg, setIsEditingPpg] = useState(false);
  const [ppgValue, setPpgValue] = useState((user.ppg ?? 40).toString());
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const isOwnProfile = user.id === currentUserId;

  const handleRoleChange = async (newRole: 'user' | 'admin') => {
    if (newRole === user.role) return;

    // Prevent changing own role (also enforced server-side)
    if (isOwnProfile) {
      setMessage({ type: 'error', text: 'Ви не можете змінювати свою власну роль' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    setIsLoading(true);
    setMessage(null);

    const result = await updateUserRole(user.id, newRole);

    setIsLoading(false);

    if (result.success) {
      setMessage({ type: 'success', text: result.message || 'Role updated' });
      setTimeout(() => setMessage(null), 3000);
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to update role' });
    }
  };

  const handlePpgSave = async () => {
    const ppg = parseFloat(ppgValue);

    if (isNaN(ppg) || ppg <= 0) {
      setMessage({ type: 'error', text: 'PPG must be a positive number' });
      return;
    }

    if (ppg === (user.ppg ?? 40)) {
      setIsEditingPpg(false);
      return;
    }

    setIsLoading(true);
    setMessage(null);

    const result = await updateUserPpg(user.id, ppg);

    setIsLoading(false);

    if (result.success) {
      setMessage({ type: 'success', text: result.message || 'PPG updated' });
      setIsEditingPpg(false);
      setTimeout(() => setMessage(null), 3000);
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to update PPG' });
      setPpgValue((user.ppg ?? 40).toString());
    }
  };

  const handlePpgCancel = () => {
    setPpgValue((user.ppg ?? 40).toString());
    setIsEditingPpg(false);
    setMessage(null);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Ви впевнені, що хочете видалити користувача ${user.first_name} ${user.last_name}?\n\n` +
        `Email: ${user.email}\n\n` +
        `Це дію НЕМОЖЛИВО скасувати!`
    );

    if (!confirmed) return;

    setIsLoading(true);
    setMessage(null);

    const result = await deleteUser(user.id);

    setIsLoading(false);

    if (result.success) {
      setMessage({ type: 'success', text: result.message || 'User deleted' });
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to delete user' });
    }
  };

  return (
    <tr className={`hover ${isLoading ? 'opacity-50' : ''}`}>
      {/* Name */}
      <td>
        <div className="font-medium">
          {user.first_name} {user.last_name}
        </div>
        {message && (
          <div
            className={`text-xs mt-1 ${
              message.type === 'success' ? 'text-success' : 'text-error'
            }`}
          >
            {message.text}
          </div>
        )}
      </td>

      {/* Email */}
      <td>
        <div className="text-sm">{user.email}</div>
      </td>

      {/* Phone */}
      <td>
        <div className="text-sm">{user.phone_number || '—'}</div>
      </td>

      {/* Organization */}
      <td>
        <div className="text-sm">{user.organization_name || '—'}</div>
      </td>

      {/* Role */}
      <td>
        <select
          value={user.role}
          onChange={(e) => handleRoleChange(e.target.value as 'user' | 'admin')}
          disabled={isLoading || isOwnProfile}
          className="select select-sm select-bordered w-full max-w-xs"
          title={isOwnProfile ? 'Ви не можете змінювати свою власну роль' : undefined}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </td>

      {/* PPG */}
      <td>
        {isEditingPpg ? (
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={ppgValue}
              onChange={(e) => setPpgValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handlePpgSave();
                if (e.key === 'Escape') handlePpgCancel();
              }}
              disabled={isLoading}
              className="input input-sm input-bordered w-20"
              autoFocus
            />
            <button
              onClick={handlePpgSave}
              disabled={isLoading}
              className="btn btn-xs btn-ghost text-success"
              title="Save"
            >
              <Check className="w-3 h-3" />
            </button>
            <button
              onClick={handlePpgCancel}
              disabled={isLoading}
              className="btn btn-xs btn-ghost text-error"
              title="Cancel"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div
            onClick={() => !isLoading && setIsEditingPpg(true)}
            className="text-sm cursor-pointer hover:text-primary transition-colors"
            title="Click to edit"
          >
            {user.ppg ?? 40}
          </div>
        )}
      </td>

      {/* Date */}
      <td>
        <div className="text-sm">
          {new Date(user.created_at).toLocaleDateString('uk-UA', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </div>
      </td>

      {/* Actions */}
      <td>
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="btn btn-xs btn-error gap-1"
          title="Delete user"
        >
          <Trash2 className="w-3 h-3" />
          Видалити
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
