import type { IIconLink } from "$types"

import IconDiscord from "virtual:icons/common/discord"
import IconFacebook from "virtual:icons/common/facebook"
import IconInstagram from "virtual:icons/common/instagram"
import IconTelegram from "virtual:icons/common/telegram"
import IconTwitch from "virtual:icons/common/twitch"
import IconYoutube from "virtual:icons/common/youtube"

import { RouteExternal, SocialMedia } from "$lib/enums"

export let footerSocialLinks: IIconLink[] = [
    {
        Icon: IconInstagram,
        url: RouteExternal.INSTAGRAM,
    },
    {
        Icon: IconDiscord,
        url: RouteExternal.DISCORD,
    },
    {
        Icon: IconYoutube,
        url: RouteExternal.YOUTUBE,
    },
    {
        Icon: IconTwitch,
        url: RouteExternal.TWITCH,
    },
    {
        Icon: IconFacebook,
        url: RouteExternal.FACEBOOK,
    },
    {
        Icon: IconTelegram,
        url: RouteExternal.TELEGRAM,
    },
]
