<script lang="ts">
import { Cell } from "@smui/layout-grid"

type ICellSpan = (
    0 |
    1 |
    10 |
    11 |
    12 |
    2 |
    3 |
    4 |
    5 |
    6 |
    7 |
    8 |
    9
)

let align: "bottom" | "middle" | "top" = "top"

let className: string = ""

let desktop: ICellSpan | undefined = undefined

let mobile: ICellSpan | undefined = undefined

let span: ICellSpan = 12

let tablet: ICellSpan | undefined = undefined

export {
    align,
    className as class,
    desktop,
    mobile,
    span,
    tablet,
}
</script>

<Cell
    class={className}
    {align}
    spanDevices={
        {
            desktop: desktop || span,
            phone: mobile || span,
            tablet: tablet || span,
        }
    }
>
    <slot />
</Cell>
