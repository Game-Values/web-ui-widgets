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
            center / cover no-repeat url(https://s3-alpha-sig.figma.com/img/476c/cc40/9c8a074422cb22b9cadd4a68b6a61068?Expires=1701043200&Signature=i359iO2So2k0lKMhgLy47-at-QLRzu7H84hnrSTCxVEplr-T5xJ9gpzdyts44HqNuu4wU5iJ3-UVKaazlNkMWqY54xgNgF2xXI1ZcUc3hrpOOVIAZg8xNFE7nMUQq~ag2awaLx6PqjH2JocSPOgG~rcTcGL72DELYYD4ZFuMe70GmHE4X2zSIzTiExFg9J5sBcPlIjlFg1cNoFrSK1S0WDPgdWeYUo1JjdKoG5vp0VNnn2y0962gxD3udY2fcIkJ9cSLMBb4GvWVlgk1Fes0TKDhsE9z9LJ6IbN3u6eIbN~1q8~OMeIMgOBcsip-3vYCtebU8QvXAVYz5IL5-EoB8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4),
            ${useTheme('colors.grey-light')} center / cover no-repeat
        `,
    }"
/>
</template>
