import React, { useState } from 'react';
import type { Lead } from '../../api/types';
import { X, Download, FileSpreadsheet, FileCode, Check } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  leads: Lead[];
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, leads }) => {
  const [exportFormat, setExportFormat] = useState<'csv' | 'json'>('csv');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    const filename = `apex_intel_leads_${new Date().toISOString().slice(0, 10)}`;

    if (exportFormat === 'csv') {
      const headers = [
        'Company',
        'Website',
        'Industry',
        'Location',
        'Employees',
        'Fit Score',
        'Qualification',
        'Hiring Signal',
        'Funding Signal',
        'Reasons',
        'Source',
      ];

      const rows = leads.map((l) => [
        `"${(l.company || '').replace(/"/g, '""')}"`,
        `"${(l.website || '').replace(/"/g, '""')}"`,
        `"${(l.industry || '').replace(/"/g, '""')}"`,
        `"${(l.location || '').replace(/"/g, '""')}"`,
        l.employees || 100,
        l.score || 0,
        `"${(l.qualification || '').replace(/"/g, '""')}"`,
        l.hiring_signal ?? true ? 'Yes' : 'No',
        l.funding_signal ?? true ? 'Yes' : 'No',
        `"${(Array.isArray(l.reasons) ? l.reasons.join('; ') : l.reasoning || '').replace(/"/g, '""')}"`,
        `"${(l.source || 'Public Search').replace(/"/g, '""')}"`,
      ]);

      const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}.csv`;
      link.click();
      URL.revokeObjectURL(url);
    } else {
      const jsonContent = JSON.stringify(leads, null, 2);
      const blob = new Blob([jsonContent], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}.json`;
      link.click();
      URL.revokeObjectURL(url);
    }

    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl bg-surface-container-low border border-surface-container shadow-2xl p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <h3 className="font-display font-semibold text-base text-on-surface">Export Target Accounts</h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-surface-container hover:bg-surface-container-high text-outline hover:text-on-surface flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-outline leading-relaxed">
          Download qualified accounts with enriched technology tags, hiring signals, and ICP match scores.
        </p>

        {/* Format Selection */}
        <div className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-outline font-mono">File Format</span>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setExportFormat('csv')}
              className={`p-3 rounded-lg border text-left flex items-center gap-3 transition-all ${
                exportFormat === 'csv'
                  ? 'bg-surface-container-high border-primary text-on-surface'
                  : 'bg-surface-container border-surface-container text-outline hover:text-on-surface'
              }`}
            >
              <FileSpreadsheet className="w-5 h-5 text-tertiary" />
              <div>
                <div className="font-semibold text-xs text-on-surface">CSV Spreadsheet</div>
                <div className="text-[10px] text-outline">CRM & Excel compatible</div>
              </div>
            </button>

            <button
              onClick={() => setExportFormat('json')}
              className={`p-3 rounded-lg border text-left flex items-center gap-3 transition-all ${
                exportFormat === 'json'
                  ? 'bg-surface-container-high border-primary text-on-surface'
                  : 'bg-surface-container border-surface-container text-outline hover:text-on-surface'
              }`}
            >
              <FileCode className="w-5 h-5 text-secondary" />
              <div>
                <div className="font-semibold text-xs text-on-surface">JSON Payload</div>
                <div className="text-[10px] text-outline">Raw pipeline telemetry</div>
              </div>
            </button>
          </div>
        </div>

        {/* Summary Details */}
        <div className="p-3 rounded-lg bg-surface-container border border-surface-container text-xs flex items-center justify-between font-mono">
          <span className="text-outline">Accounts in Export:</span>
          <span className="font-semibold text-on-surface">{leads.length} Records</span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleDownload}
          disabled={leads.length === 0}
          className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
        >
          {downloaded ? (
            <>
              <Check className="w-4 h-4 text-tertiary" />
              <span>Export Downloaded!</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Download {exportFormat.toUpperCase()} ({leads.length})</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
