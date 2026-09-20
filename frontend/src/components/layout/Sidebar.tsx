import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  SlidersHorizontal,
  Compass,
  Users,
  History,
  ShieldCheck,
  Server,
  Zap
} from 'lucide-react';
import { api } from '../../api/client';

export const Sidebar: React.FC = () => {
  const [backendOnline, setBackendOnline] = useState<boolean | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await api.getHealth();
        setBackendOnline(res.status === 'healthy');
      } catch {
        setBackendOnline(false);
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/icp-builder', label: 'ICP Builder', icon: SlidersHorizontal },
    { to: '/research', label: 'Active Research', icon: Compass },
    { to: '/leads', label: 'Lead Explorer', icon: Users },
    { to: '/history', label: 'Research History', icon: History },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-surface-container-lowest border-r border-surface-container-high/60 flex flex-col z-50 select-none">
      {/* Brand Header */}
      <div className="h-16 px-5 flex items-center justify-between border-b border-surface-container/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-[0_0_12px_rgba(99,102,241,0.25)]">
            <Zap className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-base tracking-tight text-on-surface">Apex Intel</span>
            <span className="font-mono text-[10px] text-outline tracking-wider uppercase">B2B Intelligence</span>
          </div>
        </div>
        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-medium">v2.4</span>
      </div>

      {/* Workspace Context Selector */}
      <div className="p-3">
        <div className="px-3 py-2.5 rounded-lg bg-surface-container-low border border-surface-container flex items-center justify-between">
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-medium text-on-surface truncate">Enterprise GTM</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              <span className="font-mono text-[10px] text-outline truncate">North America SaaS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="px-3 pt-2 pb-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-outline px-2">Pipeline Navigation</span>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-surface-container-high text-on-surface shadow-sm border border-surface-container-highest/50 font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`
              }
            >
              <Icon className="w-4 h-4 text-outline" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Telemetry & Compliance Box */}
      <div className="p-3 border-t border-surface-container/60 space-y-2">
        <div className="p-2.5 rounded-lg bg-surface-container-low border border-surface-container flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-outline" />
              <span className="text-[11px] font-medium text-on-surface">Backend Engine</span>
            </div>
            {backendOnline === true ? (
              <span className="flex items-center gap-1 font-mono text-[10px] text-tertiary">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                Port 8000
              </span>
            ) : (
              <span className="flex items-center gap-1 font-mono text-[10px] text-error">
                <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                Offline
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-outline font-mono">
            <ShieldCheck className="w-3 h-3 text-secondary" />
            <span>Robots.txt verified compliance</span>
          </div>
        </div>

        {/* User Identity */}
        <div className="px-2 py-1.5 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-surface-container-high border border-surface-container-highest flex items-center justify-center font-mono text-xs font-semibold text-primary">
            AS
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-medium text-on-surface truncate">Ansh Sharma</span>
            <span className="text-[10px] text-outline truncate">GTM Operations</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
