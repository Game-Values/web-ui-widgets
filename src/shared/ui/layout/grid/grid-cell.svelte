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

let desktop: ICellSpan = 12

let mobile: ICellSpan = 12

let tablet: ICellSpan = 12

export {
    align,
    className as class,
    desktop,
    mobile,
    tablet,
}
</script>

<Cell
    class={className}
    {align}
    spanDevices={
        {
            desktop,
            phone: mobile,
            tablet,
        }
    }
>
    <slot />
</Cell>
