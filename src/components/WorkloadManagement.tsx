import { User, Activity, Clock } from 'lucide-react';

export function WorkloadManagement() {
  const agents = [
    { name: 'Sarah J.', status: 'Active', load: 85, tickets: 12, color: 'text-green-500' },
    { name: 'Alex M.', status: 'Break', load: 40, tickets: 4, color: 'text-zinc-500' },
    { name: 'Jessica T.', status: 'Active', load: 92, tickets: 15, color: 'text-amber-500' },
    { name: 'Sam R.', status: 'Meeting', load: 0, tickets: 0, color: 'text-blue-500' },
  ];

  return (
    <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-neutral-50 uppercase tracking-wider">Agent Workload</h3>
        <span className="text-[10px] text-zinc-500 font-medium">REAL-TIME STATUS</span>
      </div>

      <div className="space-y-6">
        {agents.map((agent) => (
          <div key={agent.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                  <User className="h-4 w-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-200">{agent.name}</div>
                  <div className={`text-[10px] font-bold ${agent.color} uppercase tracking-tight flex items-center gap-1`}>
                    <div className={`w-1.5 h-1.5 rounded-full bg-current`} />
                    {agent.status}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-neutral-50">{agent.tickets} Tickets</div>
                <div className="text-[10px] text-zinc-500">{agent.load}% Utilization</div>
              </div>
            </div>
            <div className="w-full bg-zinc-800/50 rounded-full h-1.5 overflow-hidden">
               <div 
                 className={`h-full transition-all duration-500 ${agent.load > 90 ? 'bg-amber-500' : 'bg-violet-500'}`} 
                 style={{ width: `${agent.load}%` }} 
               />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-800/80 grid grid-cols-2 gap-4">
        <div className="text-center">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight mb-1">Avg Idle Time</p>
            <p className="text-lg font-bold text-neutral-50">14m</p>
        </div>
        <div className="text-center border-l border-zinc-800">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight mb-1">Queue Escalation</p>
            <p className="text-lg font-bold text-red-500">4.2%</p>
        </div>
      </div>
    </div>
  );
}
