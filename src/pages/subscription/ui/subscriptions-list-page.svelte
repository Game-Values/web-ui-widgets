<script lang="ts">
import { SubscriptionBasicCard, SubscriptionPremiumCard, SubscriptionVipCard } from "~/entities/subscription"

import { Grid, GridCol } from "$ui/layout"
</script>

<Grid subgrid>
    <GridCol>
        <h1>
            Tariff
        </h1>
    </GridCol>

    <GridCol>
        <ul class="w-full flex">
            <li class="flex-1">
                <SubscriptionBasicCard />
            </li>

            <li class="flex-1">
                <SubscriptionPremiumCard />
            </li>

            <li class="flex-1">
                <SubscriptionVipCard />
            </li>
        </ul>
    </GridCol>
</Grid>
