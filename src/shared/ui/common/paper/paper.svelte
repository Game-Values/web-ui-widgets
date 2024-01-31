<script lang="ts">
import Paper from "@smui/paper"

let className: string = ""

export {
    className as class,
}
</script>

<Paper
    class={className}
    square
    transition
    variant="unelevated"
>
    <slot />
</Paper>
