import { Download, Clock, MoreHorizontal } from 'lucide-react';

export function SoftwareLicenses() {
  const licenses = [
    { id: 'SW-110', name: 'Adobe Creative Cloud', type: 'Subscription', seatsUsed: 42, seatsTotal: 50, cost: '$840.00/mo', status: 'Active', renewal: 'Jan 15, 2025' },
    { id: 'SW-111', name: 'Microsoft 365 E5', type: 'Enterprise', seatsUsed: 410, seatsTotal: 450, cost: '$15,750.00/mo', status: 'Active', renewal: 'Mar 01, 2024' },
    { id: 'SW-112', name: 'Jira Software', type: 'Subscription', seatsUsed: 150, seatsTotal: 150, cost: '$1,125.00/mo', status: 'At Capacity', renewal: 'Dec 22, 2023' },
    { id: 'SW-113', name: 'Figma Organization', type: 'Subscription', seatsUsed: 38, seatsTotal: 40, cost: '$1,710.00/mo', status: 'Active', renewal: 'Feb 10, 2024' },
    { id: 'SW-114', name: 'JetBrains All Products', type: 'Perpetual', seatsUsed: 25, seatsTotal: 30, cost: '$0.00/mo', status: 'Active', renewal: 'N/A' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return 'bg-green-500';
      case 'At Capacity': return 'bg-amber-500';
      case 'Expired': return 'bg-red-500';
      default: return 'bg-zinc-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-zinc-800/80 pb-6">
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Monthly Spend</h3>
            <p className="text-3xl font-bold text-neutral-50 tracking-tight">$19,425</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Total Assigned Seats</h3>
            <p className="text-3xl font-bold text-violet-500 tracking-tight">665</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Available Seats</h3>
            <p className="text-3xl font-bold text-green-500 tracking-tight">55</p>
        </div>
      </div>

      <div className="bg-[#18181B] border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-zinc-800/80 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-neutral-50 mb-1">Software & Subscriptions</h3>
            <p className="text-sm text-zinc-400">View active licenses, renewals, and seat allocations.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-700 hover:border-zinc-500 rounded-lg text-sm font-medium text-neutral-300 transition-colors">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 bg-[#101012]/30">
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Software</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Seats</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Cost</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Next Renewal</th>
                <th className="px-6 py-4 w-12 text-center text-xs font-semibold text-zinc-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80">
              {licenses.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-800/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-neutral-200 font-medium">{item.name}</span>
                      <span className="text-xs text-zinc-500 mt-0.5">{item.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <span className={`text-sm font-medium ${item.seatsUsed >= item.seatsTotal ? 'text-amber-500' : 'text-neutral-300'}`}>
                         {item.seatsUsed} / {item.seatsTotal}
                       </span>
                    </div>
                    <div className="h-1.5 w-full max-w-[80px] bg-[#101012] rounded-full overflow-hidden mt-1.5">
                       <div className={`h-full rounded-full ${item.seatsUsed >= item.seatsTotal ? 'bg-amber-500' : 'bg-violet-500'}`} style={{ width: `${(item.seatsUsed / item.seatsTotal) * 100}%` }} />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(item.status)}`} />
                      <span className="text-sm text-zinc-300">{item.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-300 font-mono">
                    {item.cost}
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {item.renewal}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
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
