import type { UnwrapRef } from "vue"

export interface TimelineState {
  decreaseItem: (timelineItemState: TimelineItemState) => void,
  increaseItem: (timelineItemState: TimelineItemState) => void,
  maxHeight: number
  step: number
}

export interface TimelineItemState {
  height: number
  index: number
  label: number | string
  total: number
}

export function timelineState(
    defaultState: Partial<TimelineState> = {},
): UnwrapRef<TimelineState> {
    let timelineItemStates: Set<TimelineItemState> = reactive(new Set<TimelineItemState>())
    let timelineState: TimelineState = reactive<TimelineState>(
        Object.assign<TimelineState, Partial<TimelineState>>({
            decreaseItem: (timelineItemState: TimelineItemState): boolean => (
                timelineItemStates.delete(timelineItemState)
            ),
            increaseItem: (timelineItemState: TimelineItemState): this => (
                timelineItemStates.add(timelineItemState)
            ),

            maxHeight: 0,

            step: 0,
        }, defaultState),
    )

    // todo: with debounce?
    watchEffect(() => {
        Array
            .from<TimelineItemState>(timelineItemStates)
            .forEach((timelineItemState: TimelineItemState, i: number): void => {
                Object.assign<TimelineItemState, Partial<TimelineItemState>>(timelineItemState, {
                    index: i,
                    get label() {
                        return timelineItemState.label || this.index + 1
                    },

                    total: timelineItemStates.size,
                })
            })

        timelineState.maxHeight = Math.max(
            ...Array
                .from<TimelineItemState>(timelineItemStates)
                .map<number>((timelineItemState: TimelineItemState) => timelineItemState.height),
        )
    })

    return timelineState
}

export function timelineItemState(
    defaultState: Partial<TimelineItemState> = {},
): UnwrapRef<TimelineItemState> {
    let timelineItemState: UnwrapRef<TimelineItemState> = reactive<TimelineItemState>(
        Object.assign<TimelineItemState, Partial<TimelineItemState>>({
            height: 0,
            index: 0,
            label: "",
            total: 0,
        }, defaultState),
    )

    return timelineItemState
}
