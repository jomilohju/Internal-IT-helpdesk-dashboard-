import { Sparkles, TrendingDown, Info, Lightbulb, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function AIInsights() {
  const insights = [
    {
      id: 1,
      type: 'anomaly',
      title: 'Latency Spike Detected',
      description: 'Sudden 40% increase in network-related tickets from the London office in the last 2 hours.',
      action: 'Check London VPN Gateway',
      icon: TrendingDown,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
    },
    {
      id: 2,
      type: 'suggestion',
      title: 'Recurring Outlook Issue',
      description: '5 same tickets merged. Suggesting an update to the "Outlook macOS Sonoma" KB article.',
      action: 'Review Suggestion',
      icon: Lightbulb,
      color: 'text-violet-400',
      bg: 'bg-violet-400/10',
    },
    {
      id: 3,
      type: 'summary',
      title: 'Morning Briefing',
      description: 'Backlog aging is improving. 12 high-priority tickets resolved since 8:00 AM.',
      icon: Info,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
    }
  ];

  return (
    <div className="bg-[#18181B] border border-zinc-800 rounded-2xl overflow-hidden shadow-sm h-full">
      <div className="p-4 border-b border-zinc-800/80 bg-zinc-900/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-violet-400" />
          <h3 className="text-sm font-semibold text-neutral-50">AI Insights & Copilot</h3>
        </div>
        <span className="text-[10px] bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-tight">Beta</span>
      </div>
      
      <div className="p-4 space-y-4">
        {insights.map((insight, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={insight.id} 
            className={`p-3 rounded-xl border border-zinc-800/50 hover:border-zinc-700 transition-all ${insight.bg}`}
          >
            <div className="flex gap-3">
              <div className={`p-2 rounded-lg bg-[#101012]/80 h-fit ${insight.color}`}>
                <insight.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-neutral-100 truncate">{insight.title}</h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed line-clamp-2">
                  {insight.description}
                </p>
                {insight.action && (
                  <button className="text-[10px] font-bold text-violet-400 mt-2 flex items-center gap-1 hover:text-violet-300">
                    <Zap className="h-3 w-3" />
                    {insight.action}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="p-4 bg-[#101012] border-t border-zinc-800/80 mt-auto">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask AI about tickets..."
            className="w-full pl-3 pr-10 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-neutral-300 focus:outline-none focus:border-violet-500 transition-all"
          />
          <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-3 w-3 text-zinc-500" />
        </div>
      </div>
    </div>
  );
}
