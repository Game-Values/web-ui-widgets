<script lang="ts">
import type { IRouteWithIcon, IRouteWithLabel } from "$types"

import { isActiveRoute } from "$lib/helpers"
import { useStorage } from "$model"
import { route } from "$schema/routes"
import { Divider } from "$ui/layout"

import IconArchiveDown from "virtual:icons/common/archive-down"
import IconArchiveUp from "virtual:icons/common/archive-up"
import IconCube from "virtual:icons/common/cube"
import IconMoney from "virtual:icons/common/money"
import IconSearchUser from "virtual:icons/common/search-user"
import IconEnvelopeSolid from "virtual:icons/heroicons/envelope-solid"
import IconHeartSolid from "virtual:icons/heroicons/heart-solid"
import IconPlusCircle from "virtual:icons/heroicons/plus-circle"

let { storageValue: drawerOpened } = useStorage("drawer", true)

type IDrawerLink = IRouteWithIcon & IRouteWithLabel & {
    divider?: boolean
    iconClass?: string
}

let links: IDrawerLink[] = [
    {
        icon: IconArchiveDown,
        label: "Sales",
        url: "/sales",
    },
    {
        icon: IconArchiveUp,
        label: "Purchases",
        url: "/purchases",
    },
    {
        divider: true,
        icon: IconSearchUser,
        label: "Referral program",
        url: "/referral",
    },
    {
        divider: true,
        icon: IconEnvelopeSolid,
        label: "Messages",
        url: "/messages",
    },
    {
        divider: true,
        icon: IconMoney,
        iconClass: "text-info",
        label: "Funds",
        url: "/funds",
    },
    {
        icon: IconHeartSolid,
        iconClass: "text-negative-light",
        label: "Favorites",
        url: "/favorites",
    },
]
</script>

<ul
    class="menu"
    class:w-80={$drawerOpened}
>
    <li class="flex-row justify-between">
        <a
            class="tooltip-right max-w-56 flex-1"
            class:active={$isActiveRoute("/lots")}
            class:tooltip={!$drawerOpened}
            data-tip="My lots"
            href={route("/lots")}
        >
            <IconCube class="text-info" />

            {#if $drawerOpened}
                My lots
            {/if}
        </a>

        {#if $drawerOpened}
            <a
                class="tooltip tooltip-right text-secondary"
                class:active={$isActiveRoute("/lots/create")}
                data-tip="Create lot"
                href={route("/lots/create")}
            >
                <IconPlusCircle />
            </a>
        {/if}
    </li>

    {#each links as link (link.label)}
        <li>
            <a
                class="tooltip-right max-w-56"
                class:active={$isActiveRoute(link.url)}
                class:tooltip={!$drawerOpened}
                data-tip={link.label}
                href={route(link.url)}
            >
                <svelte:component
                    this={link.icon}
                    class={link.iconClass}
                />

                {#if $drawerOpened}
                    {link.label}
                {/if}
            </a>
        </li>

        {#if link.divider}
            <Divider class="divider max-w-64 h-3 basis-px" tag="li" />
        {/if}
    {/each}
</ul>
