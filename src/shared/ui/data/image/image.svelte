<script lang="ts">
import { Image } from "@smui/image-list"

let alt: string | undefined = ""

let className: string = ""

let lazy: boolean = false

let src: string

$: loading = lazy ? "lazy" : undefined

export {
    alt,
    className as class,
    lazy,
    src,
}
</script>

<Image
    class={className}
    {alt}
    {loading}
    {src}
/>
