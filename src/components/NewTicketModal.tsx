import { X, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface NewTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewTicketModal({ isOpen, onClose }: NewTicketModalProps) {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('Hardware');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      onClose();
      // Optionally reset form
      setSubject('');
      setDescription('');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#18181B] border border-zinc-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800/80">
          <h2 className="text-xl font-bold text-neutral-50">Create New Ticket</h2>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-neutral-300 transition-colors p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Subject</label>
            <input 
              type="text" 
              required
              placeholder="Brief summary of the issue"
              className="w-full px-4 py-2.5 bg-[#101012] border border-zinc-800 rounded-xl text-neutral-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-zinc-600"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Category</label>
              <select 
                className="w-full px-4 py-2.5 bg-[#101012] border border-zinc-800 rounded-xl text-neutral-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all appearance-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Hardware</option>
                <option>Software</option>
                <option>Network</option>
                <option>Access/Account</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Priority</label>
              <select 
                className="w-full px-4 py-2.5 bg-[#101012] border border-zinc-800 rounded-xl text-neutral-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all appearance-none"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Description</label>
            <textarea 
              rows={4}
              required
              placeholder="Provide detailed information about the issue..."
              className="w-full px-4 py-3 bg-[#101012] border border-zinc-800 rounded-xl text-neutral-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-zinc-600 resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button 
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-zinc-300 hover:text-neutral-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all"
            >
              <Send className="h-4 w-4" />
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
