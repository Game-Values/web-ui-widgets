<script lang="ts">
import { Subtitle } from "@smui/paper"

let className: string = ""

export {
    className as class,
}
</script>

<Subtitle class={className}>
    <slot />
</Subtitle>
