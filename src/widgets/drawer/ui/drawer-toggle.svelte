<script lang="ts">
import { useStorage } from "$model"

import IconArrowLeftCircle from "virtual:icons/common/arrow-left-circle"
import IconBars3 from "virtual:icons/heroicons/bars-3"

let { setStorage: toggleDrawer, storageValue: drawerOpened } = useStorage("drawer", true)
</script>

<div
    class="px-4 pt-5 flex items-center"
    class:justify-between={$drawerOpened}
    class:justify-center={!$drawerOpened}
>
    {#if $drawerOpened}
        <b class="uppercase">
            Menu
        </b>
    {/if}

    <label
        class="
            btn btn-circle btn-sm
            tooltip tooltip-right
            swap swap-rotate
            text-secondary text-lg
        "
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
                absolute inset-y-2/4
                -translate-y-2/4
            "
        />

        <IconBars3
            class="
                swap-off
                absolute inset-y-2/4
                -translate-y-2/4
            "
        />
    </label>
</div>
