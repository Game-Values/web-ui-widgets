FROM node:20-bullseye-slim

WORKDIR /frontend

COPY package.json pnpm-lock.yaml ./
COPY .browserslistrc .npmrc .nvmrc ./

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm run build

CMD node .output/server/index.mjs
