# https://bun.sh/guides/ecosystem/docker

FROM oven/bun as base
WORKDIR /frontend


FROM base AS install
RUN mkdir -p /temp/dev
COPY .browserslistrc .npmrc .nvmrc bun.lockb package.json /temp/dev/
COPY scripts /temp/dev/scripts
RUN cd /temp/dev && \
    export $(xargs < .env.production) && \
    bun install --frozen-lockfile --ignore-scripts


FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
RUN export $(xargs < .env.production) && \
    bun x run-s postinstall build


FROM base AS release
COPY --from=prerelease /frontend/.build .
RUN export $(xargs < .env.production)
ENTRYPOINT bun .
