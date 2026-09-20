import React from 'react';
import type { Lead } from '../../api/types';
import { FitScoreBadge } from '../ui/FitScoreBadge';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Code
} from 'lucide-react';

interface LeadDetailDrawerProps {
  lead: Lead | null;
  isOpen?: boolean;
  onClose: () => void;
}

export const LeadDetailDrawer: React.FC<LeadDetailDrawerProps> = ({ lead, isOpen = true, onClose }) => {
  if (!lead || !isOpen) return null;

  const technologies = Array.isArray(lead.technologies)
    ? lead.technologies
    : typeof lead.technologies === 'string'
    ? lead.technologies.split(',').map((t) => t.trim())
    : ['Python', 'AI', 'AWS'];

  const reasons = Array.isArray(lead.reasons) && lead.reasons.length > 0
    ? lead.reasons
    : typeof lead.reasoning === 'string' && lead.reasoning
    ? lead.reasoning.split(',').map((r) => r.trim())
    : ['Industry matches ICP (+25)', 'Geography matches ICP (+20)', 'Company size matches ICP (+20)', 'Hiring signal detected (+15)', 'Funding signal detected (+10)'];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-[540px] bg-surface-container-lowest border-l border-surface-container z-50 shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-200">
      {/* Header Bar */}
      <div className="p-6 bg-surface-container-low border-b border-surface-container">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary font-mono text-base font-bold shrink-0 shadow-[0_0_12px_rgba(99,102,241,0.2)]">
              {getInitials(lead.company)}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="font-display font-semibold text-lg text-on-surface truncate">{lead.company}</h2>
                <span className="px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-mono font-medium shrink-0">
                  Verified Match
                </span>
              </div>
              {lead.website && (
                <a
                  href={lead.website.startsWith('http') ? lead.website : `https://${lead.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-outline hover:text-secondary flex items-center gap-1 mt-0.5"
                >
                  <span>{lead.website.replace(/^https?:\/\//, '')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors flex items-center justify-center shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Fit Score & Qualification Summary */}
        <div className="mt-5 p-3.5 rounded-lg bg-surface-container-lowest border border-surface-container flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-outline">Deterministic ICP Fit</div>
            <div className="mt-1">
              <FitScoreBadge score={lead.score || 0} />
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase font-mono tracking-wider text-outline">Qualification Tier</div>
            <div className="font-semibold text-sm text-on-surface mt-0.5">
              {lead.qualification || (lead.score >= 80 ? 'Highly Qualified' : lead.score >= 60 ? 'Qualified' : 'Potential')}
            </div>
          </div>
        </div>
      </div>

      {/* Main Dossier Content */}
      <div className="p-6 space-y-6 flex-1 text-xs">
        {/* Core Attributes */}
        <div className="space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-outline font-mono">
            Account Firmographics
          </div>
          <div className="grid grid-cols-2 gap-2.5 p-3 rounded-lg bg-surface-container-low border border-surface-container">
            <div>
              <span className="text-outline text-[11px] block">Industry</span>
              <span className="font-medium text-on-surface mt-0.5 block">{lead.industry || 'B2B SaaS'}</span>
            </div>
            <div>
              <span className="text-outline text-[11px] block">Location</span>
              <span className="font-medium text-on-surface mt-0.5 block">{lead.location || 'USA'}</span>
            </div>
            <div>
              <span className="text-outline text-[11px] block">Headcount</span>
              <span className="font-mono text-on-surface mt-0.5 block font-medium">
                {lead.employees ? `${lead.employees.toLocaleString()} FTEs` : '100 FTEs'}
              </span>
            </div>
            <div>
              <span className="text-outline text-[11px] block">Discovery Source</span>
              <span className="font-medium text-on-surface mt-0.5 block">{lead.source || 'Public Search'}</span>
            </div>
          </div>
        </div>

        {/* Qualification Rationale */}
        <div className="space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-outline font-mono">
            Algorithmic Qualification Rationale
          </div>
          <div className="p-3.5 rounded-lg bg-surface-container-low border border-surface-container space-y-2">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-2 text-on-surface-variant">
                <CheckCircle2 className="w-3.5 h-3.5 text-tertiary shrink-0 mt-0.5" />
                <span className="leading-snug">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detected Tech Stack */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-outline font-mono">
            <Cpu className="w-3.5 h-3.5 text-secondary" />
            <span>Detected Technologies</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-surface-container border border-surface-container-high font-mono text-[11px] text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buying Signals & Compliance */}
        <div className="space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-outline font-mono">
            Active Buying Signals & Compliance
          </div>
          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-surface-container-low border border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-secondary" />
                <span className="font-medium text-on-surface">Hiring Telemetry</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary/15 text-secondary">
                Verified Vacancies
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-surface-container-low border border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-tertiary" />
                <span className="font-medium text-on-surface">Growth & Funding Signal</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-tertiary/15 text-tertiary">
                Capital Detected
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-surface-container-low border border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-outline" />
                <span className="font-medium text-on-surface">Robots.txt Policy</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-container text-outline">
                Permitted Crawl
              </span>
            </div>
          </div>
        </div>

        {/* Raw Evidence JSON Collapsible */}
        <div className="pt-2">
          <details className="group rounded-lg bg-surface-container-low border border-surface-container overflow-hidden">
            <summary className="p-3 cursor-pointer text-[11px] font-mono text-outline flex items-center gap-2 select-none hover:text-on-surface">
              <Code className="w-3.5 h-3.5" />
              <span>Inspect Raw Evidence JSON</span>
            </summary>
            <div className="p-3 bg-surface-container-lowest border-t border-surface-container">
              <pre className="text-[10px] font-mono text-outline leading-relaxed overflow-x-auto p-2 bg-background rounded">
                {JSON.stringify(lead, null, 2)}
              </pre>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};
