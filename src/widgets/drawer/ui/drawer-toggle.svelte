<script lang="ts">
import { useStorage } from "$model"

import IconArrowLeftCircle from "virtual:icons/heroicons/arrow-left-circle"
import IconBars3 from "virtual:icons/heroicons/bars-3"

let { setStorage: toggleDrawer, storageValue: drawerOpened } = useStorage("drawer", true)
</script>

<div
    class="p-4 pb-0 flex items-center"
    class:justify-between={$drawerOpened}
    class:justify-center={!$drawerOpened}
>
    {#if $drawerOpened}
        <b class="text-base uppercase">
            Menu
        </b>
    {/if}

    <label
        class="btn btn-circle btn-sm tooltip tooltip-right swap swap-rotate"
        data-tip="Toggle menu"
    >
        <input
            checked={$drawerOpened}
            type="checkbox"
            on:change={() => toggleDrawer(!$drawerOpened)}
        />

        <IconArrowLeftCircle
            class="
                swap-on
                absolute left-[0.3125rem] inset-y-2/4
                -translate-y-2/4
            "
        />

        <IconBars3
            class="
                swap-off
                absolute left-[0.3125rem] inset-y-2/4
                -translate-y-2/4
            "
        />
    </label>
</div>
