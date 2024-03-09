import type { IRouteWithIcon } from "$types"

import IconDiscord from "virtual:icons/common/discord"
import IconFacebook from "virtual:icons/common/facebook"
import IconInstagram from "virtual:icons/common/instagram"
import IconTelegramChat from "virtual:icons/common/telegram-chat"
import IconTelegramNews from "virtual:icons/common/telegram-news"
import IconTwitch from "virtual:icons/common/twitch"
import IconYoutube from "virtual:icons/common/youtube"

export let footerSocialLinks: IRouteWithIcon[] = [
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
