<template>
<div class="w-[717px] h-20 justify-start items-start gap-2 inline-flex">
    <div
    :class="[
        button.bgClass,
        'pl-3.5 pr-[9px] py-[7px] rounded-[29px] border border-white border-opacity-10 justify-center items-center gap-1.5 flex'
    ]"
    :key="button.id"
    v-for="button in buttons">
        <div class="text-white text-opacity-70 text-sm font-normal font-['Montserrat'] leading-tight">
            {{ button.label }}
        </div>
        <div class="px-[7px] bg-white bg-opacity-10 rounded-[38px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div class="text-white text-opacity-70 text-xs font-normal font-['Montserrat'] leading-[18px]">
                {{ button.count }}
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    props: {
        buttons: {
            required: true,
            type: Array,
        },
    },
})
</script>
