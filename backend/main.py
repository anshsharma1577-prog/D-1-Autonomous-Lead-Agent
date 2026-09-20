from fastapi import Depends, FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import os

from dotenv import load_dotenv
from requests import Session

from backend.agents.discovery import discover_leads
from backend.agents.enrichment import enrich_lead
from backend.agents.scoring import score_lead
from backend.agents.deduplication import deduplicate_leads
from backend.database.database import engine, Base, get_db
from backend.database import models
from backend.database.database import engine, Base
from backend.database import models




# ============================================================
# LOAD ENVIRONMENT VARIABLES
# ============================================================

load_dotenv()

SERPER_API_KEY = os.getenv("SERPER_API_KEY")


# ============================================================
# CREATE FASTAPI APPLICATION
# ============================================================

app = FastAPI(
    title="Autonomous Lead Generation & Qualification Agent",
    description="AI-powered lead discovery, enrichment and qualification system",
    version="1.0.0"
)
Base.metadata.create_all(bind=engine)


# ============================================================
# ICP DATA MODEL
# ============================================================

class ICPRequest(BaseModel):

    industry: str

    company_size: str

    geography: str

    technologies: List[str] = []

    signals: List[str] = []


# ============================================================
# HOME ROUTE
# ============================================================

@app.get("/")
def home():

    return {
        "message": "Autonomous Lead Generation Agent is running",
        "status": "success"
    }
@app.get("/leads")
def get_leads(db: Session = Depends(get_db)):

    leads = db.query(models.Lead).all()

    return {
        "total": len(leads),
        "leads": [
            {
                "id": lead.id,
                "company": lead.company,
                "website": lead.website,
                "industry": lead.industry,
                "location": lead.location,
                "employees": lead.employees,
                "score": lead.score,
                "reasoning": lead.reasoning
            }
            for lead in leads
        ]
    }

@app.post("/run")
def run_pipeline(icp: ICPRequest, db: Session = Depends(get_db)):

    icp_data = icp.model_dump()

    leads = discover_leads(
        icp_data,
        SERPER_API_KEY
    )

    enriched_leads = [
        enrich_lead(lead)
        for lead in leads
    ]

    scored_leads = [
        score_lead(lead, icp_data)
        for lead in enriched_leads
    ]

    unique_leads = deduplicate_leads(scored_leads)

    for lead in unique_leads:

        db_lead = models.Lead(
            company=lead.get("company"),
            website=lead.get("website"),
            industry=lead.get("industry"),
            location=lead.get("location"),
            employees=lead.get("employees"),
            score=lead.get("score"),
            reasoning=", ".join(lead.get("reasons", [])),
            source=lead.get("source")
        )

        db.add(db_lead)

    db.commit()

    return {
        "message": "Lead generation pipeline completed successfully",
        "total_discovered": len(leads),
        "total_unique": len(unique_leads),
        "leads": unique_leads
    }
@app.get("/run/{id}")
def get_run(id: int, db: Session = Depends(get_db)):

    run = db.query(models.Run).filter(models.Run.id == id).first()

    if not run:
        raise HTTPException(status_code=404, detail="Run not found")

    return {
        "id": run.id,
        "icp": run.icp,
        "leads": run.leads
    }
@app.get("/runs/{id}/events")
def get_run_events(id: int, db: Session = Depends(get_db)):

    run = db.query(models.Run).filter(models.Run.id == id).first()

    if not run:
        raise HTTPException(status_code=404, detail="Run not found")

    return {
        "id": run.id,
        "events": run.events
    }

# ============================================================
# HEALTH CHECK
# ============================================================

@app.get("/health")
def health():

    return {
        "status": "healthy",
        "service": "lead-generation-agent"
    }


# ============================================================
# ICP TEST ROUTE
# ============================================================

@app.post("/icp")
def create_icp(icp: ICPRequest):

    return {
        "message": "ICP received successfully",
        "icp": icp.model_dump()
    }


# ============================================================
# DISCOVERY TEST ROUTE
# ============================================================

@app.post("/discover")
def discover(icp: ICPRequest):

    icp_data = icp.model_dump()

    leads = discover_leads(
        icp_data,
        SERPER_API_KEY
    )

    return {
        "message": "Discovery completed",
        "total_leads": len(leads),
        "leads": leads
    }


# ============================================================
# COMPLETE LEAD GENERATION PIPELINE
# ============================================================

@app.post("/generate-leads")
def generate_leads(icp: ICPRequest):

    # --------------------------------------------------------
    # Convert ICP to dictionary
    # --------------------------------------------------------

    icp_data = icp.model_dump()



    # --------------------------------------------------------
    # STEP 1: DISCOVERY
    # --------------------------------------------------------

    print("====================================")
    print("STEP 1: DISCOVERY")
    print("====================================")

    leads = discover_leads(
        icp_data,
        SERPER_API_KEY
    )

    discovered_count = len(leads)

    print(
        f"Discovered {discovered_count} leads"
    )


    # --------------------------------------------------------
    # STEP 2: ENRICHMENT
    # --------------------------------------------------------

    print("====================================")
    print("STEP 2: ENRICHMENT")
    print("====================================")

    enriched_leads = []

    for lead in leads:

        try:

            enriched = enrich_lead(
                lead
            )

            enriched_leads.append(
                enriched
            )

        except Exception as e:

            print(
                f"Enrichment error: {e}"
            )

            # Keep original lead if enrichment fails
            enriched_leads.append(
                lead
            )


    # --------------------------------------------------------
    # STEP 3: SCORING
    # --------------------------------------------------------

    print("====================================")
    print("STEP 3: SCORING")
    print("====================================")

    scored_leads = []

    for lead in enriched_leads:

        try:

            scored = score_lead(
                lead,
                icp_data
            )

            scored_leads.append(
                scored
            )

        except Exception as e:

            print(
                f"Scoring error: {e}"
            )

            # Keep lead if scoring fails
            scored_leads.append(
                lead
            )



    # --------------------------------------------------------
    # STEP 4: DEDUPLICATION
    # --------------------------------------------------------

    print("====================================")
    print("STEP 4: DEDUPLICATION")
    print("====================================")

    unique_leads = deduplicate_leads(
        scored_leads
    )

    unique_count = len(unique_leads)

    print(
        f"Unique leads: {unique_count}"
    )


    # --------------------------------------------------------
    # SORT BY SCORE
    # --------------------------------------------------------

    unique_leads.sort(
        key=lambda lead: lead.get(
            "score",
            0
        ),
        reverse=True
    )


    # --------------------------------------------------------
    # FINAL RESPONSE
    # --------------------------------------------------------

    print("====================================")
    print("PIPELINE COMPLETED")
    print("====================================")

    return {

        "message": "Lead generation completed successfully",

        "status": "success",

        "icp": icp_data,

        "pipeline": {
            "discovery": True,
            "enrichment": True,
            "scoring": True,
            "deduplication": True
        },

        "total_discovered": discovered_count,

        "total_unique": unique_count,

        "leads": unique_leads

    }

