from openai import OpenAI
import os


client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


def generate_reasoning(lead, icp):

    prompt = f"""
You are a B2B lead qualification assistant.

Ideal Customer Profile:
{icp}

Lead:
{lead}

Explain briefly why this lead matches or does not match
the customer's ideal profile.

Return a concise explanation.
"""

    response = client.responses.create(
        model="gpt-5-mini",
        input=prompt
    )

    return response.output_text