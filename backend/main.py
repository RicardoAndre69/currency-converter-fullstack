from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ConversionRequest(BaseModel):
    base: str
    target: str
    amount: float

def get_exchange_rate(base_currency: str, target_currency: str):
    url = f"https://api.exchangerate-api.com/v4/latest/{base_currency.upper()}"
    response = requests.get(url)
    data = response.json()

    if target_currency.upper() in data["rates"]:
        return data["rates"][target_currency.upper()]
    else:
        return None

@app.get("/")
def root():
    return {"message": "Currency Converter API is running!"}

@app.post("/convert")
def convert(req: ConversionRequest):
    rate = get_exchange_rate(req.base, req.target)
    if rate:
        return {"converted": req.amount * rate}
    else:
        return {"error": "Currency not found or API error"}
