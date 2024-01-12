import type { Module } from "~/shared/model"

export function asyncModule<T = any>(filepath: string): Promise<T> {
    return (
        import(/* @vite-ignore */ filepath.replace("~", "/src"))
            .then((module: Module<T>) => module.default)
    )
}
