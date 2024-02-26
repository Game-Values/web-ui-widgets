<script lang="ts">
import type { ILotNewOrderPageContext } from "~/pages/lot"

import { useContext } from "$model"
import { Steps } from "$ui/navigation"

let { context } = useContext<ILotNewOrderPageContext>()
</script>

<Steps
    step={$context.step}
    steps={
        [
            "Select deal options",
            "Make payment",
            "Confirm deal",
        ]
    }
/>
