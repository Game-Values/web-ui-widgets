<script setup lang="ts">

import { computed } from "#imports"
import { VNode } from "@vue/runtime-core"
import { SliderSlide } from "#components"

const modules = [SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperA11y]
const autoplaySettings = {
  delay: 8000,
  disableOnInteraction: true
}
const creativeEffectSettings = {
  prev: {
    translate: ["-100%", 0, 0]
  },
  next: {
    translate: ["100%", 0, 0]
  }
}

const slots = useSlots()

function isSlide(node: VNode) {
  return node.type === SliderSlide
}

const slides = computed(() => slots.default?.().filter(isSlide) ?? [])
</script>

<template>
  <div class="pagination-spacer">
    <Swiper
      :space-between="20"
      class="slider-container"
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :a11y="true"
      :effect="'creative'"
      :pagination="true"
      :autoplay="autoplaySettings"
      :navigation="true"
      :creative-effect="creativeEffectSettings"
    >
      <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
        <component :is="slide" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>


<style scoped>
.pagination-spacer {
  padding-bottom: 3rem;
  --swiper-pagination-bottom: -2.5rem;
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
