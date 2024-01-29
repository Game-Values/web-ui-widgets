<script lang="ts">
import { Item, Text } from "@smui/list"

import { forwardEvent } from "$lib/helpers"

let className: string = ""

let href: string | undefined = undefined

export {
    className as class,
    href,
}
</script>

<Item
    class={className}
    {href}
    on:SMUI:action={forwardEvent(null, "click")}
>
    <Text>
        <slot />
    </Text>
</Item>
