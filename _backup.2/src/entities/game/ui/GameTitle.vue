<script lang="ts" setup>
import type { IGame } from "~/entities/game"

import { UiTitle } from "~/shared/ui"

defineProps<{
    game: IGame,
}>()
</script>

<template>
<ui-title :level="4">
    {{ game.name }}
</ui-title>
</template>
