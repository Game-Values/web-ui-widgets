<Image
    class="max-w-full max-h-full object-cover {className}"
    alt={alt}
    loading="lazy"
    src={src}
/>

<script lang="ts">
import { Image } from "@smui/image-list"

let className: string = ""

export let alt: string = ""

export let src: string

export {
    className as class,
}
</script>
