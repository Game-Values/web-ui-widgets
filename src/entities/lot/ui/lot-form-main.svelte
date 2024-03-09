<script lang="ts">
import type { IItemCreate } from "$schema/api"
import type { ILotCreatePageContext } from "~/pages/lot"

import { mapFormSelectOption } from "$lib/utils"
import { useContext, useEventDispatcher } from "$model"
import { Collapse, Empty, Input, Select, Textarea } from "$ui/data"

import IconInformationCircle from "virtual:icons/heroicons/information-circle"

interface $$Props {
    data: IItemCreate
}

interface $$Events {
    update: CustomEvent<Partial<IItemCreate>>
}

let { context, updateContext } = useContext<ILotCreatePageContext>()
let { dispatchEvent: dispatchUpdateEvent } = useEventDispatcher<Partial<IItemCreate>>("update")

export let data: IItemCreate
</script>

<Collapse
    opened
    title="Main"
    on:toggle={e => e.detail && updateContext({ step: 1 })}
>
    <div class="form-control">
        <Select
            name="gid"
            options={$context.games.map(game => mapFormSelectOption(game, { label: "name", value: "id" }))}
            placement="end"
            required
            bind:value={data.gid}
            on:select={e => dispatchUpdateEvent({ gid: e.detail.value })}
        >
            <svelte:fragment slot="icon">
                <IconInformationCircle />
            </svelte:fragment>
        </Select>
    </div>

    {#if $context.gameSections.length}
        <div class="form-control">
            <Select
                name="attributes.type"
                options={$context.gameSections.map(gameSection => ({ label: gameSection, value: gameSection }))}
                placement="end"
                required
                bind:value={data.attributes.type}
                on:select={e => dispatchUpdateEvent({ attributes: { type: e.detail.value } })}
            >
                <svelte:fragment slot="icon">
                    <IconInformationCircle />
                </svelte:fragment>
            </Select>
        </div>

        <div class="form-control">
            <Input
                name="name"
                placeholder="Item name"
                placement="end"
                required
                bind:value={data.name}
                on:input={e => dispatchUpdateEvent({ name: e.detail?.toString() })}
            >
                <svelte:fragment slot="icon">
                    <IconInformationCircle />
                </svelte:fragment>
            </Input>
        </div>

        <div class="form-control">
            <Textarea
                name="attributes.description"
                maxlength={5000}
                placeholder="Detailed Item Description, up to 5000 characters"
                placement="end"
                required
                rows={4}
                bind:value={data.attributes.description}
                on:input={e => dispatchUpdateEvent({ attributes: { description: e.detail } })}
            >
                <svelte:fragment slot="icon">
                    <IconInformationCircle />
                </svelte:fragment>
            </Textarea>
        </div>
    {:else}
        <Empty />
    {/if}
</Collapse>
