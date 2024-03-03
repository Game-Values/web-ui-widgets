PHONY: all build image clean

build:
	bun --env-file=.env.production run build

clean:
	rm -rf .build

image:
	docker compose up -d --build

all: build image clean
