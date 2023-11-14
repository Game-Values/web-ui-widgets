import type { ComputedRef } from "vue"

import { Breakpoint } from "~/enums"

export function useBreakpoint(): ComputedRef<Breakpoint> {
    let { match } = useViewport()

    return computed(() => {
        if (match(Breakpoint.LG))
            return Breakpoint.LG

        if (match(Breakpoint.MD))
            return Breakpoint.MD

        if (match(Breakpoint.SM))
            return Breakpoint.SM

        if (match(Breakpoint.XS))
            return Breakpoint.XS
    })
}

export function useBreakpoints(): Record<Breakpoint, ComputedRef<boolean>> {
    let { match } = useViewport()

    return {
        lg: computed(() => match(Breakpoint.LG)),
        md: computed(() => match(Breakpoint.MD)),
        sm: computed(() => match(Breakpoint.SM)),
        xs: computed(() => match(Breakpoint.XS)),
    }
}
