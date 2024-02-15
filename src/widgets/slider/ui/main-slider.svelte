<script lang="ts">
import type { SwiperContainer } from "swiper/element"

import { onDestroy, onMount } from "svelte"

import { MainSlide } from "~/widgets/slider"

import { useModal, useSession } from "$model"

let { authenticated } = useSession()

let swiperLazySlide: boolean = true

let swiperContainer: SwiperContainer

$: slideAction = (
    $authenticated
        ? undefined
        : { handler: useModal("registration").openModal, label: "Try" }
)

onMount((): void => {
    swiperLazySlide = false
    swiperContainer.initialize()
})

onDestroy((): void => swiperContainer.swiper.destroy())
</script>

<swiper-container
    bind:this={swiperContainer}
    a11y={true}
    autoplay={
        {
            delay: 10000,
            disableOnInteraction: true,
        }
    }
    creativeEffect={
        {
            next: {
                translate: ["100%", 0, 0],
            },
            prev: {
                translate: ["-100%", 0, 0],
            },
        }
    }
    effect="creative"
    init={false}
    injectStylesUrls={
        ["/src/widgets/slider/styles/main-slider.css"]
    }
    loop={true}
    navigation={true}
    pagination={true}
    slidesPerView={1}
>
    <swiper-slide lazy={swiperLazySlide}>
        <MainSlide
            action={slideAction}
            content="Invite friends and get bonuses"
            image="images/slide/main-slide-1.png"
            title="Trade any in-game items in different games"
        />
    </swiper-slide>

    <swiper-slide lazy={swiperLazySlide}>
        <MainSlide
            action={slideAction}
            image="images/slide/main-slide-2.png"
            title="AI CoPilot for Gamers > [Loading______35%]"
        />
    </swiper-slide>

    <swiper-slide lazy={swiperLazySlide}>
        <MainSlide image="images/slide/main-slide-3.png">
            <svelte:fragment slot="title">
                Trade Smart with <span class="text-success">0% Fees</span> for More Possibilities!
            </svelte:fragment>
        </MainSlide>
    </swiper-slide>

    <swiper-slide lazy={swiperLazySlide}>
        <MainSlide
            content="Unlock Rewards: Referral Program Launching Soon!"
            image="images/slide/main-slide-4.png"
            title="Referral Program"
        />
    </swiper-slide>

    <swiper-slide lazy={swiperLazySlide}>
        <MainSlide
            content="Share Your Feedback & Ideas"
            image="images/slide/main-slide-5.png"
            title="Help Shape Our Platform!"
        />
    </swiper-slide>

    <swiper-slide lazy={swiperLazySlide}>
        <MainSlide
            content="Congratulations to our Users 🏆"
            image="images/slide/main-slide-6.png"
        >
            <svelte:fragment slot="title">
                <span class="text-warning">Top 3 Champions</span> 1st Season
            </svelte:fragment>
        </MainSlide>
    </swiper-slide>
</swiper-container>
