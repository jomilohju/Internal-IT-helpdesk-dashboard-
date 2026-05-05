import { Download, MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react';

interface TicketListProps {
  filter?: 'all' | 'open' | 'resolved';
  title?: string;
  subtitle?: string;
}

export function TicketList({ 
  filter = 'all', 
  title = 'Active Helpdesk Queue', 
  subtitle = 'Recently updated tickets' 
}: TicketListProps) {
  const allTickets = [
    {
      id: 'TKT-9021',
      subject: 'MacBook stuck on loading logo',
      requester: 'Sarah Jenkins',
      requesterInitial: 'S',
      date: 'Dec 13, 2023',
      status: 'In Progress',
      tech: 'Alex M.',
      techAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    },
    {
      id: 'TKT-9020',
      subject: 'VPN Access Denied - MFA Error',
      requester: 'David Chen',
      requesterInitial: 'D',
      date: 'Dec 13, 2023',
      status: 'Escalated',
      tech: 'Sam R.',
      techAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
      id: 'TKT-9019',
      subject: 'Request for Jira License',
      requester: 'Emma Wilson',
      requesterInitial: 'E',
      date: 'Dec 12, 2023',
      status: 'Resolved',
      tech: 'Alex M.',
      techAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    },
    {
      id: 'TKT-9018',
      subject: 'Office Monitor Replacement',
      requester: 'Michael Brown',
      requesterInitial: 'M',
      date: 'Dec 12, 2023',
      status: 'Resolved',
      tech: 'Jessica T.',
      techAvatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    },
    {
      id: 'TKT-9017',
      subject: 'Cannot connect to Guest WiFi',
      requester: 'Visitor (via Reception)',
      requesterInitial: 'V',
      date: 'Dec 12, 2023',
      status: 'In Progress',
      tech: 'Sam R.',
      techAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Resolved': return 'bg-green-500';
      case 'In Progress': return 'bg-zinc-400';
      case 'Escalated': return 'bg-red-500';
      default: return 'bg-zinc-500';
    }
  };

  const getRequesterColor = (initial: string) => {
    const colors = [
      'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 
      'bg-rose-500', 'bg-cyan-500', 'bg-indigo-500'
    ];
    const index = initial.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const displayTickets = allTickets.filter(ticket => {
    if (filter === 'all') return true;
    if (filter === 'open') return ticket.status !== 'Resolved';
    if (filter === 'resolved') return ticket.status === 'Resolved';
    return true;
  });

  return (
    <div className="bg-[#18181B] border border-zinc-800 rounded-2xl overflow-hidden mt-6 flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-zinc-800/80 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-neutral-50 mb-1">{title}</h3>
          <p className="text-sm text-zinc-400">{subtitle}</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-700 hover:border-zinc-500 rounded-lg text-sm font-medium text-neutral-300 transition-colors">
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-[#101012]/30">
              <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Subject / ID</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Requester</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Date Submitted</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider text-right">Assigned Tech</th>
              <th className="px-6 py-4 w-12 text-center text-xs font-semibold text-zinc-400 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/80">
            {displayTickets.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">
                  No tickets found in this view.
                </td>
              </tr>
            ) : (
              displayTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-zinc-800/30 transition-colors group cursor-pointer">
                {/* Subject & ID */}
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                       <span className="text-sm text-neutral-200 font-medium group-hover:text-violet-400 transition-colors">{ticket.subject}</span>
                       {displayTickets.indexOf(ticket) % 3 === 0 && (
                          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-500/10 text-[8px] font-bold text-red-500 uppercase tracking-tighter shadow-[0_0_5px_rgba(239,68,68,0.2)]">
                            <TrendingDown className="h-2 w-2" />
                            FRUSTRATED
                          </div>
                       )}
                       {displayTickets.indexOf(ticket) % 5 === 0 && (
                          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/10 text-[8px] font-bold text-green-500 uppercase tracking-tighter shadow-[0_0_5px_rgba(16,185,129,0.2)]">
                            <TrendingUp className="h-2 w-2" />
                            POSITIVE
                          </div>
                       )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-zinc-500 font-mono opacity-60">{ticket.id}</span>
                      <span className="text-[10px] px-1.5 py-0.25 bg-zinc-800 rounded text-zinc-400 border border-zinc-700/50">AI Summary Available</span>
                    </div>
                  </div>
                </td>

                {/* Requester */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${getRequesterColor(ticket.requesterInitial)}`}>
                      {ticket.requesterInitial}
                    </div>
                    <span className="text-sm text-neutral-300">{ticket.requester}</span>
                  </div>
                </td>

                {/* Date */}
                <td className="px-6 py-4 text-sm text-zinc-400">
                  {ticket.date}
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(ticket.status)}`} />
                    <span className="text-sm text-zinc-300">{ticket.status}</span>
                  </div>
                </td>

                {/* Assigned Tech */}
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-sm text-zinc-400 group-hover:text-neutral-300 transition-colors">{ticket.tech}</span>
                     <img 
                        src={ticket.techAvatar} 
                        alt={ticket.tech} 
                        className="w-8 h-8 rounded-full border border-zinc-700" 
                      />
                  </div>
                </td>
                
                {/* Actions */}
                <td className="px-6 py-4 text-center">
                  <button className="text-zinc-500 hover:text-neutral-300 transition-colors">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
