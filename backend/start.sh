#!/bin/bash

# Usar o valor de PORT, ou usar 8000 como padrão se não estiver definido
PORT=${PORT:-8000}

# Iniciar o Uvicorn
uvicorn main:app --host 0.0.0.0 --port $PORT --reload