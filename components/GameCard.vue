<script setup lang="ts">
import OutlineHeartIcon from "@heroicons/vue/24/outline/esm/HeartIcon"
import SolidHeartIcon from "@heroicons/vue/24/solid/esm/HeartIcon"


interface Game {
  link: string;
  image: string;
  name: string;
}

interface EmitDefinition {
  (event: "update:liked", state: boolean): void;
}

const localePath = useLocalePath()

const { game, liked = false, stockAmount } = defineProps<{
  game: Game;
  liked?: boolean;
  stockAmount?: string;
}>()

const emit = defineEmits<EmitDefinition>()
const currentIcon = computed(() => (liked ? SolidHeartIcon : OutlineHeartIcon))
</script>

<template>
  <article class="relative cardContainer" :class="{liked}">
    <div class="imageWrapper relative w-full block p-[1px]">
      <span v-if="stockAmount" class="absolute right-4 top-4 px-2 text-white rounded-full bg-white/25">
        {{ stockAmount }}
      </span>
      <img :src="game.image" alt="" role="presentation" class="w-full h-full">
    </div>

    <div class="buttonsContainer grid items-start justify-between max-w-full mt-4 gap-2 whitespace-normal">
      <nuxt-link class="text-white font-bold linkContainer break-words" :to="localePath(game.link)">
        {{ game.name }}
      </nuxt-link>
      <button class="likeButton" @click="emit('update:liked', !liked)" :aria-pressed="String(liked)">
        <span class="sr-only">{{ $t("comp.GameCard.like") }}</span>
        <component :is="currentIcon" class="h-6 w-6 text-blue-500 hover:text-blue-600" />
      </button>
    </div>
  </article>
</template>

<style scoped>


.linkContainer::before {
  content: ' ';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.imageWrapper {
  aspect-ratio: 190 / 136;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
}

.imageWrapper::before {
  content: "";
  pointer-events: none;
  user-select: none;
  position: absolute;
  padding: 1px;
  inset: 0;
  border-radius: 12px;
  background: linear-gradient(#FFFFFF26, #FFFFFF0A);
  /*noinspection CssInvalidPropertyValue*/
  mask-mode: match-source, match-source;
  mask-repeat: repeat, repeat;
  mask-clip: content-box, border-box;
  mask-origin: content-box, border-box;
  mask-position: 0 0, 0 0;
  mask-size: auto, auto;
  mask-image: linear-gradient(black, black), linear-gradient(black, black);
  mask-composite: exclude;
}

.cardContainer:hover .imageWrapper {
  background: rgba(255, 255, 255, 0.1);
}

.cardContainer.liked .imageWrapper {
  background-image: linear-gradient(#3478F6, #5991FF);
}

.imageWrapper img {
  object-fit: contain;
}

.cardContainer.liked:hover .imageWrapper {
  background: #3478F6;
}

.likeButton {
  z-index: 2;
}

.buttonsContainer {
  grid-template-columns: auto min-content;
}
</style>
