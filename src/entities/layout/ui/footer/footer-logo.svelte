<script lang="ts">
import IconLogoGrayscale from "virtual:icons/common/logo-grayscale"

import { RouteLink } from "$lib/enums"
import { Button } from "$ui/common"
</script>

<Button
    class="relative bottom-1 hover:(opacity-80)"
    href={RouteLink.HOME}
    variant="text"
>
    <IconLogoGrayscale
        height="2.5rem"
        width="9.725rem"
    />
</Button>
