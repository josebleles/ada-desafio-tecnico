FROM node:lts-hydrogen

WORKDIR /app

COPY . .

RUN npm install
RUN npx tsc

RUN find . . -maxdepth 1 ! -name 'swagger.json' ! -name 'dist' ! -name 'node_modules' -exec rm -rf {} \;

ARG PORT=$PORT
ENV PORT=$PORT

EXPOSE ${PORT}

CMD ["node", "dist/server.js"]

