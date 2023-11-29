import type { SourceDescription } from "rollup"
import type { Plugin } from "vite"

import { default as MagicString } from "magic-string"

export let injectReflectMetadata: () => Plugin = (): Plugin => (
    {
        enforce: "pre",
        name: "vite-plugin-inject-metadata",
        transform: (code: string, id: string): SourceDescription => {
            let output: string = code

            if (/src\/dto\/.*.ts/.test(id))
                output = `
                    import "reflect-metadata";

                    ${code}
                `

            let magicString: MagicString = new MagicString(output)

            return {
                code: magicString.toString(),
                map: magicString.generateMap(),
            }
        },
    }
)
