<script lang="ts">
interface $$Props {
    class?: string
    gap?: IGridGap
    subgrid?: boolean
}

interface $$Slots {
    default: NonNullable<unknown>
}

type IGridGap = 0 | 1 | 2 | 3 | 4 | 5 | 6

let className: string = ""

let gap: IGridGap = 6

let subgrid: boolean = false

export {
    className as class,
    gap,
}
</script>

<div
    class="grid grid-cols-12 {className}"

    class:gap-0={gap === 0}
    class:gap-1={gap === 1}
    class:gap-2={gap === 2}
    class:gap-3={gap === 3}
    class:gap-4={gap === 4}
    class:gap-5={gap === 5}
    class:gap-6={gap === 6}

    class:grid-cols-subgrid={subgrid}
>
    <slot />
</div>
