FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm ci --no-audit --no-fund

COPY src ./src

FROM base AS test
COPY test ./test
RUN npm test

FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev --no-audit --no-fund

COPY src ./src

ENV NODE_ENV=production
ENV PORT=3000
ENV NAME=testingA123

EXPOSE 3000

CMD ["npm", "start"]
