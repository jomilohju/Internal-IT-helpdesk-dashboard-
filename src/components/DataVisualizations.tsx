import { 
  LineChart, Line, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart as RechartsBarChart, Bar, Cell, CartesianGrid
} from 'recharts';

export function DataVisualizations() {
  const lineData = [
    { day: 'Mon', incoming: 120, closed: 90 },
    { day: 'Tue', incoming: 145, closed: 110 },
    { day: 'Wed', incoming: 110, closed: 130 },
    { day: 'Thu', incoming: 180, closed: 140 },
    { day: 'Fri', incoming: 150, closed: 160 },
    { day: 'Sat', incoming: 80, closed: 100 },
    { day: 'Sun', incoming: 60, closed: 90 },
  ];

  // Progress Bars data
  const categoryData = [
    { name: 'Hardware Requests', value: 85, color: '#A855F7' },
    { name: 'Software / Access', value: 70, color: '#8B5CF6' },
    { name: 'Network Issues', value: 45, color: '#7C3AED' },
    { name: 'Account Locked', value: 38, color: '#6D28D9' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Line Chart Panel */}
      <div className="lg:col-span-2 bg-[#18181B] rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[350px]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-50 mb-1">Ticket Volume</h3>
            <p className="text-sm text-zinc-400">Incoming vs Closed over the last 7 days</p>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
             <div className="flex items-center gap-2">
               <span className="w-2.5 h-2.5 rounded-full bg-violet-500"></span>
               <span className="text-zinc-300">Incoming</span>
             </div>
             <div className="flex items-center gap-2">
               <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
               <span className="text-zinc-300">Closed</span>
             </div>
          </div>
        </div>
        
        <div className="flex-1 w-full min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#A1A1AA', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#A1A1AA', fontSize: 12 }}
                tickCount={5}
              />
              <RechartsTooltip 
                contentStyle={{ 
                  backgroundColor: '#18181B', 
                  border: '1px solid #27272A',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  color: '#FAFAFA'
                }}
                itemStyle={{ color: '#FAFAFA' }}
              />
              <Line 
                type="monotone" 
                dataKey="incoming" 
                stroke="#8B5CF6" 
                strokeWidth={3} 
                dot={false}
                activeDot={{ r: 6, fill: '#8B5CF6', stroke: '#18181B', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="closed" 
                stroke="#EAB308" 
                strokeWidth={3} 
                dot={false}
                activeDot={{ r: 6, fill: '#EAB308', stroke: '#18181B', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Progress Bars Panel */}
      <div className="bg-[#18181B] rounded-2xl border border-zinc-800 p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-neutral-50 mb-1">Tickets by Category</h3>
        <p className="text-sm text-zinc-400 mb-8">Current distribution of open issues</p>

        <div className="flex-1 flex flex-col justify-center space-y-6">
          {categoryData.map((item) => (
            <div key={item.name} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-zinc-300">{item.name}</span>
                <span className="text-sm font-bold text-neutral-50">{item.value}%</span>
              </div>
              <div className="h-2.5 w-full bg-[#101012] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${item.value}%`,
                    backgroundColor: item.color,
                    boxShadow: `0 0 10px ${item.color}40`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
