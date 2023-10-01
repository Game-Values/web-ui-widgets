<script setup lang="ts">
import {
  HeartIcon as OutlineHeartIcon,
  ArrowPathIcon,
  NoSymbolIcon,
} from "@heroicons/vue/24/outline/esm"

import SolidHeartIcon from "@heroicons/vue/24/solid/esm/HeartIcon"

import { ref, computed } from "#imports"
import { GameAPI } from "~/api"

export interface GameCard {
  link: string;
  image: string;
  name: string;
  liked?: boolean;
  itemsPosted?: string;
}

interface EmitDefinition {
  (event: "update:liked", state: boolean): void;
}
const SIMULATION_DELAY = 1000;

const gameCard = defineProps<GameCard>()
const emit = defineEmits<EmitDefinition>()

const isLoading = ref(false)
const errorFeedback = ref("")

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const showErrorFeedback = () => {
  errorFeedback.value = "Failed to like the game. Please try again later.";
  setTimeout(() => errorFeedback.value = "", 5000);
};

const processLikeToggle = async () => {
  const { data: response } = await GameAPI.likeToggle(gameCard.link);
  if (!response.value) {
    emit('update:liked', !gameCard.liked);
  }
}

const toggleLike = async () => {
  isLoading.value = true;
  let response = { value: null };

  try {
    await sleep(SIMULATION_DELAY);
    await processLikeToggle();
  } catch (error) {
    showErrorFeedback();
  } finally {
    isLoading.value = false;
  }

  if (response.value === null) {
    showErrorFeedback();
  }
};

const currentIcon = computed(() => {
  if (isLoading.value) return ArrowPathIcon;
  if (errorFeedback.value) return NoSymbolIcon;
  return gameCard.liked ? SolidHeartIcon : OutlineHeartIcon;
});

const gameImageUrl = computed(() => `/web-ui-widgets/i/g/${gameCard.image}.png`)

const svgClasses = computed(() => {
  if (errorFeedback.value) {
    return "h-6 w-6 text-gray-500 hover:text-gray-600 focus:ring-2 focus:ring-gray-500";
  } else {
    return "h-6 w-6 text-blue-500 hover:text-blue-600 focus:ring-2 focus:ring-blue-500";
  }
});

const mousePos = ref({ x: 0, y: 0 });
const lightSpotVisible = ref(true);
const updateMousePosition = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;

  if (target) {
    const rect = target.getBoundingClientRect();
    mousePos.value = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
};
</script>

<template>
  <article class="relative cardContainer"
           :class="{ 'liked': gameCard.liked  }"
           @mousemove="updateMousePosition">

    <div class="imageWrapper relative w-full block p-[1px] overflow-hidden rounded-md shadow-sm"
         @mouseenter="lightSpotVisible = true"
         @mouseleave="lightSpotVisible = false">
      <div class="light-spot" :style="{ top: mousePos.y + 'px', left: mousePos.x + 'px' }"></div>
      <span v-if="gameCard.itemsPosted" class="absolute right-4 top-4 px-2 text-white rounded-full bg-white/25">
        {{ gameCard.itemsPosted }}
      </span>
      <img :src="gameImageUrl" :alt="gameCard.name" role="presentation" class="w-full h-full">
    </div>
    <div class="buttonsContainer grid items-start justify-between max-w-full mt-4 gap-2 whitespace-normal">
      <a href="https://www.game-values.com/" class="text-white font-bold linkContainer break-words">
        {{ gameCard.name }}
      </a>
      <button class="likeButton" @click="toggleLike"
              :disabled="errorFeedback.value"
              :aria-pressed="String(gameCard.liked)" aria-label="Like Game">
        <component
          :is="currentIcon"
          :class="svgClasses"
        />
      </button>
    </div>
    <p v-if="errorFeedback" class="text-red-500 mt-2">{{ errorFeedback }}</p>
  </article>
</template>

<style scoped>
/* Shared styles for card container */
.cardContainer {
  max-width: 500px;
}

.cardContainer:hover .imageWrapper {
  background: rgba(255, 255, 255, 0.1);
}

.cardContainer.liked:hover .imageWrapper {
  background: #3478F6;
}

/* Shared styles for image wrapper */
.imageWrapper {
  aspect-ratio: 190 / 136;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
}

.cardContainer.liked .imageWrapper {
  background-image: linear-gradient(#3478F6, #5991FF);
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
}

/* Styles for images inside the wrapper */
.imageWrapper img {
  object-fit: contain;
}

/* Styles for button and link containers */
.buttonsContainer {
  grid-template-columns: auto min-content;
}

.likeButton {
  z-index: 2;
}

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

.light-spot {
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: radial-gradient(rgba(200, 200, 200, 0.1) 70%, transparent);
  box-shadow: 0 0 35px 15px rgba(255, 255, 255, 0.1);
  pointer-events: none;
  transform: translate(-50%, -50%);
  //transition: width 0.2s ease, height 0.2s ease;
  opacity: 0; /* make it initially invisible */
  transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
}

.cardContainer:hover .light-spot {
  width: 3.125rem;
  height: 3.125rem;
  opacity: 1;
}
</style>
