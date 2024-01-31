<script lang="ts">
import { Title } from "@smui/paper"

let className: string = ""

export {
    className as class,
}
</script>

<Title class={className}>
    <slot />
</Title>
