import type { ICallableLazy, IModule, ISvelteComponentConstructor } from "$types"

import { fromCache } from "$lib/helpers"

export function asyncComponent<T = ISvelteComponentConstructor>(
    filepath: string,
): ICallableLazy<T> {
    return function (): Promise<T> {
        return asyncModule<T>(filepath)
    }
}

export async function asyncModule<T = unknown>(
    filepath: string,
): Promise<T> {
    return fromCache<T>(filepath, () => (
        import(/* @vite-ignore */ filepath.replace("~", "/src"))
            .then((module: IModule<T>) => module.default || module as T)
    ))
}
