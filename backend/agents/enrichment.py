def enrich_lead(lead):

    lead["technologies"] = [
        "Python",
        "AI",
        "AWS"
    ]

    lead["hiring_signal"] = True
    lead["funding_signal"] = True

    return lead