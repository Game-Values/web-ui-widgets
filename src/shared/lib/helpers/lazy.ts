import type { ILazyComponentConstructor, ILazyComponentSrc, ILazyModuleSrc, IModule } from "$types"

import { LAZY_COMPONENTS, LAZY_MODULES } from "$lib/consts"

export function extractLazyModule<T>(modulePromise: Promise<IModule<T> | T>): Promise<T> {
    return modulePromise.then((module: IModule<T> | T): T => (
        (module as IModule<T>).default || module as T
    ))
}

export function lazyModule<T>(alias: ILazyModuleSrc): Promise<T> {
    return extractLazyModule<T>(
        LAZY_MODULES[resolveLazyModuleAlias(alias)](),
    )
}

export function lazyComponent(alias: ILazyComponentSrc): Promise<ILazyComponentConstructor> {
    return extractLazyModule<ILazyComponentConstructor>(
        LAZY_COMPONENTS[resolveLazyModuleAlias(alias)](),
    )
}

export function resolveLazyModuleAlias(alias: ILazyComponentSrc | ILazyModuleSrc): string {
    return alias.replace("~/", "/src/")
}
