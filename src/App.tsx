/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { KPICards } from './components/KPICards';
import { DataVisualizations } from './components/DataVisualizations';
import { TicketList } from './components/TicketList';
import { TicketsPage } from './components/TicketsPage';
import { HardwareAssets } from './components/HardwareAssets';
import { SoftwareLicenses } from './components/SoftwareLicenses';
import { ActiveDirectory } from './components/ActiveDirectory';
import { NetworkStatus } from './components/NetworkStatus';
import { KnowledgeBase } from './components/KnowledgeBase';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <div className="flex h-screen bg-[#101012] text-neutral-50 font-sans overflow-hidden">
      {isSidebarOpen && <Sidebar activePage={activePage} setActivePage={setActivePage} />}
      <main className="flex-1 overflow-y-auto w-full">
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
          <TopNav 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            activePage={activePage}
          />
          
          {activePage === 'Dashboard' && (
            <>
              {activeTab === 'overview' && (
                <>
                  <KPICards />
                  <DataVisualizations />
                  <TicketList filter="all" title="Active Helpdesk Queue" subtitle="Recently updated tickets" />
                </>
              )}

              {activeTab === 'open-tickets' && (
                <TicketList filter="open" title="Open Tickets" subtitle="All unresolved tickets across the helpdesk." />
              )}

              {activeTab === 'resolved' && (
                <TicketList filter="resolved" title="Resolved (30 Days)" subtitle="Tickets closed in the last 30 days." />
              )}
            </>
          )}

          {activePage === 'Tickets' && <TicketsPage />}
          {activePage === 'Hardware Assets' && <HardwareAssets />}
          {activePage === 'Software Licenses' && <SoftwareLicenses />}
          {activePage === 'Active Directory' && <ActiveDirectory />}
          {activePage === 'Network Status' && <NetworkStatus />}
          {activePage === 'Knowledge Base' && <KnowledgeBase />}

        </div>
      </main>
    </div>
  );
}

