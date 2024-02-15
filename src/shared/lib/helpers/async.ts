import type { ICallableLazy, IModule, ISvelteComponentConstructor } from "$types"

export function asyncComponent<
    T extends ConstructorOfATypedSvelteComponent = ISvelteComponentConstructor
>(
    filepath: string,
): ICallableLazy<T> {
    return function (): Promise<T> {
        return asyncModule<T>(filepath)
    }
}

export function asyncModule<T = unknown>(filepath: string): Promise<T> {
    return import(/* @vite-ignore */ filepath.replace("~", "/src"))
        .then((module: IModule<T>): T => module.default)
}
