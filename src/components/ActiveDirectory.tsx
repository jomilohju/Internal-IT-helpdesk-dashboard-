import { Download, MoreHorizontal, User, Shield, Lock, Unlock, Mail, RefreshCw } from 'lucide-react';
import { useState } from 'react';

export function ActiveDirectory() {
  const [users, setUsers] = useState([
    { id: 'USR-201', name: 'Sarah Jenkins', email: 's.jenkins@company.com', role: 'Staff Engineer', department: 'Engineering', status: 'Active', lastLogin: '2 mins ago' },
    { id: 'USR-202', name: 'David Chen', email: 'd.chen@company.com', role: 'Account Executive', department: 'Sales', status: 'Locked', lastLogin: '2 days ago' },
    { id: 'USR-203', name: 'Emma Wilson', email: 'e.wilson@company.com', role: 'Lead Designer', department: 'Design', status: 'Active', lastLogin: '1 hour ago' },
    { id: 'USR-204', name: 'Michael Brown', email: 'm.brown@company.com', role: 'Director', department: 'Management', status: 'Active', lastLogin: '5 mins ago' },
    { id: 'USR-205', name: 'James Smith', email: 'j.smith@company.com', role: 'Marketing Specialist', department: 'Marketing', status: 'Inactive', lastLogin: '3 weeks ago' },
    { id: 'USR-206', name: 'Robert Johnson', email: 'r.johnson@company.com', role: 'HR Manager', department: 'Human Resources', status: 'Active', lastLogin: '10 mins ago' },
  ]);

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const toggleUserSelection = (id: string) => {
    setSelectedUsers(prev => 
      prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
    );
  };

  const toggleAllSelection = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(u => u.id));
    }
  };

  const handleBulkAction = (action: 'lock' | 'unlock' | 'reset') => {
    if (selectedUsers.length === 0) return;
    
    // Simulate bulk action
    console.log(`Performing ${action} on users:`, selectedUsers);
    
    if (action === 'lock' || action === 'unlock') {
      const newStatus = action === 'lock' ? 'Locked' : 'Active';
      setUsers(prev => prev.map(user => 
        selectedUsers.includes(user.id) ? { ...user, status: newStatus } : user
      ));
    } else if (action === 'reset') {
      alert(`Password reset links sent to ${selectedUsers.length} users.`);
    }

    // Optional: Keep selection after action, or clear it
    setSelectedUsers([]);
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return 'bg-green-500';
      case 'Locked': return 'bg-red-500';
      case 'Inactive': return 'bg-zinc-500';
      default: return 'bg-zinc-500';
    }
  };

  const getRequesterColor = (name: string) => {
    const colors = [
      'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 
      'bg-rose-500', 'bg-cyan-500', 'bg-indigo-500'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-zinc-800/80 pb-6">
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Total Users</h3>
            <p className="text-3xl font-bold text-neutral-50 tracking-tight">1,048</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Active Accounts</h3>
            <p className="text-3xl font-bold text-green-500 tracking-tight">982</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Locked Accounts</h3>
            <p className="text-3xl font-bold text-red-500 tracking-tight">{users.filter(u => u.status === 'Locked').length}</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Password Resets</h3>
            <p className="text-3xl font-bold text-amber-500 tracking-tight">28</p>
        </div>
      </div>

      <div className="bg-[#18181B] border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
        {selectedUsers.length > 0 ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-zinc-800/80 gap-4 bg-violet-900/20">
            <div className="flex items-center gap-3 ml-2">
              <span className="text-sm font-medium text-violet-400 bg-violet-500/10 px-2 py-1 rounded">
                {selectedUsers.length} selected
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleBulkAction('unlock')}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#18181B] border border-zinc-700 hover:border-zinc-500 hover:text-neutral-50 rounded-lg text-sm font-medium text-zinc-300 transition-colors"
              >
                <Unlock className="h-4 w-4" />
                Unlock
              </button>
              <button 
                onClick={() => handleBulkAction('lock')}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#18181B] border border-zinc-700 hover:border-red-500/50 hover:text-red-400 rounded-lg text-sm font-medium text-zinc-300 transition-colors"
              >
                <Lock className="h-4 w-4" />
                Lock
              </button>
              <button 
                onClick={() => handleBulkAction('reset')}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#18181B] border border-zinc-700 hover:border-violet-500/50 hover:text-violet-400 rounded-lg text-sm font-medium text-zinc-300 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Reset Password
              </button>
              <div className="w-px h-6 bg-zinc-700 mx-1 border-r border-zinc-800"></div>
              <button 
                onClick={() => setSelectedUsers([])}
                className="text-sm text-zinc-400 hover:text-neutral-50 transition-colors px-2"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-zinc-800/80 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-50 mb-1">User Directory</h3>
              <p className="text-sm text-zinc-400">Manage employee accounts, roles, and access.</p>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-700 hover:border-zinc-500 rounded-lg text-sm font-medium text-neutral-300 transition-colors">
              <Download className="h-4 w-4" />
              Export CSV
            </button>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 bg-[#101012]/30">
                <th className="px-6 py-4 w-12 text-center text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  <input 
                    type="checkbox" 
                    className="rounded border-zinc-700 bg-zinc-900 text-violet-500 focus:ring-violet-500/30 cursor-pointer"
                    checked={selectedUsers.length === users.length && users.length > 0}
                    onChange={toggleAllSelection}
                  />
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Role & Dept</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Last Login</th>
                <th className="px-6 py-4 w-12 text-center text-xs font-semibold text-zinc-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80">
              {users.map((user) => (
                <tr key={user.id} className={`hover:bg-zinc-800/30 transition-colors group cursor-pointer ${selectedUsers.includes(user.id) ? 'bg-violet-900/10' : ''}`} onClick={(e) => {
                  // Allow row click to toggle if we're not clicking an interactive element
                  if ((e.target as HTMLElement).tagName !== 'INPUT' && (e.target as HTMLElement).tagName !== 'BUTTON') {
                    toggleUserSelection(user.id);
                  }
                }}>
                  <td className="px-6 py-4 text-center" onClick={(e) => e.stopPropagation()}>
                     <input 
                      type="checkbox" 
                      className="rounded border-zinc-700 bg-zinc-900 text-violet-500 focus:ring-violet-500/30 cursor-pointer"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${getRequesterColor(user.name)}`}>
                        {user.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-neutral-200 font-medium">{user.name}</span>
                        <span className="text-xs text-zinc-500 mt-0.5">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-neutral-300">{user.role}</span>
                      <span className="text-xs text-zinc-500 mt-0.5">{user.department}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(user.status)}`} />
                      <span className="text-sm text-zinc-300">{user.status}</span>
                      {user.status === 'Locked' && <Lock className="h-3 w-3 text-red-500 ml-1" />}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-400">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 text-center" onClick={(e) => e.stopPropagation()}>
                    <button className="text-zinc-500 hover:text-neutral-300 transition-colors">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
