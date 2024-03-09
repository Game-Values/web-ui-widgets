<script lang="ts">
import { useRoute } from "$model"

import IconArrowDownTray from "virtual:icons/heroicons/arrow-down-tray"

let { routeMeta } = useRoute()
</script>

<a
    class="btn btn-secondary"
    href={$routeMeta.zip}
>
    <i class="icon">
        <IconArrowDownTray />
    </i>

    Save PDF
</a>
