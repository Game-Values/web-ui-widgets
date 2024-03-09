<script lang="ts">
import type { IGame, IItem } from "$schema/api"

import { Collapse } from "$ui/data"

interface $$Props {
    game: IGame
    lot: IItem
}

export let game: IGame

export let lot: IItem
</script>

<Collapse
    opened
    title="Payment Information"
    titleClass="px-4 bg-secondary text-lg"
>
    <table class="table table-lg table-zebra">
        <tbody>
            <tr>
                <td>
                    Game name
                </td>

                <td>
                    {game.name}
                </td>
            </tr>

            <tr>
                <td>
                    Item name
                </td>

                <td>
                    {lot.name}
                </td>
            </tr>

            {#each Object.entries(lot.attributes) as [key, val] (key)}
                {#if val}
                    <tr>
                        <td class="capitalize">
                            {key}
                        </td>

                        <td>
                            {val}
                        </td>
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
</Collapse>
