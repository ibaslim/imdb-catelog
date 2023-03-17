FROM node:latest as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build