'use client';

import { useState } from 'react';
import { Shield, Trash2, User as UserIcon } from 'lucide-react';
import { updateUserRole, deleteUser } from './actions';

interface UserManagementRowProps {
  user: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    role: 'user' | 'admin';
  };
}

export default function UserManagementRow({ user }: UserManagementRowProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(user.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRoleChange = async (newRole: 'user' | 'admin') => {
    if (isUpdating) return;

    setIsUpdating(true);
    setMessage(null);

    const result = await updateUserRole(user.id, newRole);

    if (result.success) {
      setMessage({ type: 'success', text: result.message || 'Role updated!' });
      setTimeout(() => setMessage(null), 3000);
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to update role' });
    }

    setIsUpdating(false);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${user.first_name} ${user.last_name}?\n\nThis will:\n- Delete the user from authentication\n- Delete their profile\n- This action CANNOT be undone!`
    );

    if (!confirmed) return;

    setIsDeleting(true);
    setMessage(null);

    const result = await deleteUser(user.id);

    if (result.success) {
      setMessage({ type: 'success', text: result.message || 'User deleted!' });
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to delete user' });
      setIsDeleting(false);
    }
  };

  return (
    <tr className={`hover ${isDeleting ? 'opacity-50' : ''}`}>
      <td>
        <div className="font-medium">
          {user.first_name} {user.last_name}
        </div>
        <button
          onClick={handleCopyId}
          className="text-xs text-base-content/50 hover:text-primary transition-colors cursor-pointer"
          title="Click to copy full ID"
        >
          ID: {user.id.slice(0, 8)}... {copied ? '✓ Copied!' : '📋'}
        </button>
      </td>
      <td>
        <div className="text-sm">{user.email}</div>
      </td>
      <td>
        <div className="flex items-center gap-2">
          {user.role === 'admin' ? (
            <span className="badge badge-primary badge-sm gap-1">
              <Shield className="w-3 h-3" />
              Admin
            </span>
          ) : (
            <span className="badge badge-ghost badge-sm gap-1">
              <UserIcon className="w-3 h-3" />
              User
            </span>
          )}
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-2">
          {/* Role Change Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => handleRoleChange('user')}
              disabled={isUpdating || isDeleting || user.role === 'user'}
              className="btn btn-xs btn-ghost"
            >
              Make User
            </button>
            <button
              onClick={() => handleRoleChange('admin')}
              disabled={isUpdating || isDeleting || user.role === 'admin'}
              className="btn btn-xs btn-primary"
            >
              Make Admin
            </button>
          </div>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            disabled={isUpdating || isDeleting}
            className="btn btn-xs btn-error gap-1"
          >
            <Trash2 className="w-3 h-3" />
            Delete User
          </button>

          {/* Status Message */}
          {message && (
            <div
              className={`text-xs ${
                message.type === 'success' ? 'text-success' : 'text-error'
              }`}
            >
              {message.text}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}
