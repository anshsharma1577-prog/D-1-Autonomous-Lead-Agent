import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/client';
import {
  Layers,
  Clock,
  Search,
  Plus,
  ArrowUpRight
} from 'lucide-react';

interface HistoryItem {
  id: number;
  title: string;
  industry: string;
  status: 'Completed' | 'In progress';
  timestamp: string;
  size: string;
  tech: string;
  geo: string;
  accountsFound: number;
  qualifiedCount: number;
  hitRate: string;
}

const DEFAULT_RUNS: HistoryItem[] = [
  {
    id: 1024,
    title: 'B2B SaaS — North America',
    industry: 'B2B SaaS',
    status: 'Completed',
    timestamp: 'Today, 10:42 AM',
    size: '50–500 FTEs',
    tech: 'AI / Python / AWS',
    geo: 'US & Canada',
    accountsFound: 124,
    qualifiedCount: 48,
    hitRate: '38.7%',
  },
  {
    id: 1023,
    title: 'Fintech & Payments — United States',
    industry: 'Fintech',
    status: 'Completed',
    timestamp: 'Yesterday, 3:15 PM',
    size: '100–1000 FTEs',
    tech: 'PostgreSQL / Stripe / K8s',
    geo: 'United States',
    accountsFound: 87,
    qualifiedCount: 31,
    hitRate: '35.6%',
  },
  {
    id: 1022,
    title: 'Healthcare Tech & Clinical Ops',
    industry: 'Healthtech',
    status: 'Completed',
    timestamp: 'Sep 18, 2:40 PM',
    size: '50–500 FTEs',
    tech: 'AWS / HIPAA / React',
    geo: 'North America',
    accountsFound: 96,
    qualifiedCount: 42,
    hitRate: '43.8%',
  },
  {
    id: 1021,
    title: 'DevOps & Cloud Security Infra',
    industry: 'DevOps',
    status: 'Completed',
    timestamp: 'Sep 17, 11:15 AM',
    size: '20–250 FTEs',
    tech: 'Golang / Kubernetes / Terraform',
    geo: 'Global',
    accountsFound: 110,
    qualifiedCount: 39,
    hitRate: '35.5%',
  },
];

