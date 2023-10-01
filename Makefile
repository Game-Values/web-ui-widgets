all:
	yarn install && yarn dev
c:
	rm -rf package-lock.json node_modules .nuxt yarn.lock .output
i: c
	yarn install && yarn build
