<script lang="ts">
import { setContext } from "svelte"

import { RouteLink } from "$lib/enums"
import { useSession } from "$model/session"
import { List, ListItem, ListItemSeparator } from "$ui/navigation"

let { logout } = useSession()

setContext("SMUI:list:nav", true)
setContext("SMUI:list:item:nav", true)
</script>

<List>
    <ListItem href={RouteLink.CART}>
        Deals
    </ListItem>

    <ListItem href={RouteLink.MESSAGES}>
        Messages
    </ListItem>

    <ListItem href={RouteLink.FAVORITES}>
        Favorites
    </ListItem>

    <ListItemSeparator />

    <ListItem>
        Profile
    </ListItem>

    <ListItem>
        Settings
    </ListItem>

    <ListItem>
        Language
    </ListItem>

    <ListItem>
        Currency
    </ListItem>

    <ListItemSeparator />

    <ListItem>
        Seller's account
    </ListItem>

    <ListItemSeparator />

    <ListItem>
        Referral program
    </ListItem>

    <ListItem>
        Help
    </ListItem>

    <ListItem>
        Feedback
    </ListItem>

    <ListItemSeparator />

    <ListItem
        class="text-error"
        on:click={logout}
    >
        Log Out
    </ListItem>
</List>
