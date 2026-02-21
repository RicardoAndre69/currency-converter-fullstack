# Escolhe imagem oficial do Python
FROM python:3.14-slim

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo requirements.txt primeiro (isso ajuda a cachear dependências)
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante dos arquivos do backend para o container
COPY . .

# Torna o script start.sh executável
RUN chmod +x start.sh

# Expõe porta que a API vai rodar
EXPOSE 8000

# Comando para rodar o script de inicialização
CMD ["./start.sh"]