<script lang="ts">
import type { IItem } from "$schema/api"
import type { IContextUser } from "$types"

import { SessionUserOnly } from "~/entities/session"

import { formatPrice } from "$lib/utils"
import { useContext } from "$model"
import { Checkbox } from "$ui/data"
import { Divider } from "$ui/layout"

import IconArchiveUpSuccess from "virtual:icons/common/archive-up-success"
import IconCheckCircleSolid from "virtual:icons/heroicons/check-circle-solid"
import IconEyeSlashSolid from "virtual:icons/heroicons/eye-slash-solid"
import IconMoon from "virtual:icons/heroicons/moon"
import IconSun from "virtual:icons/heroicons/sun"

interface $$Props {
    lot: IItem
}

interface $$Slots {
    deleteLot: NonNullable<unknown>
    editLot: NonNullable<unknown>
}

let lot: IItem

let visible: boolean = true

let { context } = useContext<IContextUser>()

export {
    lot,
}
</script>

<tr>
    <td>
        <Checkbox inputClass="checkbox-xs checkbox-primary" />
    </td>

    <td>
        {lot.attributes.type}
    </td>

    <td>
        <p class="flex flex-col">
            <b class="line-clamp-2">
                {lot.name}
            </b>

            <small class="text-secondary line-clamp-2 empty:(hidden)">
                {lot.attributes.description}
            </small>
        </p>
    </td>

    <td>
        {lot.attributes.amount}
    </td>

    <td>
        {formatPrice(lot.attributes.price, lot.attributes.currency)}
    </td>

    <SessionUserOnly user={$context.user}>
        <td>
            <p class="inline-flex flex-col items-center text-base">
                {#if visible}
                    <i class="icon w-6 h-6 text-positive-light">
                        <IconCheckCircleSolid />
                    </i>

                    <small class="text-secondary">
                        Visible
                    </small>
                {:else}
                    <i class="icon w-6 h-6 text-secondary">
                        <IconEyeSlashSolid />
                    </i>

                    <small class="text-secondary">
                        Hidden
                    </small>
                {/if}
            </p>
        </td>

        <td>
            <div class="flex items-center text-2xl">
                <div class="join join-horizontal gap-x-2">
                    <button
                        class="btn btn-circle btn-ghost btn-sm tooltip"
                        data-tip="Up"
                    >
                        <i class="icon text-white/[0.12]">
                            <IconArchiveUpSuccess />
                        </i>
                    </button>

                    <label
                        class="
                            btn btn-circle btn-ghost btn-sm
                            swap swap-rotate
                            tooltip
                        "
                        data-tip={visible ? "Hide" : "Show"}
                    >
                        <input
                            type="checkbox"
                            bind:checked={visible}
                        />

                        <i class="icon swap-on absolute text-accent">
                            <small>
                                <IconSun />
                            </small>
                        </i>

                        <i class="icon swap-off absolute text-secondary">
                            <small>
                                <IconMoon />
                            </small>
                        </i>
                    </label>

                    <slot name="editLot" />
                </div>

                <Divider horizontal />

                <slot name="deleteLot" />
            </div>
        </td>
    </SessionUserOnly>
</tr>
