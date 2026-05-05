import { ArrowUpRight, ArrowDownRight, Clock, AlertTriangle, CheckCircle2, Ticket } from 'lucide-react';

export function KPICards() {
  const cards = [
    {
      id: 'open-tickets',
      title: 'Open Tickets',
      value: '42',
      trend: '+12%',
      trendUp: true,
      icon: Ticket,
      isPrimary: true,
      subtext: '12 added today'
    },
    {
      id: 'sla-compliance',
      title: 'SLA Compliance',
      value: '98.2%',
      trend: '+0.4%',
      trendUp: true,
      icon: AlertTriangle,
      isPrimary: false,
      subtext: '2 active breaches',
      alert: true
    },
    {
      id: 'avg-resolution',
      title: 'MTTR (Res. Time)',
      value: '1.4h',
      trend: '-8%',
      trendUp: true,
      icon: Clock,
      isPrimary: false,
      subtext: 'Goal: < 2h'
    },
    {
      id: 'csat-score',
      title: 'CSAT Score',
      value: '4.8',
      trend: '+2%',
      trendUp: true,
      icon: CheckCircle2,
      isPrimary: false,
      subtext: '94% response rate'
    },
    {
      id: 'fcr-rate',
      title: 'FCR Rate',
      value: '72%',
      trend: '+5%',
      trendUp: true,
      icon: Activity,
      isPrimary: false,
      subtext: 'First Contact Res.'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {cards.map((card) => (
        <div 
          key={card.id}
          className={`p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between h-36 transition-all hover:translate-y-[-2px] ${
            card.isPrimary 
              ? 'bg-gradient-to-br from-violet-600 to-indigo-800 text-white shadow-[0_8px_30px_rgba(139,92,246,0.25)]'
              : 'bg-[#18181B] text-neutral-50 border border-zinc-800 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between z-10">
            <span className={`text-xs font-semibold uppercase tracking-wider ${card.isPrimary ? 'text-white/70' : 'text-zinc-500'}`}>
              {card.title}
            </span>
            <card.icon className={`h-4 w-4 ${card.isPrimary ? 'text-white' : card.alert ? 'text-red-500' : 'text-zinc-500'}`} />
          </div>

          <div className="z-10 mt-2">
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold tracking-tight">{card.value}</h3>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                card.isPrimary 
                  ? 'bg-white/20 text-white' 
                  : card.trendUp 
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-red-500/10 text-red-500'
              }`}>
                {card.trend}
              </span>
            </div>
            <p className={`text-[11px] mt-1 ${card.isPrimary ? 'text-white/60' : 'text-zinc-500'}`}>
              {card.subtext}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
