<script lang="ts">
import type { IStat } from "$types"

import { formatNum, formatPrice } from "$lib/utils"

let stats: IStat[] = [
    {
        label: "Items bought",
        value: formatNum(184),
    },
    {
        label: "Items sold",
        value: formatNum(123),
    },
    {
        label: "Total purchase amount",
        value: formatPrice(123_000),
    },
    {
        label: "Total sales amount",
        value: formatPrice(134_000),
    },
]
</script>

<ul class="stats stats-vertical gap-y-5">
    {#each stats as stat (stat.label)}
        <li class="card stat">
            <span class="stat-title text-secondary">
                {stat.label}:
            </span>

            <span class="stat-value">
                <strong>
                    {stat.value}
                </strong>
            </span>
        </li>
    {/each}
</ul>
