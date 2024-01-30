<script lang="ts">
import type { ICallable } from "$types"

import Card from "@smui/card"

let background: boolean = false

let border: boolean = false

let className: string = ""

let use: ICallable = (): void => {}

export {
    background,
    border,
    className as class,
    use,
}
</script>

<Card
    class={`
        rounded-2xl
        ${background ? "bg-white/2" : ""}
        ${border ? "border border-solid border-secondary" : ""}
        ${className}
    `}
    use={[use]}
>
    <slot />
</Card>
