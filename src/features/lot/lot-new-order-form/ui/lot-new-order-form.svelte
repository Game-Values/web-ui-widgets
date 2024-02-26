<script lang="ts">
import type { ILotNewOrderPageContext } from "~/pages/lot"

import { useLotsNewOrderForm } from "~/features/lot"

import { CurrencySign } from "$lib/enums"
import { useContext } from "$model"
import { Input, Select, Textarea } from "$ui/data"

import IconCard from "virtual:icons/common/card"
import IconArrowLongLeft from "virtual:icons/heroicons/arrow-long-left"
import IconArrowLongRight from "virtual:icons/heroicons/arrow-long-right"

let { context } = useContext<ILotNewOrderPageContext>()
let { data, form, setData } = useLotsNewOrderForm()
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
            placeholder="I will pay"
            placement="end"
            required
            type="number"
            bind:value={$data.order.attributes.price}
            on:input={e => (
                setData("order.attributes.amount", (e.detail * $context.lot.attributes.price) || 0)
            )}
        >
            <svelte:fragment slot="icon">
                {CurrencySign[$data.order.attributes.currency]}
            </svelte:fragment>
        </Input>

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
            placeholder="I will receive"
            required
            type="number"
            bind:value={$data.order.attributes.amount}
            on:input={e => (
                setData("order.attributes.price", (e.detail / $context.lot.attributes.price) || 0)
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
