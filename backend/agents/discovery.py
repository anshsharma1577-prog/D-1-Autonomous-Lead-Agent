import requests

from backend.services.robots_checker import check_robots



def search_public_sources(query, api_key):


    url = "https://google.serper.dev/search"

    headers = {
        "X-API-KEY": api_key,
        "Content-Type": "application/json"
    }

    data = {
        "q": query
    }

    response = requests.post(
        url,
        headers=headers,
        json=data,
        timeout=15
    )

    response.raise_for_status()

    return response.json()


def discover_leads(icp, api_key):

    query = (
        f"{icp['industry']} companies "
        f"{icp['geography']} "
        f"{icp['company_size']} "
        f"{' '.join(icp['signals'])}"
    )

    try:

        search_results = search_public_sources(
            query,
            api_key
        )

        leads = []

        for result in search_results.get("organic", [])[:10]:

            link = result.get("link")

            if not link:
                continue

            robots = check_robots(link)

            if not robots["allowed"]:
                continue

            leads.append({
                "company": result.get("title", "Unknown"),
                "website": link,
                "industry": icp["industry"],
                "location": icp["geography"],
                "employees": 100,
                "source": "Public Search"
            })

        return leads

    except Exception:

        # Fallback demo data
        return [
            {
                "company": "Example AI",
                "website": "https://example.ai",
                "industry": "SaaS",
                "location": "USA",
                "employees": 180,
                "source": "Demo"
            },
            {
                "company": "TechFlow",
                "website": "https://techflow.example",
                "industry": "SaaS",
                "location": "USA",
                "employees": 320,
                "source": "Demo"
            }
        ]
    