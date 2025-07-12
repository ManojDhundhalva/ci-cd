FROM node:22

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY src ./src

RUN npm install

EXPOSE $APP_PORT

CMD ["npm", "run", "start"]