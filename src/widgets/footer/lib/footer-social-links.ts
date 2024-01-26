import type { IIconLink } from "$types"

import IconDiscord from "virtual:icons/common/discord"
import IconFacebook from "virtual:icons/common/facebook"
import IconInstagram from "virtual:icons/common/instagram"
import IconTelegram from "virtual:icons/common/telegram"
import IconTwitch from "virtual:icons/common/twitch"
import IconYoutube from "virtual:icons/common/youtube"

import { RouteExternal, SocialMedia } from "$lib"

export let footerSocialLinks: IIconLink[] = [
    {
        Icon: IconInstagram,
        title: SocialMedia.INSTAGRAM,
        url: RouteExternal.INSTAGRAM,
    },
    {
        Icon: IconDiscord,
        title: SocialMedia.DISCORD,
        url: RouteExternal.DISCORD,
    },
    {
        Icon: IconYoutube,
        title: SocialMedia.YOUTUBE,
        url: RouteExternal.YOUTUBE,
    },
    {
        Icon: IconTwitch,
        title: SocialMedia.TWITCH,
        url: RouteExternal.TWITCH,
    },
    {
        Icon: IconFacebook,
        title: SocialMedia.FACEBOOK,
        url: RouteExternal.FACEBOOK,
    },
    {
        Icon: IconTelegram,
        title: SocialMedia.TELEGRAM,
        url: RouteExternal.TELEGRAM,
    },
]
