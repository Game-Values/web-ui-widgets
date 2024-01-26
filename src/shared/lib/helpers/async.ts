import type { ICallableLazy, IModule } from "$types"

import { cache } from "$lib"

export function asyncComponent<T = ConstructorOfATypedSvelteComponent>(
    filepath: string,
): ICallableLazy<T> {
    return function (): Promise<T> {
        return asyncModule<T>(filepath)
    }
}

export async function asyncModule<T = unknown>(
    filepath: string,
): Promise<T> {
    if (!cache.has(filepath)) {
        let module: IModule<T> = await import(/* @vite-ignore */ filepath.replace("~", "/src"))
        cache.set(filepath, module.default || module)
    }

    return cache.get(filepath) as T
}
