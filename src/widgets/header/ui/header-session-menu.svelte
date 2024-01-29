<script lang="ts">
import { UserAvatar } from "~/entities/user"

import { asyncComponent } from "$lib/helpers"
import { FabButton } from "$ui/common"
import { LazyComponent } from "$ui/effect"
import { Menu } from "$ui/navigation"

let menu: Menu
</script>

<div class="flex">
    <FabButton
        mini
        on:click={menu.open}
    >
        <UserAvatar
            class="border-2 border-solid border-primary"
            size={40}
        />
    </FabButton>

    <Menu bind:this={menu}>
        <LazyComponent provider={asyncComponent("~/entities/session/ui/session-user-menu.svelte")} />
    </Menu>
</div>
