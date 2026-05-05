import { ArrowUpRight, ArrowDownRight, Clock, AlertTriangle, CheckCircle2, Ticket } from 'lucide-react';

export function KPICards() {
  const cards = [
    {
      id: 'open-tickets',
      title: 'Open Tickets',
      value: '42',
      trend: '+12% vs last week',
      trendUp: true,
      icon: Ticket,
      isPrimary: true,
    },
    {
      id: 'resolved-today',
      title: 'Resolved Today',
      value: '118',
      trend: '+4% vs yesterday',
      trendUp: true,
      icon: CheckCircle2,
      isPrimary: false,
    },
    {
      id: 'avg-resolution',
      title: 'Avg. Resolution Time',
      value: '1.4h',
      trend: '-8% vs last week',
      trendUp: true, // "Down" is good for time, so we show it as positive green
      icon: Clock,
      isPrimary: false,
    },
    {
      id: 'sla-breaches',
      title: 'SLA Breaches',
      value: '0',
      trend: '-100% vs last month',
      trendUp: true, // good
      icon: AlertTriangle,
      isPrimary: false,
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ml:grid-cols-4 lg:grid-cols-4 flex-wrap gap-4">
      {cards.map((card) => (
        <div 
          key={card.id}
          className={`flex-1 min-w-[200px] p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between h-40 ${
            card.isPrimary 
              ? 'bg-gradient-to-br from-violet-600 to-indigo-800 text-white shadow-[0_8px_30px_rgba(139,92,246,0.3)]'
              : 'bg-[#18181B] text-neutral-50 border border-zinc-800'
          }`}
        >
          {/* Subtle background glow effect for Primary */}
          {card.isPrimary && (
             <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          )}

          <div className="flex items-center justify-between z-10">
            <span className={`text-sm font-medium ${card.isPrimary ? 'text-white/80' : 'text-zinc-400'}`}>
              {card.title}
            </span>
            <div className={`p-2 rounded-lg ${card.isPrimary ? 'bg-white/10' : 'bg-[#27272A]'}`}>
              <card.icon className={`h-4 w-4 ${card.isPrimary ? 'text-white' : 'text-zinc-400'}`} />
            </div>
          </div>

          <div className="z-10 mt-4">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="text-4xl font-bold tracking-tight">{card.value}</h3>
            </div>
            
            <div className="flex items-center gap-1 mt-2">
              <span className={`flex items-center text-xs font-medium ${
                card.isPrimary 
                  ? 'text-white/90' 
                  : card.trendUp 
                    ? 'text-green-500'
                    : 'text-red-500'
              }`}>
                {card.trendUp ? (
                  <ArrowUpRight className="h-3 w-3 mr-0.5" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 mr-0.5" />
                )}
                {card.trend}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
