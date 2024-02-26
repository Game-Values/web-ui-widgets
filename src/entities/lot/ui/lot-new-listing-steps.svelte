<script lang="ts">
import type { ILotNewListingPageContext } from "~/pages/lot"

import { useContext } from "$model"
import { Steps } from "$ui/navigation"

let { context } = useContext<ILotNewListingPageContext>()
</script>

<Steps
    step={$context.step}
    steps={
        [
            "Register",
            "Choose plan",
            "Purchase",
        ]
    }
    vertical
/>
