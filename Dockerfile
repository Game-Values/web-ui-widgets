# https://bun.sh/guides/ecosystem/docker

FROM oven/bun
WORKDIR /frontend
COPY .build .
RUN export $(xargs < .env.production)
ENTRYPOINT bun .
