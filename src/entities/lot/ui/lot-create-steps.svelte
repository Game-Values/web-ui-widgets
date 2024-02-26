<script lang="ts">
import type { ILotCreatePageContext } from "~/pages/lot"

import { useContext } from "$model"
import { Steps } from "$ui/navigation"

let { context } = useContext<ILotCreatePageContext>()
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
