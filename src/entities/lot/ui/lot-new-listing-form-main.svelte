<script lang="ts">
import type { IGame, IItemCreate } from "$schema/api"

import { mapFormSelectOption } from "$lib/utils"
import { useEventDispatcher } from "$model"
import { Collapse, Input, Select, Textarea } from "$ui/data"

import IconInformationCircle from "virtual:icons/heroicons/information-circle"

interface $$Props {
    formData: IItemCreate
    games: IGame[]
    gameSections: string[]
}

interface $$Events {
    update: CustomEvent<Partial<IItemCreate>>
}

let { dispatchEvent: dispatchUpdateEvent } = useEventDispatcher<Partial<IItemCreate>>("update")

export let formData: IItemCreate

export let games: IGame[]

export let gameSections: string[]
</script>

<Collapse
    opened
    title="Main"
>
    <div class="form-control">
        <Select
            name="gid"
            options={games.map(game => mapFormSelectOption(game, { label: "name", value: "id" }))}
            placement="end"
            required
            bind:value={formData.gid}
            on:select={e => dispatchUpdateEvent({ gid: e.detail.value })}
        >
            <svelte:fragment slot="icon">
                <IconInformationCircle />
            </svelte:fragment>
        </Select>
    </div>

    {#if gameSections.length}
        <div class="form-control">
            <Select
                name="attributes.type"
                options={gameSections.map(gameSection => ({ label: gameSection, value: gameSection }))}
                placement="end"
                required
                bind:value={formData.attributes.type}
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
                bind:value={formData.name}
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
                bind:value={formData.attributes.description}
                on:input={e => dispatchUpdateEvent({ attributes: { description: e.detail } })}
            >
                <svelte:fragment slot="icon">
                    <IconInformationCircle />
                </svelte:fragment>
            </Textarea>
        </div>
    {:else}
        <div
            class="alert text-secondary"
            role="alert"
        >
            <IconInformationCircle />

            <span>
                No data
            </span>
        </div>
    {/if}
</Collapse>
