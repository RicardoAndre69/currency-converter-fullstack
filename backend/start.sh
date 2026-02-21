#!/bin/bash

PORT=${PORT:-8080}

# Iniciar o Uvicorn
uvicorn main:app --host 0.0.0.0 --port $PORT --reload