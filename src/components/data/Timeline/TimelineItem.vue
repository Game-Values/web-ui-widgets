<script lang="ts" setup>
import type { TimelineState, TimelineItemState } from "@/components/data/Timeline/state"
import type { ComputedRef, Ref, UnwrapRef } from "vue"

import { TIMELINE_COLOR, TIMELINE_STATE } from "@/components/data/Timeline/consts"
import { timelineItemState } from "@/components/data/Timeline/state"

export interface TimelineItemProps {
  activeColor?: TIMELINE_COLOR | string
  activeLineColor?: TIMELINE_COLOR | string
  activeTextColor?: TIMELINE_COLOR | string
  inactiveColor?: TIMELINE_COLOR | string
  inactiveLineColor?: TIMELINE_COLOR | string
  inactiveTextColor?: TIMELINE_COLOR | string
  label?: string
  circleSize?: number
  lineSize?: number
}

export interface TimelineItemSlots {
  default: () => any
  label: () => any
  line: () => any
}

const TEXT_OFFSET: number = 16

let props: TimelineItemProps = withDefaults(defineProps<TimelineItemProps>(), {
  activeColor: TIMELINE_COLOR.ACTIVE,
  activeLineColor: TIMELINE_COLOR.ACTIVE_LINE,
  activeTextColor: TIMELINE_COLOR.ACTIVE_TEXT,
  inactiveColor: TIMELINE_COLOR.INACTIVE,
  inactiveLineColor: TIMELINE_COLOR.INACTIVE_LINE,
  inactiveTextColor: TIMELINE_COLOR.INACTIVE_TEXT,
  label: "",
  circleSize: 38,
  lineSize: 2,
})

defineSlots<TimelineItemSlots>()

let timelineState: UnwrapRef<TimelineState> | undefined = inject(TIMELINE_STATE)

let state: UnwrapRef<TimelineItemState> = timelineItemState({
  label: props.label,
})

let isFinished: ComputedRef<boolean> = computed(() => state.index < timelineState?.step)
let isProgress: ComputedRef<boolean> = computed(() => state.index === timelineState?.step)
let isLast: ComputedRef<boolean> = computed(() => state.index + 1 === state.total)

let circleColor: ComputedRef<TIMELINE_COLOR | string> = computed(() => (
  isFinished.value || isProgress.value
    ? props.activeColor!
    : props.inactiveColor!
))

let lineColor: ComputedRef<TIMELINE_COLOR | string> = computed(() => (
  isFinished.value
    ? props.activeColor!
    : props.inactiveColor!
))

let textColor: ComputedRef<TIMELINE_COLOR | string> = computed(() => (
  isFinished.value || isProgress.value
    ? props.activeTextColor!
    : props.inactiveTextColor!
))

let content: Ref<HTMLLIElement | undefined> = ref<HTMLLIElement>()

timelineState?.increaseItem(state)

onMounted((): void => updateHeight())
onUpdated((): void => updateHeight())
onBeforeUnmount((): void => timelineState?.decreaseItem(state))

function updateHeight(): void {
  requestAnimationFrame((): void => {
    if (content.value instanceof HTMLLIElement)
      state.height = content.value.scrollHeight + props.circleSize + TEXT_OFFSET
  })
}
</script>

<template>
<li
  :class="[
    {
      [`w-[${circleSize}px]`]: isLast,

      'flex-1': !isLast,
    }
  ]"
  class="
    relative
    flex
    items-start
  "
>
  <ul
    :class="`
      h-[${circleSize}px]
    `"
    class="
      w-full
      flex
    "
  >
    <li
      :class="[
        `
          w-[${circleSize}px]
          h-[${circleSize}px]
        `,

        {
          'opacity-10': !isFinished && !isProgress,
        },
      ]"
      :style="{
        // fixme: not worked with tailwind border-white-12
        borderColor: (isFinished || isProgress)
          ? 'rgba(255, 255, 255, 0.12)'
          : 'transparent',

        // todo: maybe tailwind?
        boxShadow: `0 6px 55px 0px rgba(61, 152, 255, 0.40)`,

        backgroundColor: circleColor,
        color: textColor,
      }"
      class="
        absolute
        px-[8px]
        py-[4px]
        inline-flex
        items-center
        justify-center
        rounded-full
        border-[2px]
      "
    >
      <span
        v-if="!isFinished"
        class="
          text-[17px]
          font-semibold
        "
      >
        <slot name="label">
          {{ state.label }}
        </slot>
      </span>

      <svg
        v-else
        fill="currentColor"
        viewBox="0 0 18 13"
      >
        <path
          d="
            M0.590909
            6.625L1.88636
            5.29545L6.38636
            9.72727L15.6932
            0.454545L17.0227
            1.78409L6.38636
            12.3864L0.590909
            6.625Z
          "
        />
      </svg>
    </li>

    <li
      :class="[
        `
          h-[${lineSize}px]
        `,

        {
          'opacity-10': !isFinished,
        },
      ]"
      :style="{
        'opacity-10': true,

        left: `${circleSize}px`,
        width: `calc(100% - ${circleSize}px)`,
        backgroundColor: lineColor,
      }"
      class="
        absolute
        inset-y-1/2
        flex
        flex-row
        items-center
      "
    >
      <slot name="line"/>
    </li>

    <li
      ref="content"
      :class="{
        'opacity-10': !isProgress,
      }"
      :style="{
        top: `calc(100% + ${TEXT_OFFSET}px)`,
      }"
      class="
        relative
        text-[14px]
        text-white
        whitespace-normal

        min-[320px]:min-w-[66px]

        min-[480px]:min-w-[101px]

        min-[640px]:min-w-[180px]

        min-[960px]:min-w-[221px]
      "
    >
      <slot/>
    </li>
  </ul>
</li>
</template>
