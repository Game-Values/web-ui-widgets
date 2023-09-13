<script setup lang="ts">
import { Game } from "./GameCard.vue"
import { computed } from "#imports"

const { games, headerComponent = "h2" } = defineProps<{ games: Game[], headerComponent?: string }>()

const groupedGames = computed(() => {
  const sortedGames = games.slice().sort((left, right) => left.name > right.name ? 1 : 0)

  let previousLetter = "not a letter"
  const boundaries = []
  for (let i = 0; i < sortedGames.length; i++) {
    const game = sortedGames[i]
    const letter = game.name.charAt(0).toUpperCase()

    if (letter !== previousLetter) {
      boundaries.push(i)
      previousLetter = letter
    }
  }

  return boundaries.map((boundaryStart, i, boundaries) =>
    sortedGames.slice(boundaryStart, boundaries[i + 1])
  )
})

</script>

<template>
  <div class="flex flex-col gap-8">
    <section v-for="group in groupedGames">
      <template v-if="group.length>0">
        <component :is="headerComponent" class="uppercase text-white font-bold text-xl mb-6">
          {{ group[0].name.charAt(0) }}
        </component>
        <div class="grid responsiveColumns gap-x-6 gap-y-8 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
          <GameCard v-for="game in group" :game="game" />
        </div>
      </template>
    </section>
  </div>
</template>

<style scoped>

</style>
