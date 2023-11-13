all:
	pnpm install && pnpm run dev

c:
	rm -rf node_modules .nuxt .output

i: c
	pnpm install && pnpm run build
