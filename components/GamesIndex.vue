<script setup lang="ts">
import { Game } from "./GameCard.vue"
import { computed } from "#imports"

const { games, headerComponent } = withDefaults(defineProps<{
  games: Game[];
  headerComponent: string;
}>(), {
  headerComponent: "h2"
})

const sortedGames = [...games].sort((a, b) => a.name.localeCompare(b.name))

const groupedGames = computed(() => {
  const groups: Game[][] = []
  let currentGroup: Game[] = []

  sortedGames.forEach((game, i) => {
    if (i === 0 || game.name[0].toUpperCase() !== sortedGames[i - 1].name[0].toUpperCase()) {
      if (currentGroup.length) {
        groups.push(currentGroup)
      }
      currentGroup = [game]
    } else {
      currentGroup.push(game)
    }
  })

  if (currentGroup.length) {
    groups.push(currentGroup)
  }

  return groups
})
</script>

<template>
  <div class="flex flex-col gap-8">
    <section v-for="group in groupedGames" :key="group[0].id">
      <component :is="headerComponent" class="uppercase text-white font-bold text-xl mb-6">
        {{ group[0].name.charAt(0) }}
      </component>
      <div class="grid responsiveColumns gap-x-6 gap-y-8 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
        <GameCard v-for="game in group" :key="game.id" :game="game" />
      </div>
    </section>
  </div>
</template>
