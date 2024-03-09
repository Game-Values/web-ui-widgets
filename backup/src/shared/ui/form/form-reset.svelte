<script lang="ts">
import Button from "@smui/button"

let className: string = ""

let color: "primary" | "secondary" = "primary"

let variant: "outlined" | "raised" | "text" | "unelevated" = "unelevated"

export {
    className as class,
    color,
    variant,
}
</script>

<Button
    class={className}
    {color}
    type="reset"
    {variant}
>
    <slot />
</Button>
