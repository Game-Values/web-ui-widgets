# https://bun.sh/guides/ecosystem/docker

FROM oven/bun as base

WORKDIR /frontend


FROM base AS install

RUN mkdir -p /temp/dev

COPY .browserslistrc .npmrc .nvmrc bun.lockb package.json /temp/dev/
COPY scripts /temp/dev/scripts

RUN cd /temp/dev && \
    bun --env-file=.env.production install --frozen-lockfile --ignore-scripts


#FROM base AS prerelease
#
#COPY --from=install /temp/dev/node_modules node_modules
#COPY . .
#
#RUN bun run postinstall
#
#USER bun
#
#EXPOSE 3000/tcp
#
#ENTRYPOINT bun run dev