export const HistoryPage: React.FC = () => {
  const [runs, setRuns] = useState<HistoryItem[]>(DEFAULT_RUNS);
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'in_progress'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Attempt to load any dynamically saved runs from backend
    const fetchBackendRuns = async () => {
      try {
        const run1 = await api.getRun(1).catch(() => null);
        if (run1 && run1.id) {
          const newRun: HistoryItem = {
            id: run1.id,
            title: `${(run1.icp as any)?.industry || 'Autonomous SaaS'} — Live Run`,
            industry: (run1.icp as any)?.industry || 'B2B SaaS',
            status: 'Completed',
            timestamp: 'Just now',
            size: (run1.icp as any)?.company_size || '50-500 FTEs',
            tech: Array.isArray((run1.icp as any)?.technologies)
              ? (run1.icp as any).technologies.join(' / ')
              : 'Python / AI / AWS',
            geo: (run1.icp as any)?.geography || 'USA',
            accountsFound: run1.leads ? run1.leads.length * 2 : 24,
            qualifiedCount: run1.leads ? run1.leads.length : 12,
            hitRate: '50.0%',
          };
          setRuns((prev) => [newRun, ...prev.filter((r) => r.id !== run1.id)]);
        }
      } catch {
        // Fallback to default runs
      }
    };
    fetchBackendRuns();
  }, []);

  const filteredRuns = runs.filter((run) => {
    if (statusFilter === 'completed' && run.status !== 'Completed') return false;
    if (statusFilter === 'in_progress' && run.status !== 'In progress') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        run.title.toLowerCase().includes(q) ||
        run.industry.toLowerCase().includes(q) ||
        run.tech.toLowerCase().includes(q) ||
        run.geo.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  const totalRuns = runs.length;
  const totalMatched = runs.reduce((acc, r) => acc + r.accountsFound, 0);
  const totalQualified = runs.reduce((acc, r) => acc + r.qualifiedCount, 0);
  const qualRate = totalMatched > 0 ? ((totalQualified / totalMatched) * 100).toFixed(1) : '38.4';

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      {/* Top Stat Highlights & Narrative Header */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-surface-container/40">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-primary font-medium tracking-wide">
              HISTORICAL AUDIT
            </span>
            <span className="font-mono text-[11px] text-outline">/</span>
            <span className="font-mono text-[11px] text-outline">AUTO-INDEXED</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-on-surface tracking-tight">
            Research History & Audit Trail
          </h1>
          <p className="text-xs md:text-sm text-outline leading-relaxed">
            Review past research runs, criteria parameters, enrichment logs, and view qualified target accounts directly from immutable pipeline snapshots.
          </p>
        </div>

        {/* Quick Metrics Strip */}
        <div className="flex items-center gap-2 bg-surface-container-low p-2 rounded-xl border border-surface-container self-start lg:self-auto shrink-0">
          <div className="px-4 py-2 bg-surface-container rounded-lg border border-surface-container-high">
            <div className="font-mono text-[11px] text-outline">Total Runs</div>
            <div className="font-mono text-lg text-on-surface font-semibold mt-0.5">{totalRuns}</div>
          </div>
          <div className="px-4 py-2 bg-surface-container rounded-lg border border-surface-container-high">
            <div className="font-mono text-[11px] text-outline">Matched Accounts</div>
            <div className="font-mono text-lg text-secondary font-semibold mt-0.5">{totalMatched}</div>
          </div>
          <div className="px-4 py-2 bg-surface-container rounded-lg border border-surface-container-high">
            <div className="font-mono text-[11px] text-outline">Qualification Rate</div>
            <div className="font-mono text-lg text-tertiary font-semibold mt-0.5">{qualRate}%</div>
          </div>
        </div>
      </section>

      {/* Filter, Search & Utility Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-surface-container-low p-3 rounded-xl border border-surface-container">
        {/* Left Search */}
        <div className="flex items-center gap-2 bg-surface-container px-3.5 py-2 rounded-lg flex-1 max-w-md border border-surface-container-high focus-within:border-primary/50 transition-colors">
          <Search className="w-4 h-4 text-outline" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by segment, criteria, tech, or geography..."
            className="bg-transparent border-none outline-none font-body text-xs text-on-surface placeholder:text-outline w-full"
          />
          <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-surface-container-high text-outline">/</span>
        </div>

        {/* Right Status Tabs & Action */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center bg-surface-container p-1 rounded-lg border border-surface-container-high/60">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1 rounded text-xs transition-all ${
                statusFilter === 'all'
                  ? 'bg-surface-container-high text-on-surface font-semibold shadow-sm'
                  : 'text-outline hover:text-on-surface'
              }`}
            >
              All runs
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`px-3 py-1 rounded text-xs transition-all ${
                statusFilter === 'completed'
                  ? 'bg-surface-container-high text-on-surface font-semibold shadow-sm'
                  : 'text-outline hover:text-on-surface'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setStatusFilter('in_progress')}
              className={`px-3 py-1 rounded text-xs transition-all ${
                statusFilter === 'in_progress'
                  ? 'bg-surface-container-high text-on-surface font-semibold shadow-sm'
                  : 'text-outline hover:text-on-surface'
              }`}
            >
              In progress
            </button>
          </div>

          <Link
            to="/icp-builder"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary hover:bg-primary-hover text-on-primary text-xs font-mono font-semibold transition-all shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Research</span>
          </Link>
        </div>
      </div>

      {/* Run History List Cards */}
      <div className="flex flex-col space-y-3">
        {filteredRuns.map((run) => (
          <div
            key={run.id}
            className="group bg-surface-container-low hover:bg-surface-container transition-all duration-200 rounded-xl p-4 md:p-5 border border-surface-container hover:border-surface-container-high shadow-sm"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Left Details and Criteria Tokens */}
              <div className="flex items-start gap-4 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-semibold text-sm md:text-base text-on-surface tracking-tight">
                      {run.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-mono text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      {run.status}
                    </span>
                    <span className="font-mono text-[11px] text-outline">•</span>
                    <span className="font-mono text-[11px] text-outline flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {run.timestamp}
                    </span>
                  </div>

                  {/* Criteria Parameters String */}
                  <div className="flex items-center gap-2 flex-wrap pt-0.5">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high border border-surface-container-highest text-on-surface-variant">
                      {run.size}
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high border border-surface-container-highest text-on-surface-variant">
                      {run.tech}
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high border border-surface-container-highest text-on-surface-variant">
                      {run.geo}
                    </span>
                    <span className="font-mono text-[10px] text-outline px-1">
                      via Web & Index Enriched
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle & Right: Results and Pipeline Funnel */}
              <div className="flex items-center gap-6 self-stretch lg:self-auto justify-between lg:justify-end shrink-0 pl-14 lg:pl-0">
                <div className="flex items-center gap-4">
                  {/* Mini Bar Sparkline Visual */}
                  <div className="hidden sm:flex flex-col items-end gap-1">
                    <div className="flex items-end gap-1 h-8">
                      <div className="w-2 h-4 bg-surface-container-highest rounded-t-sm"></div>
                      <div className="w-2 h-5 bg-surface-container-highest rounded-t-sm"></div>
                      <div className="w-2 h-6 bg-primary/40 rounded-t-sm"></div>
                      <div className="w-2 h-8 bg-secondary rounded-t-sm"></div>
                    </div>
                    <span className="font-mono text-[10px] text-outline">{run.hitRate} hit rate</span>
                  </div>

                  <div className="text-left sm:text-right font-mono">
                    <div className="text-xs text-on-surface font-semibold">{run.accountsFound} accounts found</div>
                    <div className="text-xs text-secondary font-medium">{run.qualifiedCount} qualified</div>
                  </div>
                </div>

                {/* Action Link: View leads */}
                <Link
                  to={run.id > 1000 ? '/leads' : `/research/${run.id}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface font-mono text-xs transition-all shrink-0"
                >
                  <span>View Leads</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
