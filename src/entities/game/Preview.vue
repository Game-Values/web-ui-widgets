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
            center / cover no-repeat url(https://raw.githubusercontent.com/Game-Values/web-ui-widgets/master/src/public/images/dota2.png),
            ${useTheme('colors.grey-light')} center / cover no-repeat
        `,
    }"
/>
</template>
