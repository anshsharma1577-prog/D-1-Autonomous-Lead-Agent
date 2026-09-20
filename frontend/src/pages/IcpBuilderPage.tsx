import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import type { ICPRequest } from '../api/types';
import {
  Rocket,
  Building2,
  Globe2,
  Users2,
  Cpu,
  TrendingUp,
  Sparkles,
  BookmarkPlus,
  RotateCcw
} from 'lucide-react';

export const IcpBuilderPage: React.FC = () => {
  const navigate = useNavigate();

  const [industry, setIndustry] = useState('B2B SaaS');
  const [companySize, setCompanySize] = useState('50-500');
  const [geography, setGeography] = useState('USA');
  const [techInput, setTechInput] = useState('AI, Python, AWS');
  const [signalsInput, setSignalsInput] = useState('Hiring, Funding');
  const [persistDb, setPersistDb] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const technologies = techInput
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  const signals = signalsInput
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const handleLaunchResearch = async () => {
    setIsSubmitting(true);
    setErrorMsg(null);

    const payload: ICPRequest = {
      industry,
      company_size: companySize,
      geography,
      technologies,
      signals,
    };

    try {
      // Execute the run
      const result = persistDb
        ? await api.launchResearch(payload)
        : await api.generateLeads(payload);

      // Navigate to research page with results
      navigate(`/research${result.run_id ? `/${result.run_id}` : ''}`, {
        state: { runResult: result, icp: payload },
      });
    } catch (err: any) {
      console.error('Launch research failed:', err);
      setErrorMsg(err.message || 'Failed to start research run.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const loadTemplate = (name: string) => {
    if (name === 'fintech') {
      setIndustry('Fintech');
      setCompanySize('100-1000');
      setGeography('North America');
      setTechInput('Python, PostgreSQL, Kubernetes, Stripe');
      setSignalsInput('Hiring Compliance, Series B Funding');
    } else if (name === 'healthtech') {
      setIndustry('Healthcare Tech');
      setCompanySize('50-500');
      setGeography('USA');
      setTechInput('AWS, HIPAA Cloud, React, Node.js');
      setSignalsInput('Hiring Clinical Ops, Growth Capital');
    } else {
      setIndustry('B2B SaaS');
      setCompanySize('50-500');
      setGeography('USA');
      setTechInput('AI, Python, AWS');
      setSignalsInput('Hiring, Funding');
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Top Header */}
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-surface-container/40">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-outline font-mono text-[11px] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Deterministic ICP Synthesizer v2.4</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-on-surface tracking-tight">
            Define your Ideal Customer Profile
          </h1>
          <p className="text-xs md:text-sm text-on-surface-variant max-w-2xl">
            Configure multi-dimensional account parameters and buying signals. Our autonomous research engine verifies compliance and qualifies matching accounts.
          </p>
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-2.5 flex-wrap shrink-0">
          <button
            onClick={() => loadTemplate('saas')}
            className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs text-outline hover:text-on-surface font-mono flex items-center gap-1.5 border border-surface-container-high transition-colors"
          >
            <BookmarkPlus className="w-3.5 h-3.5 text-secondary" />
            <span>Default SaaS</span>
          </button>
          <button
            onClick={() => loadTemplate('fintech')}
            className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs text-outline hover:text-on-surface font-mono flex items-center gap-1.5 border border-surface-container-high transition-colors"
          >
            <BookmarkPlus className="w-3.5 h-3.5 text-tertiary" />
            <span>Fintech</span>
          </button>
          <button
            onClick={() => loadTemplate('reset')}
            className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs text-outline hover:text-on-surface font-mono flex items-center gap-1.5 border border-surface-container-high transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </section>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-error/10 border border-error/30 text-error text-xs font-mono">
          {errorMsg}
        </div>
      )}

      {/* Main Two-Column Synthesis Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Input Rules (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Sector & Verticals */}
          <div className="p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-on-surface">Industry Sector & Verticals</h3>
                <p className="text-[11px] text-outline">Target industry segment</p>
              </div>
            </div>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="e.g. SaaS, Fintech, Enterprise Software"
              className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-surface-container-high text-xs text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* Headcount & Size */}
          <div className="p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                <Users2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-on-surface">Company Size & Headcount</h3>
                <p className="text-[11px] text-outline">Target employee band (e.g. 50-500)</p>
              </div>
            </div>
            <input
              type="text"
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
              placeholder="e.g. 50-500, 100-1000"
              className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-surface-container-high text-xs text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* Geography */}
          <div className="p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-on-surface">Target Geography</h3>
                <p className="text-[11px] text-outline">Jurisdiction or operational headquarters</p>
              </div>
            </div>
            <input
              type="text"
              value={geography}
              onChange={(e) => setGeography(e.target.value)}
              placeholder="e.g. USA, North America, EMEA"
              className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-surface-container-high text-xs text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* Technologies */}
          <div className="p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-on-surface">Required Technologies</h3>
                <p className="text-[11px] text-outline">Comma-separated tech stack requirements</p>
              </div>
            </div>
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              placeholder="e.g. AI, Python, AWS, Snowflake"
              className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-surface-container-high text-xs text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {technologies.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-surface-container border border-surface-container-high font-mono text-[11px] text-secondary">
                  💻 {t}
                </span>
              ))}
            </div>
          </div>

          {/* Buying Signals */}
          <div className="p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-on-surface">Buying & Growth Signals</h3>
                <p className="text-[11px] text-outline">Comma-separated growth indicators</p>
              </div>
            </div>
            <input
              type="text"
              value={signalsInput}
              onChange={(e) => setSignalsInput(e.target.value)}
              placeholder="e.g. Hiring, Funding, Tech Modernization"
              className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-surface-container-high text-xs text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {signals.map((s, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-surface-container border border-surface-container-high font-mono text-[11px] text-tertiary">
                  📡 {s}
                </span>
              ))}
            </div>
          </div>

          {/* Database Persistence */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-semibold text-on-surface">Persist Research to Database</div>
              <div className="text-[11px] text-outline">Save leads and audit telemetry in SQLite (POST /run)</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={persistDb}
                onChange={(e) => setPersistDb(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        {/* RIGHT COLUMN: Real-Time Synthesis Preview (5 cols) */}
        <div className="lg:col-span-5 space-y-6 sticky top-24">
          <div className="p-6 rounded-xl bg-surface-container-low border border-surface-container space-y-5 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-surface-container">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="font-display font-semibold text-sm text-on-surface">ICP Synthesis Preview</h3>
              </div>
              <span className="font-mono text-[10px] text-tertiary uppercase">Active Matrix</span>
            </div>

            {/* Heuristic Weight Breakdown */}
            <div className="space-y-2.5 text-xs">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-outline font-mono block">
                Deterministic Scoring Weights
              </span>

              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex justify-between p-2 rounded bg-surface-container border border-surface-container-high">
                  <span className="text-outline">Industry Match:</span>
                  <span className="text-secondary font-semibold">+25 pts</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-surface-container border border-surface-container-high">
                  <span className="text-outline">Geography Match:</span>
                  <span className="text-secondary font-semibold">+20 pts</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-surface-container border border-surface-container-high">
                  <span className="text-outline">Headcount (50-500):</span>
                  <span className="text-secondary font-semibold">+20 pts</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-surface-container border border-surface-container-high">
                  <span className="text-outline">Hiring Telemetry:</span>
                  <span className="text-tertiary font-semibold">+15 pts</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-surface-container border border-surface-container-high">
                  <span className="text-outline">Funding Signal:</span>
                  <span className="text-tertiary font-semibold">+10 pts</span>
                </div>
              </div>
            </div>

            {/* Threshold Spec */}
            <div className="p-3.5 rounded-lg bg-surface-container border border-surface-container-high space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-outline">Highly Qualified:</span>
                <span className="text-tertiary font-bold">≥ 80 / 100</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-outline">Qualified:</span>
                <span className="text-secondary font-bold">≥ 60 / 100</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-outline">Potential:</span>
                <span className="text-amber-400 font-bold">≥ 40 / 100</span>
              </div>
            </div>

            {/* Launch CTA */}
            <button
              onClick={handleLaunchResearch}
              disabled={isSubmitting || !industry}
              className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-on-primary font-display font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(99,102,241,0.35)] transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Executing Pipeline...</span>
                </>
              ) : (
                <>
                  <Rocket className="w-4 h-4" />
                  <span>Launch Autonomous Research</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
