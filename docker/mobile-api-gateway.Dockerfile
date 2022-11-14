# https://github.com/mguay22/nestjs-rabbitmq-microservices/blob/2f30bd6d365bd199b4fa09512cf97977830bbc41/apps/orders/Dockerfile

FROM node:alpine As development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /app/dist ./dist

CMD ["node", "dist/apps/web-api-gateway/main"]