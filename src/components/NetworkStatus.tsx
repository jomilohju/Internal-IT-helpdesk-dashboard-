import { CheckCircle2, AlertTriangle, XCircle, Activity, Server, Database, Globe, Cloud } from 'lucide-react';

export function NetworkStatus() {
  const services = [
    { id: 'SVC-01', name: 'Main Corporate VPN', category: 'Network', status: 'Operational', uptime: '99.99%', latency: '24ms', icon: Globe },
    { id: 'SVC-02', name: 'Authentication (SSO)', category: 'Security', status: 'Operational', uptime: '100%', latency: '45ms', icon: Shield },
    { id: 'SVC-03', name: 'Internal Wiki', category: 'Application', status: 'Degraded', uptime: '98.5%', latency: '450ms', icon: Cloud },
    { id: 'SVC-04', name: 'HR System', category: 'Application', status: 'Operational', uptime: '99.9%', latency: '120ms', icon: Cloud },
    { id: 'SVC-05', name: 'Primary Database', category: 'Infrastructure', status: 'Operational', uptime: '99.999%', latency: '5ms', icon: Database },
    { id: 'SVC-06', name: 'Storage Cluster B', category: 'Infrastructure', status: 'Down', uptime: '92.1%', latency: '-', icon: Server },
  ];

  const getStatusDisplay = (status: string) => {
    switch(status) {
      case 'Operational': 
        return { color: 'text-green-500', bg: 'bg-green-500/10', icon: <CheckCircle2 className="h-4 w-4" /> };
      case 'Degraded': 
        return { color: 'text-amber-500', bg: 'bg-amber-500/10', icon: <AlertTriangle className="h-4 w-4" /> };
      case 'Down': 
        return { color: 'text-red-500', bg: 'bg-red-500/10', icon: <XCircle className="h-4 w-4" /> };
      default: 
        return { color: 'text-zinc-500', bg: 'bg-zinc-500/10', icon: <AlertTriangle className="h-4 w-4" /> };
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-zinc-800/80 pb-6">
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity className="h-24 w-24 text-green-500" />
            </div>
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Overall System Status</h3>
            <p className="text-3xl font-bold text-green-500 tracking-tight">99.8%</p>
            <p className="text-sm text-zinc-500 mt-2">All core systems operational</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Active Incidents</h3>
            <p className="text-3xl font-bold text-amber-500 tracking-tight">1</p>
            <p className="text-sm text-zinc-500 mt-2">1 degraded, 1 down</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Avg Response Time</h3>
            <p className="text-3xl font-bold text-neutral-50 tracking-tight">142ms</p>
            <p className="text-sm text-zinc-500 mt-2">Across all monitored endpoints</p>
        </div>
      </div>

      <div className="bg-[#18181B] border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-zinc-800/80 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-neutral-50 mb-1">Service Health</h3>
            <p className="text-sm text-zinc-400">Real-time status of internal infrastructure.</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 bg-[#101012]/30">
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Uptime (30d)</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Latency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80">
              {services.map((service) => {
                const statusInfo = getStatusDisplay(service.status);
                return (
                  <tr key={service.id} className="hover:bg-zinc-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-zinc-800/50`}>
                           <service.icon className="h-4 w-4 text-zinc-400" />
                        </div>
                        <span className="text-sm text-neutral-200 font-medium">{service.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusInfo.bg} ${statusInfo.color}`}>
                        {statusInfo.icon}
                        {service.status}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-zinc-400">{service.category}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-300">
                      {service.uptime}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-400 font-mono">
                      {service.latency}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Shield(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
}
