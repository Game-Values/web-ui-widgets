<script lang="ts" setup>
import type { H3Error } from "h3"

interface Props {
    error: H3Error
}

defineProps<Props>()
</script>

<template>
<widget-wrapper-app>
    <nuxt-layout>
        <div class="flex flex-col gap-md">

            <h2>
                todo: errors
            </h2>

            <p>
                status: {{ error.statusCode }}
            </p>

            <pre v-html="error.message" />

            <pre v-html="error.stack" />
        </div>
    </nuxt-layout>
</widget-wrapper-app>
</template>
