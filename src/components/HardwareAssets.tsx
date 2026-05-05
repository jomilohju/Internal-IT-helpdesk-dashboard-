import { Download, Monitor, Laptop, Smartphone, Server, MoreHorizontal } from 'lucide-react';

export function HardwareAssets() {
  const assets = [
    { id: 'HW-1042', type: 'Laptop', model: 'MacBook Pro 16" M2', status: 'In Use', assignee: 'Sarah Jenkins', department: 'Engineering', date: 'Oct 12, 2023' },
    { id: 'HW-1043', type: 'Monitor', model: 'Dell UltraSharp 27"', status: 'Available', assignee: '-', department: '-', date: 'Nov 05, 2023' },
    { id: 'HW-1044', type: 'Laptop', model: 'ThinkPad X1 Carbon', status: 'In Repair', assignee: 'David Chen', department: 'Sales', date: 'Sep 18, 2023' },
    { id: 'HW-1045', type: 'Accessory', model: 'Magic Keyboard', status: 'In Use', assignee: 'Emma Wilson', department: 'Design', date: 'Dec 01, 2023' },
    { id: 'HW-1046', type: 'Phone', model: 'iPhone 14 Pro', status: 'In Use', assignee: 'Michael Brown', department: 'Management', date: 'Aug 22, 2023' },
    { id: 'HW-1047', type: 'Server', model: 'Dell PowerEdge R740', status: 'In Use', assignee: 'IT Ops', department: 'IT', date: 'Jan 10, 2023' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Available': return 'bg-green-500';
      case 'In Use': return 'bg-violet-500';
      case 'In Repair': return 'bg-amber-500';
      default: return 'bg-zinc-500';
    }
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'Laptop': return <Laptop className="h-4 w-4 text-zinc-400" />;
      case 'Monitor': return <Monitor className="h-4 w-4 text-zinc-400" />;
      case 'Phone': return <Smartphone className="h-4 w-4 text-zinc-400" />;
      case 'Server': return <Server className="h-4 w-4 text-zinc-400" />;
      default: return <Monitor className="h-4 w-4 text-zinc-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-zinc-800/80 pb-6">
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Total Assets</h3>
            <p className="text-3xl font-bold text-neutral-50 tracking-tight">842</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">In Use</h3>
            <p className="text-3xl font-bold text-violet-500 tracking-tight">721</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Available</h3>
            <p className="text-3xl font-bold text-green-500 tracking-tight">98</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">In Repair</h3>
            <p className="text-3xl font-bold text-amber-500 tracking-tight">23</p>
        </div>
      </div>

      <div className="bg-[#18181B] border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-zinc-800/80 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-neutral-50 mb-1">Hardware Inventory</h3>
            <p className="text-sm text-zinc-400">Manage all registered physical devices.</p>
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
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Asset / ID</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Assignee</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Date Tracked</th>
                <th className="px-6 py-4 w-12 text-center text-xs font-semibold text-zinc-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80">
              {assets.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-800/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-neutral-200 font-medium">{item.model}</span>
                      <span className="text-xs text-zinc-500 mt-0.5 font-mono">{item.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-300">
                      {getIcon(item.type)}
                      {item.type}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(item.status)}`} />
                      <span className="text-sm text-zinc-300">{item.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                      <span className="text-sm text-neutral-300">{item.assignee}</span>
                      {item.department !== '-' && (
                         <span className="block text-xs text-zinc-500 mt-0.5">{item.department}</span>
                      )}
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-400">
                    {item.date}
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
