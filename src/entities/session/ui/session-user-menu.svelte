<script lang="ts">
import List, { Item, Separator, Text } from "@smui/list"
import { setContext } from "svelte"

import { RouteLink } from "$lib"
import { useSession } from "$model"

let { logout } = useSession()

setContext("SMUI:list:nav", true)
setContext("SMUI:list:item:nav", true)
</script>

<List>
    <Item href={RouteLink.CART}>
        <Text>
            Deals
        </Text>
    </Item>

    <Item href={RouteLink.MESSAGES}>
        <Text>
            Messages
        </Text>
    </Item>

    <Item href={RouteLink.FAVORITES}>
        <Text>
            Favorites
        </Text>
    </Item>

    <Separator />

    <Item>
        <Text>
            Profile
        </Text>
    </Item>

    <Item>
        <Text>
            Settings
        </Text>
    </Item>

    <Item>
        <Text>
            Language
        </Text>
    </Item>

    <Item>
        <Text>
            Currency
        </Text>
    </Item>

    <Separator />

    <Item>
        <Text>
            Seller's account
        </Text>
    </Item>

    <Separator />

    <Item>
        <Text>
            Referral program
        </Text>
    </Item>

    <Item>
        <Text>
            Help
        </Text>
    </Item>

    <Item>
        <Text>
            Feedback
        </Text>
    </Item>

    <Separator />

    <Item on:SMUI:action={logout}>
        <Text class="text-error">
            Log Out
        </Text>
    </Item>
</List>
