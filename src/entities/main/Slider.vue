<script lang="ts" setup>
import type { Callable } from "~/types"

let { registrationModal } = useModals()
let { storeClient } = useClients()

let { authenticated } = storeToRefs(storeClient.userMeStore)

let sliderAction = computed((): (
    {
        handler: Callable
        label: string
    } | undefined
) => {
    if (getRef(authenticated))
        return undefined

    return {
        handler: (): void => registrationModal.show(),
        label: "Try",
    }
})
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
    class="
        md:(mb-4rem)
        xs:(mb-6rem)
    "
    effect="creative"
    loop
    navigation
    pagination
>
    <swiper-slide>
        <slide-main
            :action="sliderAction"
            src="/images/main-slide-1.png"
            text="Invite friends and get bonuses"
            title="Unlock the Power of Hassle-Free Trading"
        />
    </swiper-slide>

    <swiper-slide>
        <lazy-client-only>
            <slide-main
                :action="sliderAction"
                src="/images/main-slide-2.png"
                title="AI CoPilot for Gamers > [Loading______35%]"
            />
        </lazy-client-only>
    </swiper-slide>

    <swiper-slide>
        <lazy-client-only>
            <slide-main src="/images/main-slide-3.png">
                <template #title>
                    <v-highlight
                        :key-words="[
                            '0% Fees',
                        ]"
                        content="Trade Smart with 0% Fees for More Possibilities!"
                    >
                        <template #light="{ text }">
                            <v-text type="success">
                                {{ text }}
                            </v-text>
                        </template>
                    </v-highlight>
                </template>
            </slide-main>
        </lazy-client-only>
    </swiper-slide>

    <swiper-slide>
        <lazy-client-only>
            <slide-main
                src="/images/main-slide-4.png"
                text="Unlock Rewards: Referral Program Launching Soon!"
                title="Referral Program"
            />
        </lazy-client-only>
    </swiper-slide>

    <swiper-slide>
        <lazy-client-only>
            <slide-main
                src="/images/main-slide-5.png"
                text="Share Your Feedback & Ideas"
                title="Help Shape Our Platform!"
            />
        </lazy-client-only>
    </swiper-slide>

    <swiper-slide>
        <lazy-client-only>
            <slide-main
                src="/images/main-slide-6.png"
                text="Congratulations to our Users 🏆"
            >
                <template #title>
                    <v-highlight
                        :key-words="[
                            'Top 3 Champions',
                        ]"
                        content="Top 3 Champions 1st Season"
                    />
                </template>
            </slide-main>
        </lazy-client-only>
    </swiper-slide>
</swiper>
</template>

<style lang="sass" scoped>
.swiper
    --swiper-navigation-size: theme("spacing.14")
    --swiper-navigation-sides-offset: calc(var(--swiper-navigation-size) / 2 * -1)
    --swiper-pagination-bullet-border-radius: theme("width.1")
    --swiper-pagination-bullet-inactive-color: theme("colors.white")
    --swiper-pagination-bullet-inactive-opacity: 0.12
    --swiper-pagination-bullet-size: theme("width.5")
    --swiper-pagination-bullet-width: theme("width.8")
    --swiper-pagination-color: theme("colors.white")
    --swiper-pagination-top: calc(100% + theme("spacing.10"))

    @apply w-full
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
        @apply hover:(bg-grey-dark)
        @apply after:(text-normal leading-none)

        @screen lt-md
            @apply hidden

    :deep(.swiper-pagination-bullet)
        @apply transition-all duration-300

    :deep(.swiper-pagination-bullet-active)
        @apply w-14
</style>
