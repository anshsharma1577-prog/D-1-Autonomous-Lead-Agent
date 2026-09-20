import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Shield, Bell } from 'lucide-react';

interface HeaderProps {
  onSearchChange?: (val: string) => void;
  searchQuery?: string;
}

export const Header: React.FC<HeaderProps> = ({ onSearchChange, searchQuery }) => {
  const location = useLocation();

  const getBreadcrumbTitle = () => {
    switch (location.pathname) {
      case '/':
      case '/dashboard':
        return 'Overview & Command Center';
      case '/icp-builder':
        return 'ICP Definition & Rules';
      case '/leads':
        return 'Qualified Lead Explorer';
      case '/history':
        return 'Research History & Audit';
      default:
        if (location.pathname.startsWith('/research')) return 'Autonomous Research Execution';
        if (location.pathname.startsWith('/leads/')) return 'Lead Intelligence Dossier';
        return 'Workspace';
    }
  };

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface/85 backdrop-blur-xl border-b border-surface-container/70 z-40 flex items-center justify-between px-6">
      {/* Breadcrumb Hierarchy */}
      <div className="flex items-center gap-2 text-xs">
        <span className="text-outline font-medium">Apex Intel</span>
        <span className="text-outline-variant font-mono">/</span>
        <span className="text-outline font-medium">Workspace</span>
        <span className="text-outline-variant font-mono">/</span>
        <span className="text-on-surface font-semibold">{getBreadcrumbTitle()}</span>
      </div>

      {/* Search Input Bar */}
      <div className="flex-1 max-w-md mx-6">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-outline absolute left-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Search accounts, domains, signals..."
            value={searchQuery || ''}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="w-full pl-9 pr-12 py-1.5 bg-surface-container text-xs text-on-surface rounded-lg placeholder-outline border border-surface-container-high focus:outline-none focus:border-primary/50 focus:bg-surface-container-high transition-all"
          />
          <div className="absolute right-2.5 flex items-center pointer-events-none">
            <kbd className="px-1.5 py-0.5 rounded bg-surface-container-highest text-outline font-mono text-[10px]">⌘K</kbd>
          </div>
        </div>
      </div>

      {/* Right Utility Pills */}
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container border border-surface-container-high text-[11px] font-mono text-outline">
          <Shield className="w-3.5 h-3.5 text-tertiary" />
          <span>Robots.txt Enforced</span>
        </div>

        <button
          title="Notifications"
          className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors flex items-center justify-center relative"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-secondary"></span>
        </button>
      </div>
    </header>
  );
};
