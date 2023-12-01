<script lang="ts" setup>
import type { Callable } from "~/types"
import type { ComputedRef } from "vue"

import { Breakpoint } from "~/enums"

let breakpoint = useBreakpoint()

let { registrationModal } = useModals()
let { storeClient } = useClients()

let { authenticated } = storeToRefs(storeClient.meStore)

let sliderHeight: ComputedRef<number> = computed((): number => (
    useGet({
        [Breakpoint.LG]: 352,
        [Breakpoint.MD]: 352,
        [Breakpoint.SM]: 430,
        [Breakpoint.XS]: 540,
    }, getRef(breakpoint))
))

function resolveAction<T = {
    handler: Callable
    label: string
}>(action: T): T | undefined {
    return getRef(authenticated) ? undefined : action
}
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
    :style="`
        --swiper-height: ${pxToRem(sliderHeight)};
        height: var(--swiper-height);
    `"
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
    <lazy-client-only>
        <swiper-slide>
            <slide-main
                :action="resolveAction({
                    label: 'Try',
                    handler: (): void => registrationModal.show(),
                })"
                src="/images/main-slide-1.png"
                text="Invite friends and get bonuses"
                title="Unlock the Power of Hassle-Free Trading"
            />
        </swiper-slide>

        <swiper-slide>
            <slide-main
                src="/images/main-slide-6.png"
                text="Congratulations to our Users 🏆"
            >
                <template #title>
                    <v-space vertical>
                        <v-text type="warning">
                            Top 3 Champions
                        </v-text>

                        <v-text>
                            1st Season
                        </v-text>
                    </v-space>
                </template>
            </slide-main>
        </swiper-slide>
    </lazy-client-only>
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
    --swiper-pagination-top: calc(var(--swiper-height) + theme("spacing.10"))

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
