FROM node:lts-hydrogen

WORKDIR /app

COPY . .

RUN npm install
RUN npx tsc

CMD ["node", "dist/server.js"]

