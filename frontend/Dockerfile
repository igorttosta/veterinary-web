# Usa a imagem oficial do Node.js como base
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /frontend

# Copia apenas os arquivos essenciais para instalar dependências (para otimizar cache)
COPY package.json package-lock.json* ./

# Instala as dependências
RUN npm install --frozen-lockfile

# Copia o restante do código para dentro do container
COPY . .

# Compila o projeto Next.js
RUN npm run build

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
