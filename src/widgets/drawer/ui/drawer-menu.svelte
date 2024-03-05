<script lang="ts">
import { DrawerMenuItem, drawerLinks } from "~/widgets/drawer"

import { useRoute, useStorage } from "$model"
import { Divider } from "$ui/layout"

import IconCube from "virtual:icons/common/cube"
import IconPlusCircle from "virtual:icons/heroicons/plus-circle"

let { storageValue: drawerOpened } = useStorage("drawer", true)

let { route: lotsCreateRoute, routeActive: lotsCreateRouteActive } = useRoute("/lots/create")
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
                    class:active={$lotsCreateRouteActive}
                    data-tip="New Listing"
                    href={$lotsCreateRoute}
                >
                    <strong>
                        <IconPlusCircle />
                    </strong>
                </a>
            {/if}
        </DrawerMenuItem>

        {#each drawerLinks as drawerLink (drawerLink.label)}
            <DrawerMenuItem link={drawerLink} />

            {#if drawerLink.divider}
                <Divider
                    class="divider max-w-64 h-3 basis-px"
                    tag="li"
                />
            {/if}
        {/each}
    </menu>
</nav>
