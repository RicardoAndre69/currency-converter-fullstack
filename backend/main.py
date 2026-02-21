import os
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests


app = FastAPI()

origins = [
    "https://currency-converter-fullstack-nya1tyu8c-ricardoandre69s-projects.vercel.app",  # Adicione seu domínio exato
    "https://*.vercel.app", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
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
    try:
        response = requests.get(url)
        response.raise_for_status()  
        data = response.json()
        if target_currency.upper() in data["rates"]:
            return data["rates"][target_currency.upper()]
        else:
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error fetching exchange rates: {e}")
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
