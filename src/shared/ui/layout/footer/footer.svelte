<script lang="ts">
import BottomAppBar from "@smui-extra/bottom-app-bar"

let className: string = ""

export {
    className as class,
}
</script>

<footer class={className}>
    <BottomAppBar variant="static">
        <slot />
    </BottomAppBar>
</footer>
