import type { UnwrapRef } from "vue"

export interface TimelineState {
  step: number
  maxHeight: number
  increaseItem: (timelineItemState: TimelineItemState) => void,
  decreaseItem: (timelineItemState: TimelineItemState) => void,
}

export interface TimelineItemState {
  label: string | number
  index: number
  height: number
  total: number
}

export function timelineState(
  defaultState: Partial<TimelineState> = {},
): UnwrapRef<TimelineState> {
  let timelineItemStates: Set<TimelineItemState> = reactive(new Set<TimelineItemState>())
  let timelineState: TimelineState = reactive<TimelineState>(
    Object.assign<TimelineState, Partial<TimelineState>>({
      step: 0,
      maxHeight: 0,

      increaseItem: (timelineItemState: TimelineItemState): this => (
        timelineItemStates.add(timelineItemState)
      ),

      decreaseItem: (timelineItemState: TimelineItemState): boolean => (
        timelineItemStates.delete(timelineItemState)
      ),
    }, defaultState)
  )

  // todo: with debounce?
  watchEffect(() => {
    Array
      .from<TimelineItemState>(timelineItemStates)
      .forEach((timelineItemState: TimelineItemState, i: number): void => {
        Object.assign<TimelineItemState, Partial<TimelineItemState>>(timelineItemState, {
          index: i,
          total: timelineItemStates.size,

          get label() {
            return timelineItemState.label || this.index + 1
          }
        })
      })

    timelineState.maxHeight = Math.max(
      ...Array
        .from<TimelineItemState>(timelineItemStates)
        .map<number>((timelineItemState: TimelineItemState) => timelineItemState.height)
    )
  })

  return timelineState
}

export function timelineItemState(
  defaultState: Partial<TimelineItemState> = {},
): UnwrapRef<TimelineItemState> {
  let timelineItemState: UnwrapRef<TimelineItemState> = reactive<TimelineItemState>(
    Object.assign<TimelineItemState, Partial<TimelineItemState>>({
      label: "",
      index: 0,
      height: 0,
      total: 0,
    }, defaultState)
  )

  return timelineItemState
}
