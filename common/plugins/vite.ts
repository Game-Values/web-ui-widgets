import type { Plugin } from "vite"

export let injectReflectMetadata: () => Plugin = (): Plugin => (
    {
        enforce: "pre",
        name: "vite-plugin-inject-metadata",
        transform: (code: string, id: string): string => {
            if (/src\/dto\/.*.ts/.test(id))
                return `
                    import "reflect-metadata";

                    ${code}
                `

            return code
        },
    }
)
