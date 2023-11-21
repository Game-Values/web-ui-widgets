<script lang="ts" setup>
import type { H3Error } from "h3"

interface Props {
    error: H3Error
}

defineProps<Props>()
</script>

<template>
<widget-wrapper-app>
    <div class="flex flex-col gap-md">

        <v-title :level="2">
            todo: errors
        </v-title>

        <v-text>
            status: {{ error.statusCode }}
        </v-text>

        <pre v-html="error.message" />

        <pre v-html="error.stack" />
    </div>
</widget-wrapper-app>
</template>
