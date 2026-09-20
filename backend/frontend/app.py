import streamlit as st
import requests


st.title("🚀 Autonomous Lead Generation Agent")

st.subheader("Ideal Customer Profile")


industry = st.text_input(
    "Industry",
    "SaaS"
)

company_size = st.text_input(
    "Company Size",
    "50-500"
)

geography = st.text_input(
    "Geography",
    "USA"
)

technologies = st.text_input(
    "Technologies",
    "AI, Python"
)

signals = st.text_input(
    "Signals",
    "Hiring, Funding"
)


if st.button("Generate Leads"):

    payload = {

        "industry": industry,

        "company_size": company_size,

        "geography": geography,

        "technologies": [
            x.strip()
            for x in technologies.split(",")
        ],

        "signals": [
            x.strip()
            for x in signals.split(",")
        ]

    }


    response = requests.post(
        "http://127.0.0.1:8000/generate-leads",
        json=payload
    )


    if response.status_code == 200:

        data = response.json()

        st.success(
            "Lead generation completed!"
        )

        st.metric(
            "Leads Discovered",
            data["total_discovered"]
        )

        st.metric(
            "Unique Leads",
            data["total_unique"]
        )


        st.subheader("Qualified Leads")


        for lead in data["leads"]:

            st.write(
                f"### {lead['company']}"
            )

            st.write(
                f"Score: {lead['score']}/100"
            )

            st.write(
                f"Qualification: {lead['qualification']}"
            )

            st.write(
                "Reasons:"
            )

            for reason in lead["reasons"]:

                st.write(
                    f"✓ {reason}"
                )

            st.divider()

    else:

        st.error(
            "Backend error"
        )