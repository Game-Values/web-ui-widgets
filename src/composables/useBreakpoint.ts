import type { ComputedRef } from "vue"

import { Breakpoint } from "~/enums"

export function useBreakpoint(): ComputedRef<Breakpoint> {
    let { match } = useViewport()

    return computed((): Breakpoint => {
        if (match(Breakpoint.MD))
            return Breakpoint.MD

        if (match(Breakpoint.SM))
            return Breakpoint.SM

        if (match(Breakpoint.XS))
            return Breakpoint.XS

        return Breakpoint.LG
    })
}

export function useBreakpoints(): Record<Breakpoint, ComputedRef<boolean>> {
    let { match } = useViewport()

    return {
        lg: computed((): boolean => match(Breakpoint.LG)),
        md: computed((): boolean => match(Breakpoint.MD)),
        sm: computed((): boolean => match(Breakpoint.SM)),
        xs: computed((): boolean => match(Breakpoint.XS)),
    }
}
