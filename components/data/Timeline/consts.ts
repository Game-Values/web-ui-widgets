import type { InjectionKey, UnwrapRef } from "vue"
import type { TimelineState } from "@/components/data/Timeline/state"

export const TIMELINE_STATE: InjectionKey<UnwrapRef<TimelineState>> = Symbol("TIMELINE_STATE")
