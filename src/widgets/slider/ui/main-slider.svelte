<script context="module" lang="ts">
import type { SwiperOptions } from "swiper/types"

let options: SwiperOptions = {
    a11y: {
        nextSlideMessage: "Next slide",
        prevSlideMessage: "Previous slide",
    },

    autoplay: {
        delay: 10_000_00,
        disableOnInteraction: true,
    },

    creativeEffect: {
        next: {
            translate: ["100%", 0, 0],
        },
        prev: {
            translate: ["-100%", 0, 0],
        },
    },

    effect: "creative",

    init: false,

    injectStyles: [`
        :host {
            --swiper-navigation-size: 2.5rem;
            --swiper-navigation-sides-offset: calc((var(--swiper-navigation-size) + 1rem) * -1);
            --swiper-pagination-bullet-border-radius: 0.25rem;
            --swiper-pagination-bullet-inactive-color: #FFFFFF;
            --swiper-pagination-bullet-inactive-opacity: 0.12;
            --swiper-pagination-bullet-size: 0.75rem;
            --swiper-pagination-bullet-width: 1.25rem;
            --swiper-pagination-color: #FFFFFF;
            --swiper-pagination-top: calc(100% + 1.25rem);
        }

        :host .swiper {
            overflow: visible;
        }

        :host .swiper-wrapper {
            margin-bottom: 2.5rem;
            border: 0.0625rem solid rgba(255, 255, 255, 0.12);
            border-radius: 1rem;
            overflow: hidden;
        }

        :host .swiper-button-next,
        :host .swiper-button-prev {
            width: var(--swiper-navigation-size);
            height: var(--swiper-navigation-size);
            background-color: #1B1B1C;
            border: 0.0625rem solid rgba(255, 255, 255, 0.12);
            border-radius: 50%;
            box-shadow: 0 0.375rem 3.5rem 0 rgba(0, 0, 0, 0.40);
        }

        :host .swiper-button-next svg,
        :host .swiper-button-prev svg {
            width: 0.5rem;
            color: rgba(255, 255, 255, 0.70);
        }

        :host .swiper-button-next:hover svg,
        :host .swiper-button-prev:hover svg {
            color: #FFFFFF;
        }

        :host .swiper-pagination-bullet {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
        }

        :host .swiper-pagination-bullet-active {
            --swiper-pagination-bullet-width: 2.5rem;
        }
    `],

    loop: true,

    navigation: true,

    pagination: true,

    slidesPerView: 1,
}
</script>

<script lang="ts">
import { MainSlide } from "~/widgets/slider"

import { useModal, useSession } from "$model"
import { Swiper } from "$ui/data"

let { authenticated } = useSession()

$: slideAction = (
    $authenticated
        ? undefined
        : { handler: useModal("registration").openModal, label: "Try" }
)
</script>

<Swiper
    class="w-full"
    {options}
>
    <MainSlide
        action={slideAction}
        content="Invite friends and get bonuses"
        image="images/slide/main-slide-1.png"
        title="Trade any in-game items in different games"
    />

    <MainSlide
        action={slideAction}
        image="images/slide/main-slide-2.png"
        title="AI CoPilot for Gamers > [Loading______35%]"
    />

    <MainSlide image="images/slide/main-slide-3.png">
        <svelte:fragment slot="title">
            Trade Smart with <span class="text-success">0% Fees</span> for More Possibilities!
        </svelte:fragment>
    </MainSlide>

    <MainSlide
        content="Unlock Rewards: Referral Program Launching Soon!"
        image="images/slide/main-slide-4.png"
        title="Referral Program"
    />

    <MainSlide
        content="Share Your Feedback & Ideas"
        image="images/slide/main-slide-5.png"
        title="Help Shape Our Platform!"
    />

    <MainSlide
        content="Congratulations to our Users 🏆"
        image="images/slide/main-slide-6.png"
    >
        <svelte:fragment slot="title">
            <span class="text-warning">Top 3 Champions</span> 1st Season
        </svelte:fragment>
    </MainSlide>
</Swiper>
