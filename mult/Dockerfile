FROM node:16

EXPOSE 3000

WORKDIR /mult

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]
