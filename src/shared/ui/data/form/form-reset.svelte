<script lang="ts">
import { Button } from "$ui/common"

let className: string = ""

export {
    className as class,
}
</script>

<Button
    class={className}
    color="secondary"
    type="reset"
>
    <slot />
</Button>
