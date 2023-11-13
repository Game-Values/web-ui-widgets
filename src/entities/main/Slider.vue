<script lang="ts" setup>
import type { ComputedRef } from "vue"

interface MainSlide {
    description?: string
    src: string
    title: string
}

useI18n()

let mainSlides: ComputedRef<MainSlide[]> = computed((): MainSlide[] => (
    Array(5)
        .fill({
            description: "Invite friends and get bonuses",
            src: "~/assets/icons/logo.svg",
            title: "Trade any in-game items in different games",
        })
))
</script>

<template>
<swiper
    :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
    }"
    :creative-effect="{
        next: {
            translate: ['100%', 0, 0],
        },
        prev: {
            translate: ['-100%', 0, 0],
        },
    }"
    :modules="[
        SwiperA11y,
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperNavigation,
        SwiperPagination,
    ]"
    :slides-per-view="1"
    a11y
    effect="creative"
    loop
    navigation
    pagination
>
    <swiper-slide
        v-for="slide in mainSlides"
        :key="slide.src"
    >
        <ui-layout-row class="h-[35rem]">
            <ui-layout-col
                :span="12"
                :use-flex="{
                    align: 'center',
                }"
            >
                <div class="flex-col gap-y-8 p-18">
                    <!-- todo: typography components -->
                    <ui-typography-title :level="1">
                        <i18n-t :keypath="slide.title" />
                    </ui-typography-title>

                    <ui-typography-text>
                        <i18n-t :keypath="slide.description" />
                    </ui-typography-text>

                    <ui-base-button
                        class="sm:max-w-[18rem] height-[50rem]"
                        type="primary"
                    >
                        <i18n-t keypath="Try" />
                    </ui-base-button>
                </div>
            </ui-layout-col>

            <ui-layout-col :span="12">
                <!-- image (?) -->
            </ui-layout-col>
        </ui-layout-row>
    </swiper-slide>
</swiper>
</template>

<style lang="sass" scoped>
.swiper
    --swiper-navigation-size: 4.2rem
    --swiper-navigation-sides-offset: calc(var(--swiper-navigation-size) / 2 * -1)
    --swiper-pagination-bullet-border-radius: theme("width.1")
    --swiper-pagination-bullet-inactive-color: theme("colors.white")
    --swiper-pagination-bullet-inactive-opacity: 0.12
    --swiper-pagination-bullet-size: theme("width.5")
    --swiper-pagination-bullet-width: theme("width.8")
    --swiper-pagination-color: theme("colors.white")
    --swiper-pagination-top: calc(100% - theme("spacing.12"))

    @apply overflow-visible

    :deep(.swiper-wrapper)
        @apply rounded-2xl border-solid-secondary
        @apply first:(rounded-4 overflow-hidden overflow-clip)

    :deep(.swiper-button-next),
    :deep(.swiper-button-prev)
        @apply h-[var(--swiper-navigation-size)] w-[var(--swiper-navigation-size)]
        @apply bg-grey-dark
        @apply text-grey-light
        @apply border-solid-secondary rounded-full
        @apply transition-colors
        @apply hidden
        @apply hover:(bg-grey-dark)
        @apply after:(text-normal leading-none)

        @screen md
            @apply flex

    :deep(.swiper-pagination-bullet)
        @apply transition-all duration-300

    :deep(.swiper-pagination-bullet-active)
        @apply w-14
</style>

<i18n lang="yaml">
de:
    Try: Versuchen
    Trade any in-game items in different games: Tauschen Sie beliebige In-Game-Gegenstände in verschiedenen Spielen
    Invite friends and get bonuses: Freunde einladen und Boni erhalten
en:
    Try: Try
    Trade any in-game items in different games: Trade any in-game items in different games
    Invite friends and get bonuses: Invite friends and get bonuses
</i18n>
