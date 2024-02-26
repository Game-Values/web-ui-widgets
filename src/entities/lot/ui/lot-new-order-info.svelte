<script lang="ts">
import type { ILotNewOrderPageContext } from "~/pages/lot"

import { useContext } from "$model"
import { Collapse } from "$ui/data"

let { context } = useContext<ILotNewOrderPageContext>()
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
                    {$context.game.name}
                </td>
            </tr>

            <tr>
                <td>
                    Item name
                </td>

                <td>
                    {$context.lot.name}
                </td>
            </tr>

            {#each Object.entries($context.lot.attributes) as [key, val] (key)}
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
