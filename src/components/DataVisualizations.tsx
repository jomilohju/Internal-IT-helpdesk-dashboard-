import { 
  XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer,
  AreaChart, Area, CartesianGrid
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Target, RefreshCw } from 'lucide-react';

export function DataVisualizations() {
  const data = [
    { name: '08:00', incoming: 40, resolved: 30, backlog: 10 },
    { name: '10:00', incoming: 65, resolved: 48, backlog: 17 },
    { name: '12:00', incoming: 118, resolved: 85, backlog: 33 },
    { name: '14:00', incoming: 90, resolved: 110, backlog: 25 },
    { name: '16:00', incoming: 125, resolved: 105, backlog: 45 },
    { name: '18:00', incoming: 85, resolved: 70, backlog: 60 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      
      {/* Main Multi-Metric Chart */}
      <div className="lg:col-span-3 bg-[#18181B] rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[400px]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-50 mb-1">Live Ticket Volume & Throughput</h3>
            <p className="text-sm text-zinc-400">Real-time incoming vs resolution rate across all channels.</p>
          </div>
          <div className="flex items-center gap-6 px-1">
             <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-violet-600 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
               <span className="text-[11px] text-zinc-400 font-bold tracking-tight uppercase">Incoming</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
               <span className="text-[11px] text-zinc-400 font-bold tracking-tight uppercase">Resolved</span>
             </div>
          </div>
        </div>
        
        <div className="flex-1 w-full min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 11 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 11 }} 
              />
              <RechartsTooltip 
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px' }}
                itemStyle={{ fontSize: '12px' }}
              />
              <Area 
                type="monotone" 
                dataKey="incoming" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorTotal)" 
                animationDuration={1500}
              />
              <Area 
                type="monotone" 
                dataKey="resolved" 
                stroke="#10b981" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorResolved)" 
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Secondary Snapshot Metrics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-zinc-800/80">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-500 mb-1">
              <RefreshCw className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Deflection</span>
            </div>
            <p className="text-xl font-bold text-neutral-50">34.2%</p>
            <span className="text-[10px] text-green-500 font-bold flex items-center gap-0.5">
              <TrendingUp className="h-2.5 w-2.5" /> +5.1% WoW
            </span>
          </div>
          <div className="space-y-1 border-l border-zinc-800 pl-6">
            <div className="flex items-center gap-2 text-zinc-500 mb-1">
              <Target className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Recurring</span>
            </div>
            <p className="text-xl font-bold text-neutral-50">12%</p>
            <span className="text-[10px] text-zinc-500 font-bold italic">Top: VPN Auth</span>
          </div>
          <div className="space-y-1 border-l border-zinc-800 pl-6">
            <div className="flex items-center gap-2 text-zinc-500 mb-1">
              <DollarSign className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Cost/Ticket</span>
            </div>
            <p className="text-xl font-bold text-neutral-50">$18.50</p>
            <span className="text-[10px] text-green-500 font-bold flex items-center gap-0.5">
              <TrendingDown className="h-2.5 w-2.5" /> -2.4% MoM
            </span>
          </div>
          <div className="space-y-1 border-l border-zinc-800 pl-6">
            <div className="flex items-center gap-2 text-zinc-500 mb-1">
              <Activity className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Escalation</span>
            </div>
            <p className="text-xl font-bold text-neutral-50">4.2%</p>
            <span className="text-[10px] text-red-500 font-bold">Limit: 5%</span>
          </div>
        </div>
      </div>

      {/* Right Column Statistics (e.g. Backlog Aging) */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-[#18181B] rounded-2xl border border-zinc-800 p-6 shadow-sm h-full flex flex-col">
          <h3 className="text-sm font-semibold text-neutral-50 uppercase tracking-wider mb-6">Backlog Aging</h3>
          <div className="space-y-5 flex-1">
            {[
              { label: '0-24 Hours', value: 24, percent: 55, color: 'bg-emerald-500' },
              { label: '1-3 Days', value: 12, percent: 28, color: 'bg-blue-500' },
              { label: '3-7 Days', value: 4, percent: 12, color: 'bg-amber-500' },
              { label: '7+ Days', value: 2, percent: 5, color: 'bg-red-500' },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-zinc-400">{item.label}</span>
                  <span className="text-neutral-50">{item.value} tickets</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                   <div 
                     className={`h-full ${item.color} shadow-[0_0_8px_current] opacity-80`} 
                     style={{ width: `${item.percent}%` }} 
                   />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800/80 text-center">
            <button className="text-xs font-bold text-violet-400 hover:text-violet-300 transition-colors uppercase tracking-widest">
              Full Aging Report →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Activity(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
}
