def deduplicate_leads(leads):

    unique = {}

    for lead in leads:

        website = lead.get("website", "").lower().rstrip("/")

        if website and website not in unique:
            unique[website] = lead

    return list(unique.values())