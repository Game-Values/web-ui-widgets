<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue"

const breadcrumbsList = [
  { label: "Homepage", link: "/" },
  { label: "Games", link: "/main" },
  { label: "ArcheAge: Unchained", link: "https://www.game-values.com/" }
]

const pages = [
  { name: "Games", href: "/main", current: false },
  { name: "ArcheAge: Unchained", href: "https://www.game-values.com/", current: true }
]

const windowWidth = ref<number | null>(null)

const slotWrapperClasses = computed(() => {
  if (!windowWidth.value) {
    return "slot-content-default"
  }

  if (windowWidth.value >= 1024) {
    return "-mt-48"
  } else if (windowWidth.value >= 768) {
    return "-mt-36"
  } else {
    return "-mt-24"
  }
})

const updateWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth
  }
}

onMounted(() => {
  updateWidth()
  window.addEventListener("resize", updateWidth)
})

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWidth)
  }
})
</script>

<template>
  <div class="bg-grey-dark">
    <!-- Header and Main Content Area -->
    <GamesBgImg class="flex-1">
      <slot name="header">
        <LayoutsHomeNavigation />
        <NavBc :pagesList="pages" />
      </slot>
      <div class="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-transparent">
        <div class="h-50 md:h-40 lg:h-48 xl:h-52 2xl:h-[50px] bg-transparent"></div>
      </div>
    </GamesBgImg>
    <!-- Main slot with negative margin for positioning -->
    <div :class="slotWrapperClasses">
      <slot />
    </div>
    <!-- Footer Area -->
    <slot name="footer">
      <LayoutsDefaultFooter />
    </slot>
  </div>
</template>


<style>
html, body {
  @apply bg-black;
}

.slot-content-default {
  margin-top: -12rem;
}
</style>
