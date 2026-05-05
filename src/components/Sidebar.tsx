import { 
  BarChart, 
  Ticket, 
  Monitor, 
  CreditCard, 
  Users, 
  Wifi, 
  BookOpen,
  Activity
} from 'lucide-react';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export function Sidebar({ activePage, setActivePage }: SidebarProps) {
  const navItems = [
    { name: 'Dashboard', icon: BarChart },
    { name: 'Tickets', icon: Ticket },
    { name: 'Hardware Assets', icon: Monitor },
    { name: 'Software Licenses', icon: CreditCard },
    { name: 'Active Directory', icon: Users },
    { name: 'Network Status', icon: Wifi },
    { name: 'Knowledge Base', icon: BookOpen },
  ];

  return (
    <aside className="w-64 bg-[#101012] border-r border-zinc-800 flex flex-col h-full sticky top-0 shrink-0">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">IT</span>
          </div>
          <span className="text-neutral-50 font-semibold text-lg tracking-tight">Helpdesk</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <div className="mb-4 px-2">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Internal Navigation</span>
        </div>
        {navItems.map((item) => {
          const isActive = activePage === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]' 
                  : 'text-zinc-400 hover:text-neutral-50 hover:bg-zinc-800/50'
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-zinc-400'}`} />
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* Bottom Promo Widget */}
      <div className="p-4 mb-4">
        <div className="bg-[#18181B] rounded-xl p-4 border border-violet-500/20 shadow-[0_4px_20px_rgba(139,92,246,0.05)]">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-4 w-4 text-violet-500" />
            <h4 className="text-neutral-50 font-medium text-sm">System Status</h4>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed mb-3">
            All Core Systems Operational. Last checked 2 mins ago.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
            <span className="text-xs font-medium text-green-500">100% Uptime</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
