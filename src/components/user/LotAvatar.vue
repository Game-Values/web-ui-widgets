<script lang="ts" setup>
defineProps<{
    online?: boolean
}>()
</script>

<template>
    <v-badge
        :is-dot="online"
        type="success"
    >
        <v-avatar
            size="small"
            src="https://s3-alpha-sig.figma.com/img/d0d7/18a9/4531839a873ba275bdedb974e01dc150?Expires=1701648000&Signature=VVETAJOLRWVmI0G2mXWTWLSWTr5qkfbof6g764puDzKPbdN~qLTqGCcE61nEanhFkW37gy8ZtQcwkNoyClZgIkpcfmAUYhtpCupIIpBIWTacahQUv7FUUjXIFaoBj-KTbWbEG2IWMMAozQphSwLOoOv6vXuT7xk-~KVp2a49f~9aiVkNUPfNUrI551R-9FrZ84baAt-2SLR1jiYCj4GDGNC5T1iGPPTBt4xT0QiaABj~wySnhPnhKQc2k3HjGzA1kB1bPIPDtqjHCgbrmN9u14qJP3Ided8Et~GE-fYa1e2G57vhJ1xGWFEtG-U8Sp3bIFG2wCtYHNgrqmF~YDIIkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
    </v-badge>
</template>

<style lang="sass" scoped>
:deep(.vxp-badge__content)
    top: calc(theme("height.avatar-small") - theme("spacing.2"))
    right: calc(100% - (theme("width.avatar-small") - theme("spacing.1")))

    @apply outline outline-2 outline-grey-dark
</style>
