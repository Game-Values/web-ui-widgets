<script lang="ts" setup>
import { SocialType } from "~/enums"

let socialLinks: Record<SocialType, string> = {
    [SocialType.INSTAGRAM]: "https://www.instagram.com/gamevalues/",
    [SocialType.DISCORD]: "https://discord.gg/dTzhKUSb3y",
    [SocialType.YOUTUBE]: "https://www.youtube.com/channel/UCLVw1bjWVYUjRW8oBFpwx8Q",
    [SocialType.TWITCH]: "https://www.twitch.tv/gamevalues",
    [SocialType.FACEBOOK]: "https://facebook.com/GameValues",
    [SocialType.TELEGRAM]: "https://t.me/gamevalues_news",
}
</script>

<template>
<v-space
    align="center"
    size="large"
>
    <template
        v-for="(url, socialType) in socialLinks"
        :key="socialType"
    >
        <ui-link
            :href="url"
            target="_blank"
        >
            <ui-icon
                :custom="useToLower(socialType)"
                size="40"
            />
        </ui-link>
    </template>
</v-space>
</template>
