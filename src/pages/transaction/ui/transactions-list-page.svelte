<script lang="ts">
import { formatPrice } from "$lib/utils"
import { useRoute } from "$model"
import { Empty } from "$ui/data"
import { Grid, GridCol } from "$ui/layout"

let { route: withdrawRoute } = useRoute("/funds/withdraw")
</script>

<Grid subgrid>
    <GridCol
        class="gap-x-8"
        align="end"
    >
        <div class="gap-y-2 flex flex-col">
            <small class="text-secondary">
                Available for withdrawal:
            </small>

            <b class="text-4xl">
                {formatPrice(17_240)}
            </b>
        </div>

        <a
            class="btn btn-primary"
            href={$withdrawRoute}
        >
            Withdraw
        </a>
    </GridCol>
</Grid>

<Grid subgrid>
    <GridCol class="gap-y-4 flex-col">
        <h3>
            <!-- todo: table caption -->
            Transactions
        </h3>

        <Empty />
    </GridCol>
</Grid>
