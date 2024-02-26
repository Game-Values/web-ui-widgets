<script lang="ts">
import { Currency } from "$lib/enums"
import { formatNum, formatPrice } from "$lib/utils"
import { EnhancedImage, Toggle } from "$ui/data"

import IconHandDown from "virtual:icons/common/hand-down"
import IconHandUp from "virtual:icons/common/hand-up"

type IStat = {
    label: string
    value: string
}

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
        value: formatPrice(123_000, Currency.EUR),
    },
    {
        label: "Total sales amount",
        value: formatPrice(134_000, Currency.EUR),
    },
]
</script>

<div class="card card-bordered card-normal">
    <div class="card-body gap-y-5">
        <h3>
            Statistics
        </h3>

        <p class="flex flex-col">
            <span class="text-secondary">
                Your balance:
            </span>

            <b class="text-2xl">
                {formatPrice(17_240, Currency.EUR)}
            </b>
        </p>

        <Toggle
            checked
            inputClass="toggle-success"
        >
            <span class="text-secondary">
                Show the amount of my transactions to other users
            </span>
        </Toggle>

        <div class="gap-x-5 flex">
            <div class="gap-x-1 inline-flex items-center text-success">
                <i class="icon">
                    <IconHandUp />
                </i>

                <b>
                    100
                </b>
            </div>

            <div class="gap-x-1 inline-flex items-center text-white/[0.12]">
                <i class="icon">
                    <IconHandDown />
                </i>

                <b>
                    32
                </b>
            </div>
        </div>

        <p class="text-secondary">
            72% completed deals
        </p>

        <ul class="stats stats-vertical gap-y-5">
            {#each stats as stat (stat.label)}
                <li class="card stat bg-white/[0.02]">
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

        <div>
            <h4>
                Your Achievements:
            </h4>

            <ul class="flex">
                {#each Array(3) as _, i (i)}
                    <li>
                        <EnhancedImage
                            --height="6.75rem"
                            --width="6.75rem"
                            alt="achievement"
                            size="sm"
                            src="images/achievements/{i + 1}.png"
                        />
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
