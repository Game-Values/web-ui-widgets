<script lang="ts">
import { Image } from "@smui/image-list"

export let alt: string = "preview"

export let src: string
</script>

<div
    class="
        absolute top-0 left-0
        w-full h-full max-h-31.25rem
    "
>
    <div
        class="
            absolute top-0 left-0
            w-full h-32
            bg-gradient-to-b from-black
        "
    />

    <Image
        class="w-full h-full object-cover"
        {alt}
        loading="lazy"
        {src}
    />
</div>
