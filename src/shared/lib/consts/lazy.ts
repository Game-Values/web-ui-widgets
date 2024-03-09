import type { ICallableLazy, ILazyComponentConstructor } from "$types"

export const LAZY_COMPONENTS: Record<string, ICallableLazy<ILazyComponentConstructor>> = (
    import.meta.glob<ILazyComponentConstructor>([
        "~/entities/lot/ui/lots-filter-*.svelte",
        "~/widgets/modal/ui/*-modal.svelte",
    ])
)

export const LAZY_MODULES: Record<string, ICallableLazy<any>> = (
    import.meta.glob<any>([
        "~/entities/game/data/sections/*.ts",
        "~/entities/lot/data/filters/*/**.ts",
    ])
)
