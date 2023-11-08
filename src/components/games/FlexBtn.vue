<template>
<div :class="['flex-button', bgColor]">
    <div class="label">
        {{ label }}
    </div>
    <div class="count-container">
        <div class="count">
            {{ count }}
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    props: {
        bgColor: {
            default: "",
            type: String,
        },
        count: {
            default: 0,
            type: Number,
        },
        label: {
            required: true,
            type: String,
        },
    },
})
</script>
