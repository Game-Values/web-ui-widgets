<script lang="ts" setup>
let isMobileMenuActive = ref(false)
</script>

<template>
<lazy-client-only>
    <ui-base-button
        class="lg:(hidden!)"
        size="small"
        text
        @click="isMobileMenuActive = true"
    >
        <ui-base-icon size="30">
            <i class="i-heroicons:bars-3" />
        </ui-base-icon>
    </ui-base-button>

    <header-mobile-menu-drawer v-model="isMobileMenuActive" />
</lazy-client-only>
</template>

