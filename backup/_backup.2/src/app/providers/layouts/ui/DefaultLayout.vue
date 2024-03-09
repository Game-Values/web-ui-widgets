<script lang="ts" setup>
import { HeaderWidget } from "~/widgets/header"
import { FooterWidget } from "~/widgets/footer"
</script>

<template>
<v-layout :full-height="true">
    <header-widget />

    <v-main>
        <slot />
    </v-main>

    <footer-widget />
</v-layout>
</template>
