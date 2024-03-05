<script lang="ts">
import { CurrencySign } from "$lib/enums"
import { formatPrice } from "$lib/utils"
import { useSession } from "$model"
import { Input, Select } from "$ui/data"

import IconCard from "virtual:icons/common/card"
import IconInformationCircle from "virtual:icons/heroicons/information-circle"

let { currency } = useSession()
</script>

<form class="form">
    <div class="form-control form-control-row">
        <Input
            class="flex-1"
            min={0}
            placeholder="Amount Withdrawal"
            placement="end"
            required
            type="number"
        >
            <svelte:fragment slot="icon">
                {CurrencySign[$currency]}
            </svelte:fragment>
        </Input>

        <p class="gap-x-2 inline-flex items-center flex-1 text-secondary">
            <IconInformationCircle />

            <small>
                Available {formatPrice(17_240)}
            </small>
        </p>
    </div>

    <div class="form-control">
        <Select
            options={[{ label: "With a credit card on the website", value: "card" }]}
            required
        >
            <svelte:fragment slot="icon">
                <IconCard class="text-positive-light" />
            </svelte:fragment>
        </Select>
    </div>

    <div class="form-control">
        <button
            class="btn btn-primary"
            type="submit"
        >
            Withdraw
        </button>
    </div>
</form>
