import { Search, Calendar, Plus, Bell, Menu, X, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { NewTicketModal } from './NewTicketModal';

interface TopNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  activePage: string;
}

export function TopNav({ activeTab, setActiveTab, isSidebarOpen, setIsSidebarOpen, activePage }: TopNavProps) {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Close notifications when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, text: "High priority ticket TKT-9020 assigned to you", time: "5m ago", read: false },
    { id: 2, text: "Server cluster B latency spike detected", time: "1h ago", read: false },
    { id: 3, text: "Software License renewal due for Figma", time: "1d ago", read: true },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      
      {/* Tabs and Sidebar Toggle */}
      <div className="flex items-center gap-6 border-b border-zinc-800">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 mb-2 bg-[#18181B] border border-zinc-800 rounded-lg text-zinc-400 hover:text-neutral-200 hover:border-zinc-700 transition-colors flex"
        >
          <Menu className="h-4 w-4" />
        </button>

        {activePage === 'Dashboard' ? (
          <>
            <button 
              onClick={() => setActiveTab('overview')}
              className={`pb-3 text-sm font-medium relative transition-colors ${activeTab === 'overview' ? 'text-neutral-50 border-b-2 border-violet-500' : 'text-zinc-400 hover:text-neutral-300'}`}
            >
              Overview
              {activeTab === 'overview' && (
                <div className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab('open-tickets')}
              className={`pb-3 text-sm font-medium relative transition-colors ${activeTab === 'open-tickets' ? 'text-neutral-50 border-b-2 border-violet-500' : 'text-zinc-400 hover:text-neutral-300'}`}
            >
              Open Tickets
              {activeTab === 'open-tickets' && (
                <div className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab('resolved')}
              className={`pb-3 text-sm font-medium relative transition-colors ${activeTab === 'resolved' ? 'text-neutral-50 border-b-2 border-violet-500' : 'text-zinc-400 hover:text-neutral-300'}`}
            >
              Resolved (30 Days)
              {activeTab === 'resolved' && (
                <div className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              )}
            </button>
          </>
        ) : (
          <h2 className="pb-3 text-lg font-semibold text-neutral-50 border-b-2 border-transparent">
            {activePage}
          </h2>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input 
            type="text" 
            placeholder="Search ID, Name..." 
            className="pl-9 pr-4 py-2 bg-[#18181B] border border-zinc-800 rounded-lg text-sm text-neutral-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all w-60 placeholder:text-zinc-500"
          />
        </div>

        {/* Date Picker Button */}
        <button className="flex items-center gap-2 px-3 py-2 bg-[#18181B] border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:border-zinc-700 transition-colors">
          <Calendar className="h-4 w-4 text-zinc-400" />
          Today, Dec 13
        </button>

        {/* Notification */}
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="p-2 text-zinc-400 hover:text-neutral-200 transition-colors relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-violet-500 border border-[#101012]"></span>
          </button>
          
          {/* Notifications Dropdown */}
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-[#18181B] border border-zinc-800 rounded-2xl shadow-2xl z-50 overflow-hidden transform origin-top-right transition-all">
              <div className="p-4 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/30">
                <h3 className="text-sm font-semibold text-neutral-50">Notifications</h3>
                <button className="text-xs text-violet-400 hover:text-violet-300 font-medium">Mark all as read</button>
              </div>
              <div className="max-h-80 overflow-y-auto divide-y divide-zinc-800/50">
                {notifications.map(notif => (
                  <div key={notif.id} className={`p-4 transition-colors hover:bg-zinc-800/30 cursor-pointer ${notif.read ? 'opacity-70' : 'bg-violet-900/10'}`}>
                    <div className="flex items-start justify-between gap-2">
                       <p className={`text-sm ${notif.read ? 'text-zinc-400' : 'text-neutral-200 font-medium'}`}>{notif.text}</p>
                       {!notif.read && <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0 mt-1.5"></span>}
                    </div>
                    <span className="text-xs text-zinc-500 mt-2 block">{notif.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* New Ticket */}
        <button 
          onClick={() => setIsNewTicketOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all ml-2"
        >
          <Plus className="h-4 w-4" />
          New Ticket
        </button>
      </div>

      <NewTicketModal isOpen={isNewTicketOpen} onClose={() => setIsNewTicketOpen(false)} />
    </div>
  );
}
