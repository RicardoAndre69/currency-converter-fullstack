# Escolhe imagem oficial do Python
FROM python:3.14-slim

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do backend para o container
COPY . .

# Instala dependências
RUN pip install --no-cache-dir -r requirements.txt

# Expõe porta que a API vai rodar
EXPOSE 8000

# Comando para rodar a API
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
