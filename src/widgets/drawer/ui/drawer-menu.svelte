<script lang="ts">
import type { IRouteWithIcon, IRouteWithLabel } from "$types"

import { DrawerMenuItem } from "~/widgets/drawer"

import { useRoute, useStorage } from "$model"
import { Divider } from "$ui/layout"

import IconArchiveDown from "virtual:icons/common/archive-down"
import IconArchiveUp from "virtual:icons/common/archive-up"
import IconCube from "virtual:icons/common/cube"
import IconMoney from "virtual:icons/common/money"
import IconSearchUser from "virtual:icons/common/search-user"
import IconEnvelopeSolid from "virtual:icons/heroicons/envelope-solid"
import IconHeartSolid from "virtual:icons/heroicons/heart-solid"
import IconPlusCircle from "virtual:icons/heroicons/plus-circle"

interface $$Slots {
    default: { link: IDrawerLink }
}

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

let { route, routeActive } = useRoute("/lots/new-listing")
</script>

<nav>
    <menu
        class="menu -mt-4"
        class:w-80={$drawerOpened}
    >
        <DrawerMenuItem
            class="flex-row justify-between"
            link={
                {
                    icon: IconCube,
                    iconClass: "text-info scale-150",
                    label: "My lots",
                    url: "/lots",
                }
            }
        >
            {#if $drawerOpened}
                <a
                    class="
                        btn btn-sm
                        tooltip tooltip-right
                        inline-flex items-center justify-center
                        text-secondary
                    "
                    class:active={$routeActive}
                    data-tip="New Listing"
                    href={$route}
                >
                    <strong>
                        <IconPlusCircle />
                    </strong>
                </a>
            {/if}
        </DrawerMenuItem>

        {#each links as link (link.label)}
            <slot {link} />

            {#if link.divider}
                <Divider
                    class="divider max-w-64 h-3 basis-px"
                    tag="li"
                />
            {/if}
        {/each}
    </menu>
</nav>
