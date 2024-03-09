# https://bun.sh/guides/ecosystem/docker

FROM oven/bun
WORKDIR /frontend
COPY .build .env.production ./
ENTRYPOINT bun --env-file=.env.production .
