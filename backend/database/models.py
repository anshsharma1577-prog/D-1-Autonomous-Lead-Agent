from sqlalchemy import Column, Integer, String, Float, Text
from backend.database.database import Base


class Lead(Base):

    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)

    company = Column(String, index=True)
    website = Column(String)
    industry = Column(String)
    location = Column(String)

    employees = Column(Integer)
    revenue = Column(String)

    technologies = Column(Text)
    signals = Column(Text)

    score = Column(Float)

    reasoning = Column(Text)

    source = Column(String)

    created_at = Column(String)
    updated_at = Column(String)