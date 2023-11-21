<script lang="ts" setup>
// todo: from api

// todo: props are correct (?)
withDefaults(defineProps<{
    backgroundPosition?: string
}>(), {
    backgroundPosition: "center",
})
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
            url(https://raw.githubusercontent.com/Game-Values/web-ui-widgets/master/src/public/images/apex.jpg) ${backgroundPosition} / cover no-repeat,
            ${useTheme('colors.grey-light')} center / cover no-repeat
        `,
    }"
/>
</template>
