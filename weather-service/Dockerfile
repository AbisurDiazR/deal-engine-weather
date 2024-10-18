FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Construir el proyecto
RUN npm run build

CMD ["node", "dist/server.js"]
