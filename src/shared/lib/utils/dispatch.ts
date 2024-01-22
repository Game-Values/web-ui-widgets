import type { EventDispatcher } from "svelte"

import { createEventDispatcher } from "svelte"

type Dispatch<T extends string = string, V = unknown> = EventDispatcher<Record<T, V>>

export let dispatch: Dispatch = createEventDispatcher<{
    event: string; // does not accept a payload
}>()
