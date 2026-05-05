import { TicketList } from './TicketList';

export function TicketsPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-zinc-800/80 pb-6">
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Total Tickets</h3>
            <p className="text-3xl font-bold text-neutral-50 tracking-tight">1,248</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Unassigned</h3>
            <p className="text-3xl font-bold text-amber-500 tracking-tight">12</p>
        </div>
        <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-zinc-400 text-sm font-medium mb-1">Critical Priority</h3>
            <p className="text-3xl font-bold text-red-500 tracking-tight">3</p>
        </div>
      </div>
      
      <TicketList filter="all" title="All Firm-wide Tickets" subtitle="Comprehensive view of all active and resolved tickets." />
    </div>
  );
}
