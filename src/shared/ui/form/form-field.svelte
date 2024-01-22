<script lang="ts">
import { Cell } from "@smui/layout-grid"

let className: string = ""

export {
    className as class,
}
</script>

<Cell class={className} span={12}>
    <slot />
</Cell>
