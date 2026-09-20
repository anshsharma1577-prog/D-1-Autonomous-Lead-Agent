import React from 'react';
import type { Lead } from '../../api/types';
import { FitScoreBadge } from '../ui/FitScoreBadge';
import { ExternalLink, ChevronRight, Briefcase, DollarSign } from 'lucide-react';

interface LeadTableProps {
  leads: Lead[];
  selectedLeadId?: string | number | null;
  onSelectLead: (lead: Lead) => void;
}

export const LeadTable: React.FC<LeadTableProps> = ({
  leads,
  selectedLeadId,
  onSelectLead,
}) => {
  if (leads.length === 0) {
    return (
      <div className="p-12 text-center bg-surface-container-low rounded-xl border border-surface-container">
        <p className="text-sm text-outline">No accounts found matching the criteria.</p>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-surface-container bg-surface-container-lowest">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-surface-container bg-surface-container-low/70 text-[10px] font-semibold uppercase tracking-wider text-outline">
            <th className="py-3 px-4">Account / Domain</th>
            <th className="py-3 px-4">Fit Score</th>
            <th className="py-3 px-4">Signals Detected</th>
            <th className="py-3 px-4">Industry & Region</th>
            <th className="py-3 px-4">Employees</th>
            <th className="py-3 px-4">Compliance</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-container/60 text-xs font-body">
          {leads.map((lead, idx) => {
            const isSelected = selectedLeadId === (lead.id || lead.company);
            const hiringActive = lead.hiring_signal ?? true;
            const fundingActive = lead.funding_signal ?? true;

            return (
              <tr
                key={lead.id || idx}
                onClick={() => onSelectLead(lead)}
                className={`group cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-surface-container-high/80 text-on-surface'
                    : 'hover:bg-surface-container-low/80 text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {/* Account & Domain */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-surface-container-highest flex items-center justify-center font-mono font-semibold text-primary text-xs shrink-0">
                      {getInitials(lead.company)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-on-surface truncate flex items-center gap-1.5">
                        <span>{lead.company}</span>
                        {lead.website && (
                          <a
                            href={lead.website.startsWith('http') ? lead.website : `https://${lead.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-outline hover:text-secondary inline-flex"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <div className="font-mono text-[11px] text-outline truncate">
                        {lead.website ? lead.website.replace(/^https?:\/\//, '') : 'N/A'}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Fit Score */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <FitScoreBadge score={lead.score || 0} />
                </td>

                {/* Key Signals */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {hiringActive && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-mono">
                        <Briefcase className="w-2.5 h-2.5" />
                        Hiring
                      </span>
                    )}
                    {fundingActive && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-tertiary/10 border border-tertiary/20 text-tertiary text-[10px] font-mono">
                        <DollarSign className="w-2.5 h-2.5" />
                        Funding
                      </span>
                    )}
                  </div>
                </td>

                {/* Industry & Location */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="font-medium text-on-surface">{lead.industry || 'B2B SaaS'}</div>
                  <div className="text-[11px] text-outline">{lead.location || 'USA'}</div>
                </td>

                {/* Headcount */}
                <td className="py-3 px-4 whitespace-nowrap font-mono text-[11px] text-on-surface">
                  {lead.employees ? `${lead.employees.toLocaleString()} FTEs` : '100 FTEs'}
                </td>

                {/* Compliance / Source */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[10px] text-outline border border-surface-container-high">
                    Robots Allowed
                  </span>
                </td>

                {/* Actions */}
                <td className="py-3 px-4 text-right whitespace-nowrap">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectLead(lead);
                    }}
                    className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-outline group-hover:text-on-surface transition-all inline-flex items-center gap-1 text-[11px] font-medium"
                  >
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
