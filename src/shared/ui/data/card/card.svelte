<script lang="ts">
import type { ICallable } from "$types"

import Card from "@smui/card"

let className: string = ""

let color: "primary" | "secondary" = "primary"

let use: ICallable = (): void => {}

export {
    className as class,
    color,
    use,
}
</script>

<Card
    class={className}
    {color}
    use={[use]}
    variant="raised"
>
    <slot />
</Card>
