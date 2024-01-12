<swiper-container
    bind:this={swiperContainer}
    init="false"
    class="
        border border-solid border-white/12
        rounded-2xl
        overflow-hidden
    "
>
    <swiper-slide>
        <MainSlide
            content="Invite friends and get bonuses"
            src="/images/slides/main-slide-1.png"
            title="Unlock the Power of Hassle-Free Trading"
        />
    </swiper-slide>

    <swiper-slide>
        <MainSlide
            src="/images/slides/main-slide-2.png"
            title="AI CoPilot for Gamers > [Loading______35%]"
        />
    </swiper-slide>

    <swiper-slide>
        <MainSlide src="/images/slides/main-slide-3.png">
            <svelte:fragment slot="title">
                Trade Smart with <span class="text-success">0% Fees</span> for More Possibilities!
            </svelte:fragment>
        </MainSlide>
    </swiper-slide>

    <swiper-slide>
        <MainSlide
            content="Unlock Rewards: Referral Program Launching Soon!"
            src="/images/slides/main-slide-4.png"
            title="Referral Program"
        />
    </swiper-slide>

    <swiper-slide>
        <MainSlide
            content="Share Your Feedback & Ideas"
            src="/images/slides/main-slide-5.png"
            title="Help Shape Our Platform!"
        />
    </swiper-slide>

    <swiper-slide>
        <MainSlide
            content="Congratulations to our Users 🏆"
            src="/images/slides/main-slide-6.png"
        >
            <svelte:fragment slot="title">
                <span class="text-warning">Top 3 Champions</span> 1st Season
            </svelte:fragment>
        </MainSlide>
    </swiper-slide>
</swiper-container>

<script lang="ts">
import type { SwiperContainer } from "swiper/element"
import type { SwiperOptions } from "swiper/types"

import { assign } from "lodash-es"
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper/modules"
import { onMount } from "svelte"

import { MainSlide } from "~/entities/slide"

let swiperContainer: SwiperContainer

let swiperOptions: SwiperOptions = {
    autoplay: {
        delay: 800000, // 8000
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

onMount(() => {
    assign(swiperContainer, swiperOptions)
    swiperContainer.initialize()
})
</script>
