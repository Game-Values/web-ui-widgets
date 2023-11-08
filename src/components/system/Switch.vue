<template>
<button
:class="{ 'bg-green-600': isActive, 'bg-gray-700': !isActive }"
class="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ease-in-out"
@click="toggle">
    <span
    :class="{ 'translate-x-6': isActive, '-translate-x-0': !isActive }"
    class="inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out"/>
</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
    emits: ["update:modelValue"],
    name: "SwitchToggle",
    props: {
        modelValue: {
            default: false,
            type: Boolean,
        },
    },
    setup(props, { emit }) {
        let isActive = ref(props.modelValue)

        let toggle = () => {
            isActive.value = !isActive.value
            // Emitting event so parent can capture the state change
            emit("update:modelValue", isActive.value)
        }

        return {
            isActive,
            toggle,
        }
    },
})
</script>
