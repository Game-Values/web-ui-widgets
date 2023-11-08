<script setup lang="ts">
import { SliderSlide } from "#components"
import { computed } from "#imports"
import { VNode } from "vue"

const modules = [SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperA11y]
const autoplaySettings = {
    delay: 8000,
    disableOnInteraction: true,
}
const creativeEffectSettings = {
    next: {
        translate: ["100%", 0, 0],
    },
    prev: {
        translate: ["-100%", 0, 0],
    },
}

const slots = useSlots()

function isSlide(node: VNode) {
    return node.type === SliderSlide
}

const slides = computed(() => slots.default?.().filter(isSlide) ?? [])
</script>

<template>
<div class="pagination-spacer">
    <swiper
        :a11y="true"
        :autoplay="autoplaySettings"
        :creative-effect="creativeEffectSettings"
        :effect="'creative'"
        :loop="true"
        :modules="modules"
        :navigation="true"
        :pagination="true"
        :slides-per-view="1"
        :space-between="20"
        class="slider-container"
    >
        <swiper-slide v-for="(slide, idx) in slides" :key="idx">
            <component :is="slide" />
        </swiper-slide>
    </swiper>
</div>
</template>

<style scoped>
.pagination-spacer {
  padding-bottom: 4.8rem;
  --swiper-pagination-bottom: -4rem;
  --swiper-pagination-bullet-border-radius: 4px;
  --swiper-pagination-bullet-size: 12px;
  --swiper-pagination-bullet-width: 20px;
  --swiper-pagination-color: #fff;
  --swiper-pagination-opacity: .9;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-inactive-opacity: .12;

  :deep(.swiper-pagination-bullet) {
    transition: all .3s ease-in;
  }

  :deep(.swiper-pagination-bullet-active) {
    width: 44px;
  }
}

.slider-container {
  --swiper-navigation-size: 44px;
  --swiper-navigation-sides-offset: -22px;

  overflow: visible;

  :deep(.swiper-wrapper:first-child) {
    overflow: hidden;
    overflow: clip;
    border-radius: 16px;
  }

  :deep(.swiper-button-next), :deep(.swiper-button-prev) {
    height: var(--swiper-navigation-size);
    width: var(--swiper-navigation-size);
    background: #1B1B1C;
    color: #FFFFFFB2;
    border: 1px solid #FFFFFF1F;
    border-radius: 100%;

    transition: background .1s ease-in;

    &:hover {
      background: #303031;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  :deep(.swiper-button-next)::after, :deep(.swiper-button-prev)::after {
    font-size: 15px;
  }
}
</style>
