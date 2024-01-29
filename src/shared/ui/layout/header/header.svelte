<script lang="ts">
import TopAppBar from "@smui/top-app-bar"

let className: string = ""

export {
    className as class,
}
</script>

<TopAppBar
    class={className}
    variant="static"
>
    <slot />
</TopAppBar>
