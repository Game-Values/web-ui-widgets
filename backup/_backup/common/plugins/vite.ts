import type { SourceDescription } from "rollup"
import type { Plugin } from "vite"

import { default as MagicString } from "magic-string"

export let injectReflectMetadata: () => Plugin = (): Plugin => (
    {
        enforce: "pre",
        name: "vite-plugin-inject-metadata",
        transform: (code: string, id: string): SourceDescription => {
            let magicString: MagicString = new MagicString(code)

            if (/src\/dto\/.*.ts$/.test(id))
                magicString.prepend("import \"reflect-metadata\";")

            return {
                code: magicString.toString(),
                map: magicString.generateMap(),
            }
        },
    }
)
