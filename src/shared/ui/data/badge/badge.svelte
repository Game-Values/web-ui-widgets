<script lang="ts">
import Badge from "@smui-extra/badge"

let align: (
    "bottom-end" |
    "bottom-middle" |
    "bottom-start" |
    "middle-end" |
    "middle-middle" |
    "middle-start" |
    "top-end" |
    "top-middle" |
    "top-start" |
    undefined
) = undefined

let className: string = ""

let position: "inset" | "middle" | "outset" | undefined = undefined

export {
    align,
    className as class,
    position,
}
</script>

<Badge
    class={className}
    {align}
    {position}
/>
