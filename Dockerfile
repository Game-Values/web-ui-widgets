# https://bun.sh/guides/ecosystem/docker

FROM oven/bun as base

WORKDIR /frontend


FROM base AS install

RUN mkdir -p /temp/dev

COPY .browserslistrc .npmrc .nvmrc bun.lockb package.json /temp/dev/
COPY scripts /temp/dev/scripts

RUN cd /temp/dev && \
    bun --bun install --frozen-lockfile --ignore-scripts


FROM base AS prerelease

ENV NODE_ENV=production

COPY --from=install /temp/dev/node_modules node_modules
COPY . .

RUN bun --bun x run-s postinstall build


#FROM base AS release

#COPY --from=install /temp/prod/node_modules node_modules
#COPY --from=prerelease /usr/src/app/index.ts .
#COPY --from=prerelease /usr/src/app/package.json .


#FROM node:20-bullseye-slim as builder
#
#WORKDIR /frontend
#
#COPY .browserslistrc .npmrc .nvmrc bun.lockb package.json ./
#
#RUN curl -fsSL https://bun.sh/install | bash

#RUN corepack enable
#RUN corepack prepare pnpm@latest --activate
#RUN pnpm install --frozen-lockfile --ignore-scripts
#
#ADD . .
#
#RUN pnpm run build --dotenv .env.production
#
#
#FROM node:20-bullseye-slim
#
#WORKDIR /frontend
#
#COPY --from=builder /frontend/.output /frontend
#
#CMD node server/index.ts
