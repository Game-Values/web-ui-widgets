<script lang="ts">
import { ChatDirectUsers } from "~/widgets/chat"

import { Grid, GridCol } from "$ui/layout"
</script>

<Grid
    class="h-[calc(100dvh-(4rem+5rem+1rem*2))]"
    gap={0}
>
    <GridCol
        class="bg-black/[0.06] border-r border-white/[0.02] overflow-y-auto"
        span={5}
    >
        <ChatDirectUsers />
    </GridCol>

    <GridCol
        class="bg-black/[0.06] overflow-hidden"
        span={7}
    >
        <slot />
    </GridCol>
</Grid>
