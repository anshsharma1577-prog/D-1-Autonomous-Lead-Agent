import React from 'react';

interface FitScoreBadgeProps {
  score: number;
  showMax?: boolean;
}

export const FitScoreBadge: React.FC<FitScoreBadgeProps> = ({ score, showMax = true }) => {
  let colorStyles = '';
  let dotColor = '';

  if (score >= 80) {
    colorStyles = 'text-tertiary bg-tertiary/10 border-tertiary/30';
    dotColor = 'bg-tertiary shadow-[0_0_8px_rgba(16,185,129,0.5)]';
  } else if (score >= 60) {
    colorStyles = 'text-amber-400 bg-amber-400/10 border-amber-400/30';
    dotColor = 'bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]';
  } else {
    colorStyles = 'text-error bg-error/10 border-error/30';
    dotColor = 'bg-error shadow-[0_0_8px_rgba(239,68,68,0.5)]';
  }

  return (
    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border font-mono text-xs font-semibold ${colorStyles}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span>{score}</span>
      {showMax && <span className="opacity-60 text-[10px]">/ 100</span>}
    </div>
  );
};
