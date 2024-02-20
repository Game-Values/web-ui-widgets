<script lang="ts">
import type { IGame, IItem } from "$schema/api"

import { merge } from "lodash-es"
import { onMount, tick } from "svelte"

import { fetchGameSections, findGameById } from "~/entities/game"
import { useLotsNewListingForm } from "~/features/lot"

import { mapFormSelectOption } from "$lib/utils"
import { useEventDispatcher, useRoute, useWatch } from "$model"
import { LazyPromise } from "$ui/actions"
import { Input, Select, Textarea } from "$ui/data"

import IconInformationCircle from "virtual:icons/heroicons/information-circle"

interface $$Props {
    games: IGame[]
}

interface $$Events {
    update: CustomEvent<IItem>
}

let games: IGame[] = []

let { dispatchEvent: dispatchUpdateEvent } = useEventDispatcher<IItem>("update")
let { data, form, setData } = useLotsNewListingForm()
let { routeQuery } = useRoute()

let gameSectionsPromise: Promise<string[]> | undefined

let selectedGame: IGame | undefined

useWatch(data, dispatchUpdateEvent)

onMount((): void => {
    tick().then((): void => update())
})

function update(updatedData?: Partial<IItem>): void {
    let resultData: IItem = merge({
        attributes: { type: $routeQuery.gameSection },
        gid: $routeQuery.gameId,
    }, updatedData)

    selectedGame = findGameById(games, (resultData.gid || games[0].id)!)
    if (!selectedGame)
        return

    gameSectionsPromise = fetchGameSections(selectedGame)
    gameSectionsPromise.then((gameSections: string[]): void => (
        setData("attributes.type", resultData.attributes.type || gameSections[0])
    ))

    setData("gid", selectedGame.id)
    setData("gname", selectedGame.name)
}

export {
    games,
}
</script>

<form
    class="form"
    use:form
>
    <div class="form-control">
        <Select
            name="gid"
            options={games.map(game => mapFormSelectOption(game, { label: "name", value: "id" }))}
            placement="end"
            required
            bind:value={$data.gid}
            on:select={e => update({ gid: e.detail.value })}
        >
            <svelte:fragment slot="icon">
                <IconInformationCircle />
            </svelte:fragment>
        </Select>
    </div>

    {#if gameSectionsPromise}
        <LazyPromise
            promise={gameSectionsPromise}
            let:value={gameSections}
        >
            {#if gameSections.length}
                <div class="form-control">
                    <Select
                        name="attributes.type"
                        options={gameSections.map(gameSection => ({ label: gameSection, value: gameSection }))}
                        placement="end"
                        required
                        bind:value={$data.attributes.type}
                    >
                        <svelte:fragment slot="icon">
                            <IconInformationCircle />
                        </svelte:fragment>
                    </Select>
                </div>

                <div class="form-control">
                    <Input
                        name="name"
                        placement="end"
                        required
                        bind:value={$data.name}
                    >
                        <svelte:fragment slot="icon">
                            <IconInformationCircle />
                        </svelte:fragment>
                    </Input>
                </div>

                <div class="form-control">
                    <Textarea
                        name="attributes.description"
                        placement="end"
                        required
                        rows={4}
                        bind:value={$data.attributes.description}
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
        </LazyPromise>
    {/if}
</form>
