<script lang="ts">
import type { IRouteWithIcon } from "$types"

import { FooterLink } from "~/widgets/footer"

import IconDiscord from "virtual:icons/common/discord"
import IconFacebook from "virtual:icons/common/facebook"
import IconInstagram from "virtual:icons/common/instagram"
import IconTelegramChat from "virtual:icons/common/telegram-chat"
import IconTelegramNews from "virtual:icons/common/telegram-news"
import IconTwitch from "virtual:icons/common/twitch"
import IconYoutube from "virtual:icons/common/youtube"

let links: IRouteWithIcon[] = [
    {
        icon: IconInstagram,
        url: "instagram",
    },
    {
        icon: IconDiscord,
        url: "discord",
    },
    {
        icon: IconYoutube,
        url: "youtube",
    },{
        icon: IconTwitch,
        url: "twitch",
    },
    {
        icon: IconFacebook,
        url: "facebook",
    },
    {
        icon: IconTelegramChat,
        url: "telegramChat",
    },
    {
        icon: IconTelegramNews,
        url: "telegramNews",
    },
]
</script>

<nav class="gap-x-6 flex">
    {#each links as link (link.url)}
        <FooterLink
            {link}
            target="_blank"
        >
            <svelte:component
                this={link.icon}
                class="text-4xl"
            />
        </FooterLink>
    {/each}
</nav>
