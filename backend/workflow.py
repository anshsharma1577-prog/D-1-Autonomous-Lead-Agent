from typing import TypedDict, List

from langgraph.graph import StateGraph, END


class LeadState(TypedDict):

    icp: dict
    leads: List[dict]


def discovery_node(state):

    print("Running Discovery Agent...")

    return state


def enrichment_node(state):

    print("Running Enrichment Agent...")

    return state


def scoring_node(state):

    print("Running Scoring Agent...")

    return state


def deduplication_node(state):

    print("Running Deduplication Agent...")

    return state


workflow = StateGraph(LeadState)

workflow.add_node(
    "discovery",
    discovery_node
)

workflow.add_node(
    "enrichment",
    enrichment_node
)

workflow.add_node(
    "scoring",
    scoring_node
)

workflow.add_node(
    "deduplication",
    deduplication_node
)


workflow.set_entry_point("discovery")

workflow.add_edge(
    "discovery",
    "enrichment"
)

workflow.add_edge(
    "enrichment",
    "scoring"
)

workflow.add_edge(
    "scoring",
    "deduplication"
)

workflow.add_edge(
    "deduplication",
    END
)


app_workflow = workflow.compile()