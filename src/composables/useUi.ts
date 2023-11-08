import type { PropsOptions } from "vexip-ui"

export function useUiProps<T extends object>(props?: T): object {
    return useMerge({
        inherit: true,
    }, props)
}
