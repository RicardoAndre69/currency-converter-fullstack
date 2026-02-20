# Imagem oficial do Node
FROM node:22-alpine

# Diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código do frontend
COPY . .

# Expõe porta do frontend (Vite padrão)
EXPOSE 5173

# Comando para rodar Vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
