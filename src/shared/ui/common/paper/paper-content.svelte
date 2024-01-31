<script lang="ts">
import { Content } from "@smui/paper"

let className: string = ""

export {
    className as class,
}
</script>

<Content class={className}>
    <slot />
</Content>
