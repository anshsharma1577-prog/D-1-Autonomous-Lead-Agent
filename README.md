🚀 Apex Intel — Autonomous Lead Generation & Qualification Agent

An evidence-first, multi-agent B2B sales intelligence platform that autonomously discovers, enriches, qualifies, scores, and organizes high-potential business leads.

Apex Intel is built for the Agentic AI Saksham National Level Hackathon — Problem Statement D-1: Autonomous Lead Generation & Qualification Agent.

The platform transforms a user-defined Ideal Customer Profile (ICP) into a structured, explainable list of qualified business leads.

🎯 Problem Statement

Traditional B2B lead generation requires sales teams to manually:

Define target companies
Search for potential accounts
Collect company information
Verify technologies and business signals
Remove duplicate organizations
Determine whether an account fits the ICP
Prioritize leads
Maintain research records

This process is time-consuming, inconsistent, and difficult to scale.

💡 Our Solution

Apex Intel automates this research workflow through a coordinated agentic pipeline:

ICP Definition
      ↓
ICP Validation
      ↓
Research Run
      ↓
Company Discovery
      ↓
Data Enrichment
      ↓
Entity Resolution
      ↓
Qualification
      ↓
Deterministic Scoring
      ↓
Evidence & Confidence
      ↓
Lead Workspace
      ↓
Export / Refresh
🧠 Core Features
🎯 1. ICP Builder

Define an Ideal Customer Profile using:

Industry
Company Size
Geography
Technologies
Business Signals

Example:

{
  "industry": "B2B SaaS",
  "company_size": "50-500",
  "geography": "USA",
  "technologies": ["AI", "Python"],
  "signals": ["Hiring", "Funding"]
}
🤖 2. Multi-Agent Research Pipeline

Apex Intel uses specialized agents for different stages of the workflow:

ICP Intake Agent — Converts user requirements into structured ICP rules.
Orchestrator Agent — Coordinates the complete research workflow.
Discovery Agent — Finds candidate organizations.
Enrichment Agent — Collects company information and evidence.
Entity Resolution Agent — Detects and resolves duplicate organizations.
Qualification Agent — Evaluates candidates against ICP requirements.
Deterministic Scoring Engine — Calculates reproducible Fit Scores.
Export / Refresh — Makes qualified research data available for downstream workflows.
📊 3. Explainable Lead Scoring

Apex Intel separates:

Fit Score (0–100)
How closely a company matches the defined ICP.

Evidence Confidence (0–100)
How reliable and complete the evidence supporting the qualification is.

This helps distinguish between:

"This company appears to be a good fit."

and

"We have strong evidence supporting this qualification."

🔎 4. Evidence-First Research

Lead decisions can be supported by:

Source URLs
Company information
Technology signals
Hiring signals
Funding signals
Qualification reasoning
Confidence
Research timestamps
🛡️ 5. Compliance-Aware Research

The system is designed around responsible web research:

robots.txt consideration
Source tracking
Rate limiting
Evidence provenance
No automated cold outreach
No automated LinkedIn messaging

Apex Intel focuses on research and intelligence, not unsolicited communication.


🖥️ Product Interface

Apex Intel uses a research-oriented workspace rather than a traditional chatbot interface.

Main Views
Dashboard
ICP Builder
Research Run
Leads Workspace
Lead Details
Run History
Export

The interface provides:

Pipeline stages
Lead tables
Fit Score badges
Confidence indicators
Evidence drawers
Run timelines
Research status
Lead details
🧩 Technology Stack
Frontend
React
TypeScript
Vite
Tailwind CSS
React Router
Backend
Python
FastAPI
SQLAlchemy
SQLite
AI / Agent Layer
LLM-assisted interpretation and extraction
Multi-agent workflow
Deterministic qualification and scoring
Evidence-based reasoning
Deployment
Frontend: Vercel
Backend: Render
Database: SQLite
Source Control: GitHub
📁 Project Structure
D-1-Autonomous-Lead-Agent/
│
├── frontend/
├── backend/
├── database/
├── docs/
├── .gitignore
├── README.md
└── ...
🔌 API Endpoints
Method	Endpoint	Purpose
GET	/	API information
GET	/health	Backend health check
POST	/icp	Create / validate ICP
POST	/discover	Discover candidate companies
POST	/generate-leads	Generate qualified leads
POST	/run	Start a research run
GET	/leads	Retrieve leads
GET	/run/{id}	Retrieve run information
GET	/runs/{id}/events	Retrieve research events
🌐 Live Demo
Frontend

https://d-1-autonomous-lead-agent.vercel.app

Backend API

https://apex-intel-api.onrender.com

API Documentation

https://apex-intel-api.onrender.com/docs

⚙️ Local Development
Clone the repository
git clone https://github.com/anshsharma1577-prog/D-1-Autonomous-Lead-Agent.git
cd D-1-Autonomous-Lead-Agent
Backend
python -m venv .venv

Windows:

.venv\Scripts\activate

Install dependencies:

pip install -r backend/requirements.txt

Run:

uvicorn backend.main:app --reload

Backend:

http://127.0.0.1:8000

Swagger:

http://127.0.0.1:8000/docs
Frontend
cd frontend
npm install
npm run dev

Frontend:

http://localhost:5173

For local development, configure:

VITE_API_BASE_URL=http://127.0.0.1:8000
🧪 Demo Workflow
1. Define ICP
        ↓
2. Launch Research
        ↓
3. Discover Companies
        ↓
4. Enrich Data
        ↓
5. Resolve Duplicates
        ↓
6. Qualify Leads
        ↓
7. Calculate Fit Score
        ↓
8. Review Evidence
        ↓
9. Export Leads
🎯 Design Principles
Evidence over assumptions

Important lead decisions should be supported by evidence.

Deterministic scoring

Scoring and arithmetic remain reproducible.

Agent specialization

Each agent has a clearly defined responsibility.

Human-in-the-loop

Users remain responsible for reviewing generated intelligence.

Compliance-aware research

The platform avoids automated unsolicited outreach.

Explainability

Users can understand why a lead received its score.

🚫 What Apex Intel Does NOT Do

Apex Intel is a lead intelligence and qualification platform, not an automated spam system.

It does not:

Automatically send cold emails
Automatically send LinkedIn messages
Automatically contact prospects
Replace human sales decisions
Hide qualification reasoning behind an unexplained score
📚 Documentation

Detailed project documentation is available in the docs directory.

It contains project materials such as:

Project Blueprint
Research Dossier
Technical Documentation
Architecture Documentation
User / Demo Guide
Hackathon Documentation
🏆 Hackathon

Competition: Agentic AI Saksham National Level Hackathon

Track: D — Sales & Business Intelligence

Problem Statement: D-1 — Autonomous Lead Generation & Qualification Agent

Project: Apex Intel

🔮 Future Scope
Additional discovery data sources
Advanced company intelligence
Improved entity resolution
CRM integrations
Historical signal tracking
Advanced lead prioritization
Human approval workflows
Enhanced evidence verification
Enterprise-scale data pipelines
⭐ Apex Intel

Define → Discover → Enrich → Resolve → Qualify → Score → Review → Export

Turn an ICP into evidence-backed business intelligence.
