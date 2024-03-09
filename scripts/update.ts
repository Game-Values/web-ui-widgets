import type { ICallableLazy } from "$types"

import { exec } from "node:child_process"
import { promisify } from "node:util"

import { dependencies, devDependencies } from "../package.json"

async function update(): Promise<void> {
    let updatePromise: ICallableLazy = async (command: string): Promise<void> => {
        console.log(command)

        let { stderr, stdout }:  { stdout: string, stderr: string } = await promisify(exec)(command)

        if (stderr)
            console.info(stderr)

        if (stdout)
            console.info(stdout)
    }

    let dependency: string
    for (dependency of Object.keys(dependencies))
        await updatePromise(`bun add ${dependency}`)

    for (dependency of Object.keys(devDependencies))
        await updatePromise(`bun add -d ${dependency}`)
}

await update()
