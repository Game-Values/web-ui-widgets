<script lang="ts" setup>
import type { UnwrapRef } from "vue"
import type { TimelineItemProps } from "@/components/data/Timeline/TimelineItem.vue"
import type { TimelineState } from "@/components/data/Timeline/state"

import { TIMELINE_STATE } from "@/components/data/Timeline/consts"
import { timelineState } from "@/components/data/Timeline/state"

export interface TimelineProps {
  modelValue?: number
}

export interface TimelineEmits {
  (e: "update:model-value", modelValue: number): void
}

export interface TimelineSlots {
  default: (props?: TimelineItemProps) => any
}

let props = withDefaults(defineProps<TimelineProps>(), {
  modelValue: 0,
})

defineEmits<TimelineEmits>()

defineSlots<TimelineSlots>()

let state: UnwrapRef<TimelineState> = timelineState({
  step: props.modelValue,
})

watchEffect(() => {
  state.step = props.modelValue
})

provide(TIMELINE_STATE, state)
</script>

<template>
<div
  :style="{
    height: `${state.maxHeight}px`,
  }"
>
  <ol
    class="
      w-full
      inline-flex
      flex-row

      min-[320px]:pr-[66px]

      min-[640px]:pr-[180px]

      min-[960px]:pr-[221px]

      min-[480px]:pr-[101px]
    "
  >
    <slot/>
  </ol>
</div>
</template>
