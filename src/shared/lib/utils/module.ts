import type { TModule } from "~/shared/model"

export function asyncModule<T = any>(filepath: string): Promise<T> {
    return (
        import(/* @vite-ignore */ filepath.replace("~", "/src"))
            .then((module: TModule<T>) => module.default)
    )
}