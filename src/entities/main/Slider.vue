<script lang="ts" setup>
import type { ComputedRef } from "vue"

interface MainSlide {
    description?: string
    src: string
    title: string
}

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
                <div class="flex-col gap-y-5 p-main-slider">
                    <!-- todo: typography components -->
                    <ui-typography-title :level="1">
                        <i18n-t :keypath="slide.title" />
                    </ui-typography-title>

                    <ui-typography-text>
                        {{ slide.description }}
                        <i18n-t :keypath="slide.description" />
                    </ui-typography-text>

                    <ui-base-button
                        class="sm:max-w-[18rem]"
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
    --swiper-navigation-size: #{$space-10}
    --swiper-navigation-sides-offset: -#{$space-5}
    --swiper-pagination-bottom: -#{$space-10}
    --swiper-pagination-bullet-border-radius: #{$space-1}
    --swiper-pagination-bullet-inactive-color: #{$color-white}
    --swiper-pagination-bullet-inactive-opacity: 0.12
    --swiper-pagination-bullet-size: #{$space-3}
    --swiper-pagination-bullet-width: #{$space-5}
    --swiper-pagination-color: #{$color-white}
    --swiper-pagination-opacity: 0.9

    @apply overflow-visible

    :deep(.swiper-wrapper)
        @apply rounded-2xl border-solid-secondary
        @apply first:rounded-4 first:overflow-hidden first:overflow-clip

    :deep(.swiper-button-next),
    :deep(.swiper-button-prev)
        @apply h-[var(--swiper-navigation-size)] w-[var(--swiper-navigation-size)]
        @apply bg-grey-dark
        @apply text-grey-light
        @apply border-solid-secondary rounded-full
        @apply transition-colors
        @apply hover:bg-grey-dark
        @apply after:text-normal after:leading-none

        @include md
            @apply hidden

    :deep(.swiper-pagination-bullet)
        @apply transition-all duration-300

    :deep(.swiper-pagination-bullet-active)
        @apply w-10
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
