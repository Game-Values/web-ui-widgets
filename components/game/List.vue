<script setup lang="ts">
import type { GameCard } from "~/components/game/Card.vue"
import { computed } from "#imports"

// Destructuring props
const { games, headerComponent } = withDefaults(defineProps<{
  games: GameCard[];
  headerComponent?: string;
}>(), {
  headerComponent: "h2"
})

// Sort games based on their names
const sortedGames = computed<GameCard[]>(() => {
  return [...games].sort((a, b) => a.name.localeCompare(b.name))
})

const groupByFirstChar = (games: GameCard[]) => {
  return games.reduce((acc, game) => {
    const firstChar = game.name.charAt(0).toUpperCase()
    if (!acc[firstChar]) {
      acc[firstChar] = []
    }
    acc[firstChar].push(game)
    return acc
  }, {} as Record<string, GameCard[]>)
}

// Group games by the first character of their names
const groupedGames = computed(() => groupByFirstChar(sortedGames.value))

// Convert the grouped games object to an array
const groupedGamesArray = computed(() => {
  return Object.entries(groupedGames.value).map(([letter, games]) => ({
    letter,
    games
  }))
})
</script>

<template>
  <div class="flex flex-col gap-8">
    <section v-for="{ letter, games } in groupedGamesArray" :key="letter">
      <component :is="headerComponent" class="uppercase text-white font-bold text-xl mb-6">
        {{ letter }}
      </component>
      <div class="grid responsiveColumns gap-x-6 gap-y-8 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
        <GameCard v-for="game in games"
                  :key="game.link"
                  :name="game.name"
                  :image="game.image"
                  :link="game.link" />
      </div>
    </section>
  </div>
</template>

