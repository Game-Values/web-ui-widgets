FROM node:20-bullseye-slim as builder

WORKDIR /frontend

COPY package.json pnpm-lock.yaml .env.production .browserslistrc .npmrc .nvmrc ./

RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile --ignore-scripts

ADD . .

RUN pnpm run build --dotenv .env.production


FROM node:20-bullseye-slim

WORKDIR /frontend

COPY --from=builder /frontend/.output /frontend

CMD node server/index.ts
