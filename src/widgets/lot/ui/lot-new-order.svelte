<script lang="ts">
import { LotNewOrderInfo, LotNewOrderSteps, LotNewOrderTitle } from "~/entities/lot"
import { LotNewOrderForm } from "~/features/lot"
</script>

<div class="gap-y-12 flex flex-col">
    <LotNewOrderTitle />

    <LotNewOrderSteps />

    <LotNewOrderInfo />

    <LotNewOrderForm />
</div>
