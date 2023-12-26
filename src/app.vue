<template>
<widget-provider-setup>
    <widget-provider-auth>
        <widget-provider-config>
            <nuxt-layout>
                <nuxt-page />
            </nuxt-layout>

            <widget-provider-chat />

            <widget-provider-modal />

            <widget-provider-seo />
        </widget-provider-config>
    </widget-provider-auth>
</widget-provider-setup>
</template>
<script setup lang="ts">
</script>
