PHONY: all build image

build:
	pnpm run build --dotenv .env.production

image:
	mv .output build && docker-compose up -d --build && rm -rf build

all: build image
