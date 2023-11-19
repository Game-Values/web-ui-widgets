<script lang="ts" setup>
let orderSlides: string[] = (
    Array(5)
        .fill("https://s3-alpha-sig.figma.com/img/4f90/d409/c4d1eddd96faf1bff43bf3fb79484e4a?Expires=1701648000&Signature=iTEadS71Kw1HZw9W8NiK7DeRF4CSgxVlJ1p39yHQlt5WlFmg~P2XTOYPmPE67OBguLz0KLGwqwY1-rEPHABkTCZJ34tGxzQKy9f~mwzGgsBMtpbwwC4E~1b5DDuuSIAicldvO5tdZnRUGC7Sq48B3NZuJhTl2FrCdHVM4BYs37PqWAEnWDdNenYQNsfyTopqe25UFoOfSj0f6jXw4s-47R0LTd0PNtcglNi0jWZTpglTUxQXtmLZwC-nU6AqjrHtso7pj7M62ZCQIu77irxiNa~hIEHGtw8gtcVUwZ66eFfWNKJUZxpCJpZ88tv5YCueJu0ppV7tcJUGEqHfDvOHNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
)
</script>

<template>
<swiper
    :modules="[
        SwiperNavigation,
    ]"
    :slides-per-view="2.5"
    :space-between="remToNumber(useTheme('spacing.9'))"
    navigation
>
    <swiper-slide
        v-for="(orderSlide, i) in orderSlides"
        :key="i"
    >
        <ui-image
            :radius="remToNumber(useTheme('spacing.3'))"
            :src="orderSlide"
        />
    </swiper-slide>
</swiper>
</template>

<style lang="sass" scoped>
.swiper
    --swiper-navigation-size: theme("spacing.8")

    @apply mx-0
    @apply w-[60rem]

    :deep(.swiper-button-next),
    :deep(.swiper-button-prev)
        @apply h-[var(--swiper-navigation-size)] w-[var(--swiper-navigation-size)]
        @apply bg-grey-light
        @apply text-grey-dark
        @apply border-solid-secondary rounded-full
        @apply transition-colors
        @apply hover:(bg-grey-light)
        @apply after:(text-normal leading-none)

        @screen lt-md
            @apply hidden

.swiper-slide
    @apply w-20.2rem h-10.6rem
    @apply after:transition-colors

    &.swiper-slide-next + &::after
        @apply content-[""]
        @apply absolute top-0 left-0
        @apply w-full h-full
        @apply bg-gradient-to-r from-black/10 from-0% via-black/80 via-30% to-black to-100%
</style>
