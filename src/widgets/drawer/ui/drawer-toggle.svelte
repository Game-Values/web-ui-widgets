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
        <strong class="uppercase">
            <b>
                Menu
            </b>
        </strong>
    {/if}

    <label
        class="
            btn btn-circle btn-sm
            tooltip tooltip-right
            swap swap-rotate
            text-secondary
        "
        data-tip="Toggle menu"
    >
        <input
            checked={$drawerOpened}
            type="checkbox"
            on:change={() => toggleDrawer(!$drawerOpened)}
        />

        <strong class="swap-on absolute flex items-center">
            <i class="icon">
                <IconArrowLeftCircle />
            </i>
        </strong>

        <strong class="swap-off absolute flex items-center">
            <i class="icon">
                <IconBars3 />
            </i>
        </strong>
    </label>
</div>
