FROM node:alpine

WORKDIR /tmp/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
COPY ./ ./

EXPOSE 8000

CMD ["npm", "start"]