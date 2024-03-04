<script lang="ts">
import { Steps } from "$ui/navigation"

interface $$Props {
    step: number
}

export let step: number
</script>

<Steps
    class="w-full"
    {step}
    steps={
        [
            "Select deal options",
            "Make transaction",
            "Confirm deal",
        ]
    }
/>
