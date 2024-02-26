<script lang="ts">
import type { IGame, IItem } from "$schema/api"

import { useOrderCreateForm } from "~/features/order"

import { Currency, CurrencySign } from "$lib/enums"
import { useSession } from "$model"
import { Input, Select, Textarea } from "$ui/data"

import IconCard from "virtual:icons/common/card"
import IconArrowLongLeft from "virtual:icons/heroicons/arrow-long-left"
import IconArrowLongRight from "virtual:icons/heroicons/arrow-long-right"

interface $$Props {
    game: IGame
    lot: IItem
}

let game: IGame

let lot: IItem

let { user } = useSession()
let { data, form, setData } = useOrderCreateForm({
    order: {
        attributes: {
            currency: Currency.EUR,
            customer_id: $user.id,
        },
        game_id: game.gid || game.id,
        owner_id: lot.owner_id,
    },
})

export {
    game,
    lot,
}
</script>

<form
    class="form"
    use:form
>
    <h5>
        Specify the quantity
    </h5>

    <div class="form-control form-control-row gap-0">
        <Input
            name="order.attributes.price"
            max={lot.attributes.amount}
            min={0}
            placeholder="I will pay"
            placement="end"
            required
            type="number"
            bind:value={$data.order.attributes.price}
            on:input={e => (
                setData("order.attributes.amount", (e.detail * lot.attributes.price) || 0)
            )}
        />

        <div class="flex flex-col items-center justify-center text-3xl">
            <i class="icon">
                <IconArrowLongLeft />
            </i>

            <i class="icon">
                <IconArrowLongRight />
            </i>
        </div>

        <Input
            name="order.attributes.amount"
            min={0}
            placeholder="I will receive"
            required
            type="number"
            bind:value={$data.order.attributes.amount}
            on:input={e => (
                setData("order.attributes.price", (e.detail / lot.attributes.price) || 0)
            )}
        />
    </div>

    <h5>
        Order comment
    </h5>

    <div class="form-control">
        <Textarea
            name="payment.desc"
            placeholder="Specify the method of item transfer (e.g., your in-game username)"
            rows={4}
        />
    </div>

    <h5>
        Payment method
    </h5>

    <div class="form-control">
        <Select
            name="payment.paymentType"
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
            disabled={!$data.order.attributes.price}
            type="submit"
        >
            Place an order for {CurrencySign[$data.order.attributes.currency]}

            {#if $data.order.attributes.price}
                {$data.order.attributes.price}
            {/if}
        </button>
    </div>
</form>
