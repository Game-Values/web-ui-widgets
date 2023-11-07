all:
	pnpm install --ignore-scripts && pnpm run dev

c:
	rm -rf node_modules .nuxt .output

i: c
	pnpm install --ignore-scripts && pnpm run build
