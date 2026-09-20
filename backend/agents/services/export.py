import pandas as pd


def export_to_csv(leads):

    df = pd.DataFrame(leads)

    file_path = "leads.csv"

    df.to_csv(
        file_path,
        index=False
    )

    return file_path