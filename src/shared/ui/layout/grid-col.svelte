<script lang="ts">
interface $$Props {
    align?: IGridColAlign
    class?: string
    justify?: IGridColAlign
    lg?: IGridColSpan
    md?: IGridColSpan
    sm?: IGridColSpan
    span?: IGridColSpan
    xl?: IGridColSpan
}

interface $$Slots {
    default: NonNullable<unknown>
}

type IGridColAlign = "center" | "end" | "start"

type IGridColSpan = 1 | 10 | 11 | 12 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

let align: IGridColAlign = "start"

let className: string = ""

let justify: IGridColAlign = "start"

let sm: IGridColSpan | undefined = undefined

let md: IGridColSpan | undefined = undefined

let span: IGridColSpan = 12

let lg: IGridColSpan | undefined = undefined

let xl: IGridColSpan | undefined = undefined

export {
    align,
    className as class,
    justify,
    lg,
    md,
    sm,
    span,
    xl,
}
</script>

<div
    class="flex {className}"

    class:col-span-1={span === 1}
    class:col-span-10={span === 10}
    class:col-span-11={span === 11}
    class:col-span-12={span === 12}
    class:col-span-2={span === 2}
    class:col-span-3={span === 3}
    class:col-span-4={span === 4}
    class:col-span-5={span === 5}
    class:col-span-6={span === 6}
    class:col-span-7={span === 7}
    class:col-span-8={span === 8}
    class:col-span-9={span === 9}

    class:items-center={align === "center"}
    class:items-end={align === "end"}
    class:items-start={align === "start"}

    class:justify-center={justify === "center"}
    class:justify-end={justify === "end"}
    class:justify-start={justify === "start"}

    class:lg:col-span-1={lg === 1}
    class:lg:col-span-10={lg === 10}
    class:lg:col-span-11={lg === 11}
    class:lg:col-span-12={lg === 12}
    class:lg:col-span-2={lg === 2}
    class:lg:col-span-3={lg === 3}
    class:lg:col-span-4={lg === 4}
    class:lg:col-span-5={lg === 5}
    class:lg:col-span-6={lg === 6}
    class:lg:col-span-7={lg === 7}
    class:lg:col-span-8={lg === 8}
    class:lg:col-span-9={lg === 9}

    class:md:col-span-1={md === 1}
    class:md:col-span-10={md === 10}
    class:md:col-span-11={md === 11}
    class:md:col-span-12={md === 12}
    class:md:col-span-2={md === 2}
    class:md:col-span-3={md === 3}
    class:md:col-span-4={md === 4}
    class:md:col-span-5={md === 5}
    class:md:col-span-6={md === 6}
    class:md:col-span-7={md === 7}
    class:md:col-span-8={md === 8}
    class:md:col-span-9={md === 9}

    class:sm:col-span-1={sm === 1}
    class:sm:col-span-10={sm === 10}
    class:sm:col-span-11={sm === 11}
    class:sm:col-span-12={sm === 12}
    class:sm:col-span-2={sm === 2}
    class:sm:col-span-3={sm === 3}
    class:sm:col-span-4={sm === 4}
    class:sm:col-span-5={sm === 5}
    class:sm:col-span-6={sm === 6}
    class:sm:col-span-7={sm === 7}
    class:sm:col-span-8={sm === 8}
    class:sm:col-span-9={sm === 9}

    class:xl:col-span-1={xl === 1}
    class:xl:col-span-10={xl === 10}
    class:xl:col-span-11={xl === 11}
    class:xl:col-span-12={xl === 12}
    class:xl:col-span-2={xl === 2}
    class:xl:col-span-3={xl === 3}
    class:xl:col-span-4={xl === 4}
    class:xl:col-span-5={xl === 5}
    class:xl:col-span-6={xl === 6}
    class:xl:col-span-7={xl === 7}
    class:xl:col-span-8={xl === 8}
    class:xl:col-span-9={xl === 9}
>
    <slot />
</div>
