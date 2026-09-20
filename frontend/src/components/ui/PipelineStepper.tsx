import React from 'react';
import { Search, Binary, CheckCircle2, Sliders, ShieldCheck } from 'lucide-react';

export interface PipelineStage {
  id: string;
  name: string;
  description: string;
  status: 'completed' | 'running' | 'queued';
  count?: number;
}

interface PipelineStepperProps {
  stages?: PipelineStage[];
  currentStepIndex?: number;
}

const DEFAULT_STAGES: PipelineStage[] = [
  {
    id: 'discovery',
    name: '1. Discovery & Indexing',
    description: 'Public search query & robots.txt verification',
    status: 'completed',
  },
  {
    id: 'enrichment',
    name: '2. Account Enrichment',
    description: 'Tech stack & buying signal detection',
    status: 'completed',
  },
  {
    id: 'qualification',
    name: '3. Deterministic Match',
    description: 'Rule evaluation against ICP criteria',
    status: 'completed',
  },
  {
    id: 'scoring',
    name: '4. Heuristic Scoring',
    description: 'Weighted fit scoring (0–100)',
    status: 'completed',
  },
  {
    id: 'deduplication',
    name: '5. Entity Deduplication',
    description: 'Domain normalization & deduplication',
    status: 'completed',
  },
];

const ICONS = [Search, Binary, CheckCircle2, Sliders, ShieldCheck];

export const PipelineStepper: React.FC<PipelineStepperProps> = ({
  stages = DEFAULT_STAGES,
}) => {
  return (
    <div className="w-full bg-surface-container-low border border-surface-container rounded-xl p-4">
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-outline font-mono">
          Multi-Stage Pipeline Execution
        </span>
        <span className="text-[11px] font-mono text-tertiary flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
          Deterministic Verified
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {stages.map((stage, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          const isCompleted = stage.status === 'completed';
          const isRunning = stage.status === 'running';

          return (
            <div
              key={stage.id || idx}
              className={`p-3 rounded-lg border transition-all flex flex-col justify-between ${
                isCompleted
                  ? 'bg-surface-container border-tertiary/30'
                  : isRunning
                  ? 'bg-surface-container-high border-secondary shadow-[0_0_12px_rgba(76,215,246,0.15)]'
                  : 'bg-surface-container-lowest/60 border-surface-container text-outline'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center ${
                    isCompleted
                      ? 'bg-tertiary/15 text-tertiary'
                      : isRunning
                      ? 'bg-secondary/15 text-secondary animate-pulse'
                      : 'bg-surface-container text-outline'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                {stage.count !== undefined && (
                  <span className="font-mono text-xs font-semibold text-on-surface">
                    {stage.count} {stage.count === 1 ? 'item' : 'items'}
                  </span>
                )}
              </div>
              <div>
                <div className="text-xs font-semibold text-on-surface truncate">{stage.name}</div>
                <div className="text-[10px] text-outline mt-0.5 leading-tight line-clamp-2">{stage.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
