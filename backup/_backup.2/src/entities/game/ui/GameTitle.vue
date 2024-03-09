<script lang="ts" setup>
import type { IGame } from "~/entities/lot"

import { UiTitle } from "~/shared/chat-send-hub-message"

defineProps<{
    game: IGame,
}>()
</script>

<template>
<ui-title :level="4">
    {{ game.name }}
</ui-title>
</template>
