import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const AppLayout: React.FC = () => {
  const [globalSearch, setGlobalSearch] = useState('');

  return (
    <div className="min-h-screen bg-background text-on-surface flex">
      <Sidebar />
      <div className="flex-1 pl-64 flex flex-col min-h-screen">
        <Header searchQuery={globalSearch} onSearchChange={setGlobalSearch} />
        <main className="pt-16 flex-1 bg-background">
          <Outlet context={{ globalSearch }} />
        </main>
      </div>
    </div>
  );
};
