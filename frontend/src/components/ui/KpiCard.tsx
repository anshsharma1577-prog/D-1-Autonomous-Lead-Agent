import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  trend?: string;
  icon?: LucideIcon;
  accentColor?: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  label,
  value,
  subtext,
  trend,
  icon: Icon,
}) => {
  return (
    <div className="relative rounded-xl bg-surface-container border border-surface-container-high p-4 shadow-sm hover:bg-surface-container-high/90 transition-all flex flex-col justify-between overflow-hidden group">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-secondary/0 via-secondary/50 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div>
        <div className="flex items-center justify-between text-outline text-[10px] font-semibold uppercase tracking-wider mb-2">
          <span>{label}</span>
          {Icon && <Icon className="w-4 h-4 text-outline group-hover:text-on-surface transition-colors" />}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold text-on-surface tracking-tight leading-none font-mono-nums">
            {value}
          </span>
          {trend && (
            <span className="font-mono text-xs text-tertiary font-medium">
              {trend}
            </span>
          )}
        </div>
        {subtext && (
          <div className="font-mono text-[11px] text-outline mt-1.5 truncate">
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};
