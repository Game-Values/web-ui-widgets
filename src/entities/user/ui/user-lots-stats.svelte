<script lang="ts">
import type { IStat } from "$types"

import { formatNum } from "$lib/utils"

import IconCheckCircleSolid from "virtual:icons/heroicons/check-circle-solid"
import IconEyeSlashSolid from "virtual:icons/heroicons/eye-slash-solid"

let stats: IStat[] = [
    {
        label: "Total",
        value: formatNum(122),
    },
    {
        icon: IconCheckCircleSolid,
        iconClass: "text-positive-light",
        label: "Visible",
        value: formatNum(100),
    },
    {
        icon: IconEyeSlashSolid,
        iconClass: "text-secondary",
        label: "Hidden",
        value: formatNum(22),
    },
]
</script>

<ul class="stats">
    {#each stats as stat, i (stat.label)}
        <li
            class="
                stat
                p-0 gap-x-1
                inline-flex items-center
                border-transparent
            "
        >
            {#if stat.icon}
                <i class="icon {stat.iconClass}">
                    <svelte:component this={stat.icon} />
                </i>
            {/if}

            <span class="stat-title text-secondary">
                {stat.label}:
            </span>

            <b class="stat-value">
                {stat.value}
            </b>

            <span class="mx-2 text-secondary">
                {#if i < stats.length - 1}
                    •
                {/if}
            </span>
        </li>
    {/each}
</ul>
