<script context="module" lang="ts">
import type { SwiperOptions } from "swiper/types"

import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper/modules"

let swiperOptions: SwiperOptions = {
    autoplay: {
        delay: 8000,
        disableOnInteraction: true,
    },
    creativeEffect: {
        next: {
            translate: [
                "100%",
                0,
                0,
            ],
        },
        prev: {
            translate: [
                "-100%",
                0,
                0,
            ],
        },
    },
    effect: "creative",
    loop: true,
    modules: [
        Autoplay,
        EffectCreative,
        Navigation,
        Pagination,
    ],
    navigation: true,
    pagination: true,
    slidesPerView: 1,
}
</script>

<script lang="ts">
import type { SwiperContainer } from "swiper/element"

import { onDestroy, onMount } from "svelte"

import { ActionSlide } from "~/entities/layout"

let swiperContainer: SwiperContainer | undefined

onMount(() => {
    if (swiperContainer) {
        Object.assign(swiperContainer, swiperOptions)
        swiperContainer.initialize()
    }
})

onDestroy(() => {
    if (swiperContainer)
        swiperContainer.swiper.destroy()
})
</script>

<swiper-container
    bind:this={swiperContainer}
    class="
        border border-solid border-white/12
        rounded-2xl
        overflow-hidden
    "
    init="false"
>
    <swiper-slide>
        <ActionSlide
            content="Invite friends and get bonuses"
            image="/images/slide/game-slide-1.png"
            title="Unlock the Power of Hassle-Free Trading"
        />
    </swiper-slide>

    <swiper-slide>
        <ActionSlide
            image="/images/slide/game-slide-2.png"
            title="AI CoPilot for Gamers > [Loading______35%]"
        />
    </swiper-slide>

    <swiper-slide>
        <ActionSlide image="/images/slide/game-slide-3.png">
            <svelte:fragment slot="title">
                Trade Smart with <span class="text-success">0% Fees</span> for More Possibilities!
            </svelte:fragment>
        </ActionSlide>
    </swiper-slide>

    <swiper-slide>
        <ActionSlide
            content="Unlock Rewards: Referral Program Launching Soon!"
            image="/images/slide/game-slide-4.png"
            title="Referral Program"
        />
    </swiper-slide>

    <swiper-slide>
        <ActionSlide
            content="Share Your Feedback & Ideas"
            image="/images/slide/game-slide-5.png"
            title="Help Shape Our Platform!"
        />
    </swiper-slide>

    <swiper-slide>
        <ActionSlide
            content="Congratulations to our Users 🏆"
            image="/images/slide/game-slide-6.png"
        >
            <svelte:fragment slot="title">
                <span class="text-warning">Top 3 Champions</span> 1st Season
            </svelte:fragment>
        </ActionSlide>
    </swiper-slide>
</swiper-container>
