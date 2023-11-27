<script lang="ts" setup>
defineProps<{
    premium?: boolean
}>()
</script>

<template>
<v-avatar
    :class="{
        'vxp-avatar--premium': premium,
    }"
    size="large"
    src="https://s3-alpha-sig.figma.com/img/d0d7/18a9/4531839a873ba275bdedb974e01dc150?Expires=1701648000&Signature=VVETAJOLRWVmI0G2mXWTWLSWTr5qkfbof6g764puDzKPbdN~qLTqGCcE61nEanhFkW37gy8ZtQcwkNoyClZgIkpcfmAUYhtpCupIIpBIWTacahQUv7FUUjXIFaoBj-KTbWbEG2IWMMAozQphSwLOoOv6vXuT7xk-~KVp2a49f~9aiVkNUPfNUrI551R-9FrZ84baAt-2SLR1jiYCj4GDGNC5T1iGPPTBt4xT0QiaABj~wySnhPnhKQc2k3HjGzA1kB1bPIPDtqjHCgbrmN9u14qJP3Ided8Et~GE-fYa1e2G57vhJ1xGWFEtG-U8Sp3bIFG2wCtYHNgrqmF~YDIIkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
/>
</template>

<style lang="sass" scoped>
.vxp-avatar--premium
    // todo: mv to @apply
    border: theme("spacing.2") solid transparent
    border-radius: 50%

    // todo: mv to sass colors
    background-image: linear-gradient(to bottom, #3DFFF3, #3DFFF3), linear-gradient(to bottom, #3DFFF3, theme("colors.primary"))
    background-clip: padding-box, border-box
    background-origin: padding-box, border-box
</style>
