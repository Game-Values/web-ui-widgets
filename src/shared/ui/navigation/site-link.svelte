<script lang="ts">
import type { HTMLAnchorAttributes } from "svelte/elements"

interface $$Props {
    label?: string
    target?: HTMLAnchorAttributes["target"]
}

interface $$Slots {
    default: NonNullable<unknown>
}

export let label: string = "game-values.com"

export let target: HTMLAnchorAttributes["target"] = undefined
</script>

<a
    class="link link-primary link-hover"
    href="https://game-values.com"
    {target}
>
    <slot>
        {label}
    </slot>
</a>
