import { rm, readdir, writeFile } from "node:fs/promises"
import { basename, join } from "node:path"
import { cwd, env } from "node:process"

import { generateApi, generateTemplates } from "swagger-typescript-api"
import { glob } from "fast-glob"

export default async function (): Promise<void> {
    let __iconsInput: string = join(cwd(), "src", "assets", "icons")
    let __iconsOutput: string = join(cwd(), "schema")

    let icons: string[] = await glob(`${__iconsInput}/*.svg`)
    let json: string = JSON.stringify(
        icons.map((iconpath: string) => `i-custom:${basename(iconpath, ".svg")}`),
        null,
        4,
    )

    await writeFile(`${__iconsOutput}/icons.json`, json, "utf-8")
}
