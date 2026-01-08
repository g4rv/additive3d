'use client';

import { useState, useMemo } from 'react';
import { Profile } from '@/lib/types/auth';
import { User, Mail, Phone, Building2, Calendar, Shield, Search } from 'lucide-react';
import UserRow from './UserRow';

interface UsersTableProps {
  users: Profile[];
  currentUserId?: string | null;
}

const UsersTable = ({ users, currentUserId }: UsersTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    if (!searchTerm.trim()) return users;

    const search = searchTerm.toLowerCase();
    return users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(search) ||
        user.last_name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.organization_name?.toLowerCase().includes(search)
    );
  }, [users, searchTerm]);

  return (
    <div className="bg-base-200 rounded-box shadow-lg">
      {/* Search Bar */}
      <div className="p-6 border-b border-base-300">
        <div className="relative">
          <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Шукати користувача (ім'я, email, організація)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-base-300 w-full rounded-lg border border-transparent py-3 pr-4 pl-12 transition-colors focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Ім'я</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Телефон</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Організація</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Роль</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <span>PPG</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Дата реєстрації</span>
                </div>
              </th>
              <th className="bg-base-300">
                <span>Дії</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-8 text-base-content/70">
                  {searchTerm ? 'Користувачів не знайдено' : 'Користувачів немає'}
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <UserRow key={user.id} user={user} currentUserId={currentUserId} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
