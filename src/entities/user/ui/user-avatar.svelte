<script lang="ts">
import { asyncComponent } from "$lib/helpers"
import { pxToRem } from "$lib/utils"
import { Image } from "$ui/data"
import { LazyComponent } from "$ui/effect"

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
        <LazyComponent
            options={
                {
                    props: {
                        align: "bottom-end",
                        class: "min-w-2 min-h-2",
                        position: "inset",
                    },
                }
            }
            provider={asyncComponent("~/shared/ui/data/badge/badge.svelte")}
        />
    {/if}
</div>
