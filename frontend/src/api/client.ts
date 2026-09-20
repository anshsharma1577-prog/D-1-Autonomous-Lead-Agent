import type { ICPRequest, Lead, Run, RunEvent, PipelineResponse, HealthResponse } from './types';

const API_BASE = (import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000').replace(/\/+$/, '');

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  const response = await fetch(url, { ...options, headers });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error [${response.status} ${response.statusText}]: ${errorText}`);
  }
  return response.json();
}

export const api = {
  getHealth: (): Promise<HealthResponse> => request<HealthResponse>('/health'),

  submitIcp: (icp: ICPRequest): Promise<{ message: string; icp: ICPRequest }> =>
    request('/icp', {
      method: 'POST',
      body: JSON.stringify(icp),
    }),

  discoverLeads: (icp: ICPRequest): Promise<{ message: string; total_leads: number; leads: Lead[] }> =>
    request('/discover', {
      method: 'POST',
      body: JSON.stringify(icp),
    }),

  launchResearch: (icp: ICPRequest): Promise<PipelineResponse> =>
    request<PipelineResponse>('/run', {
      method: 'POST',
      body: JSON.stringify(icp),
    }),

  generateLeads: (icp: ICPRequest): Promise<PipelineResponse> =>
    request<PipelineResponse>('/generate-leads', {
      method: 'POST',
      body: JSON.stringify(icp),
    }),

  getLeads: (): Promise<{ total: number; leads: Lead[] }> =>
    request<{ total: number; leads: Lead[] }>('/leads'),

  getRun: (id: number): Promise<Run> =>
    request<Run>(`/run/${id}`),

  getRunEvents: (id: number): Promise<{ id: number; events: RunEvent[] }> =>
    request<{ id: number; events: RunEvent[] }>(`/runs/${id}/events`),
};
