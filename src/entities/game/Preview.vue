<script lang="ts" setup>
// todo: from api
</script>

<template>
<div
    :class="`
        lg:(h-game-preview-lg)
        md:(h-game-preview-md)
        sm:(h-game-preview-sm)
        xs:(h-game-preview-xs)
    `"
    :style="{
        background: `
            linear-gradient(180deg, ${useTheme('colors.black')} 0%, ${useTheme('colors.secondary')} 100%),
            center / cover no-repeat url(/images/game-cover-2.png),
            ${useTheme('colors.grey-light')} center / cover no-repeat
        `,
    }"
/>
</template>
