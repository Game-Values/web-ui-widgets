<script lang="ts">
import { Image } from "@smui/image-list"
import Badge from "@smui-extra/badge"

import { pxToRem } from "$lib"

let className: string = ""

let online: boolean = false

let size: number

$: width = `${pxToRem(size)}rem`

$: height = `${pxToRem(size)}rem`

export {
    className as class,
    online,
    size,
}
</script>

<div
    style:width={width}
    style:height={height}
    class="relative rounded-full {className}"
>
    <Image
        alt="avatar"
        src="/images/user/dummy-avatar.png"
    />

    {#if online}
        <Badge
            class="min-w-2 min-h-2"
            align="bottom-end"
            position="inset"
        />
    {/if}
</div>
