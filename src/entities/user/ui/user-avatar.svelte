<div
    class="relative"
    style:width={width}
    style:height={height}
>
    <Image
        src="/images/user-dummy-avatar.png"
        alt="user avatar"
    />

    {#if online}
        <Badge
            align="bottom-end"
            class="min-w-2 min-h-2"
            position="inset"
        />
    {/if}
</div>

<script lang="ts">
import Badge from "@smui-extra/badge"
import { Image } from "@smui/image-list"

import { pxToRem } from "~/shared/lib"

let online: boolean = false

let size: number

$: width = `${pxToRem(size)}rem`

$: height = `${pxToRem(size)}rem`

export {
    online,
    size,
}
</script>
