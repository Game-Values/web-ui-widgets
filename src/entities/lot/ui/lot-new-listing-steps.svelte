<script lang="ts">
import type { ILotNewListingPageContext } from "~/pages/lot"

import { useContext } from "$model"

let { context } = useContext<ILotNewListingPageContext>()
</script>

<ul class="steps steps-vertical">
    <li
        class="step step-primary"
        data-content="1"
    >
        Register
    </li>

    <li
        class="step"
        class:step-primary={$context.step > 1}
        class:step-secondary={$context.step <= 1}
        data-content="2"
    >
        Choose plan
    </li>

    <li
        class="step step-secondary"
        class:step-primary={$context.step > 2}
        class:step-secondary={$context.step <= 2}
        data-content="3"
    >
        Purchase
    </li>
</ul>
