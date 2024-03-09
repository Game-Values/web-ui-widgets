<script lang="ts">
import Fab from "@smui/fab"
import MenuSurface from "@smui/menu-surface"

import { UserAvatar } from "~/entities/user"

import { asyncComponent } from "$lib"
import { Lazy } from "$chat-send-hub-message"

let menuSurface: MenuSurface
</script>

<div class="flex">
    <Fab
        mini
        on:click={() => menuSurface.setOpen(true)}
    >
        <UserAvatar
            class="border-2 border-solid border-primary"
            size={40}
        />
    </Fab>

    <MenuSurface bind:this={menuSurface}>
        <Lazy provider={asyncComponent("~/entities/session/chat-send-hub-message/session-user-menu.svelte")} />
    </MenuSurface>
</div>
