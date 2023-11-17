FROM node:18.12.1-bullseye-slim

RUN npm install -g npm@9.1.3

ADD package.json .
ADD server.js .
ADD utils/dealers.json /utils/dealers.json

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]
