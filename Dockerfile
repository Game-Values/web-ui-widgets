FROM node:20-bullseye-slim

WORKDIR /frontend

ADD build /frontend

CMD node server/index.mjs
