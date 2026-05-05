import { AlertCircle, Zap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function SLAAlertBanner() {
  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center justify-between group"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-red-500/20 rounded-lg">
          <AlertCircle className="h-5 w-5 text-red-500 animate-pulse" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-red-100 italic">Predictive SLA Breach Forecast</h4>
          <p className="text-xs text-red-200/70">3 tickets in <span className="font-bold underline">Software Licensing</span> are projected to breach SLA in the next 45 minutes.</p>
        </div>
      </div>
      <button className="flex items-center gap-1.5 px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-bold hover:bg-neutral-50 hover:text-red-600 transition-all shadow-lg shadow-red-500/20">
        <Zap className="h-3 w-3" />
        RE-ROUTE AGENTS
        <ChevronRight className="h-3 w-3" />
      </button>
    </motion.div>
  );
}
