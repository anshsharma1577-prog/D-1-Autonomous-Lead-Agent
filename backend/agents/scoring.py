def score_lead(lead, icp):

    score = 0
    reasons = []

    if lead["industry"].lower() == icp["industry"].lower():
        score += 25
        reasons.append("Industry matches ICP")

    if lead["location"].lower() == icp["geography"].lower():
        score += 20
        reasons.append("Geography matches ICP")

    employees = lead.get("employees", 0)

    if 50 <= employees <= 500:
        score += 20
        reasons.append("Company size matches ICP")

    if lead.get("hiring_signal"):
        score += 15
        reasons.append("Hiring signal detected")

    if lead.get("funding_signal"):
        score += 10
        reasons.append("Funding signal detected")

    if score >= 80:
        qualification = "Highly Qualified"
    elif score >= 60:
        qualification = "Qualified"
    elif score >= 40:
        qualification = "Potential"
    else:
        qualification = "Low Match"

    return {
        **lead,
        "score": score,
        "qualification": qualification,
        "reasons": reasons
    }