import { Search, Folder, FileText, ChevronRight, BookOpen } from 'lucide-react';

export function KnowledgeBase() {
  const categories = [
    { name: 'Hardware Setup', count: 12, icon: Folder },
    { name: 'Software Troubleshooting', count: 45, icon: Folder },
    { name: 'Network Connectivity', count: 8, icon: Folder },
    { name: 'Security Policies', count: 24, icon: Folder },
    { name: 'Onboarding Guides', count: 15, icon: Folder },
    { name: 'Admin Procedures', count: 32, icon: Folder },
  ];

  const recentDocs = [
    { title: 'How to configured the new Palo Alto VPN', author: 'Alex M.', date: 'Dec 10, 2023', views: 342 },
    { title: 'Resolving Outlook sync issues on macOS Sonoma', author: 'Jessica T.', date: 'Dec 08, 2023', views: 890 },
    { title: 'New Employee Laptop Setup Checklist', author: 'Sarah Jenkins', date: 'Dec 01, 2023', views: 104 },
    { title: 'Resetting MFA for locked out users in Okta', author: 'Sam R.', date: 'Nov 28, 2023', views: 56 },
    { title: 'Procurement guidelines for additional monitors', author: 'Operations', date: 'Nov 25, 2023', views: 241 },
  ];

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="bg-gradient-to-br from-violet-900/40 to-[#18181B] rounded-2xl p-8 border border-violet-500/20 text-center flex flex-col items-center">
        <BookOpen className="h-10 w-10 text-violet-400 mb-4" />
        <h2 className="text-2xl font-bold text-neutral-50 mb-2">IT Knowledge Base</h2>
        <p className="text-zinc-400 mb-6 max-w-lg">Search through hundreds of articles, guides, and standard operating procedures to resolve issues faster.</p>
        
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input 
            type="text" 
            placeholder="Search documentation (e.g. VPN setup)..." 
            className="w-full pl-12 pr-4 py-3 bg-[#101012]/80 border border-zinc-700/80 rounded-xl text-neutral-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-zinc-500 shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Categories Grid */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-semibold text-neutral-50 mb-4 px-1">Categories</h3>
          <div className="grid grid-cols-1 gap-2">
            {categories.map((cat) => (
              <button key={cat.name} className="flex items-center justify-between p-4 bg-[#18181B] border border-zinc-800 rounded-xl hover:border-violet-500/50 hover:bg-zinc-800/50 transition-colors group text-left">
                <div className="flex items-center gap-3">
                  <cat.icon className="h-5 w-5 text-zinc-400 group-hover:text-violet-400 transition-colors" />
                  <span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-50 transition-colors">{cat.name}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <span className="text-xs bg-zinc-800 px-2 py-0.5 rounded-full">{cat.count}</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Documents */}
        <div className="lg:col-span-2">
          <div className="bg-[#18181B] border border-zinc-800 rounded-2xl overflow-hidden flex flex-col h-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-zinc-800/80 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-50 mb-1">Recently Updated</h3>
                <p className="text-sm text-zinc-400">Latest additions and changes to documentation.</p>
              </div>
            </div>

            <div className="divide-y divide-zinc-800/80">
              {recentDocs.map((doc, idx) => (
                <div key={idx} className="p-4 sm:p-6 hover:bg-zinc-800/30 transition-colors flex items-start gap-4 cursor-pointer group">
                  <div className="p-2 bg-zinc-800/50 rounded-lg group-hover:bg-violet-500/10 transition-colors mt-0.5">
                    <FileText className="h-5 w-5 text-zinc-400 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-neutral-200 group-hover:text-violet-400 transition-colors mb-1">{doc.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-zinc-500">
                      <span>By {doc.author}</span>
                      <span>•</span>
                      <span>{doc.date}</span>
                      <span>•</span>
                      <span>{doc.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-zinc-800/80 bg-zinc-900/30 text-center">
              <button className="text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors">
                View all articles →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
