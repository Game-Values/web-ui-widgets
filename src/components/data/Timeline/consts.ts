import type { InjectionKey, UnwrapRef } from "vue"
import type { TimelineState } from "~/components/data/Timeline/state"

export const TIMELINE_STATE: InjectionKey<UnwrapRef<TimelineState>> = Symbol("TIMELINE_STATE")

export const TIMELINE_COLOR: Record<string, string> = {
    ACTIVE: useThemeColor("accent-medium"),
    ACTIVE_LINE: useThemeColor("accent-medium"),
    ACTIVE_TEXT: useThemeColor("white"),

    INACTIVE: useThemeColor("white"),
    INACTIVE_LINE: useThemeColor("white"),
    INACTIVE_TEXT: useThemeColor("grey-extra-dark"),
}
