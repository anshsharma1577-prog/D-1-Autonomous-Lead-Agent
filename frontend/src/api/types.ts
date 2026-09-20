export interface ICPRequest {
  industry: string;
  company_size: string;
  geography: string;
  technologies: string[];
  signals: string[];
}

export interface Lead {
  id?: number;
  company: string;
  website: string;
  industry: string;
  location: string;
  employees: number;
  revenue?: string;
  technologies?: string[] | string;
  signals?: string[] | string;
  score: number;
  qualification?: string;
  reasons?: string[];
  reasoning?: string;
  hiring_signal?: boolean;
  funding_signal?: boolean;
  source?: string;
  created_at?: string;
  updated_at?: string;
}

export interface RunEvent {
  step: string;
  count?: number;
  status?: string;
}

export interface Run {
  id: number;
  status?: string;
  icp?: ICPRequest | Record<string, any>;
  leads?: Lead[];
  events?: RunEvent[];
  created_at?: string;
}

export interface PipelineResponse {
  message: string;
  run_id?: number;
  total_discovered: number;
  total_unique: number;
  leads: Lead[];
  status?: string;
  icp?: ICPRequest;
  pipeline?: Record<string, boolean>;
}

export interface HealthResponse {
  status: string;
  service: string;
}
