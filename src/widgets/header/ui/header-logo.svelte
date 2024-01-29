<script lang="ts">
import IconLogo from "virtual:icons/common/logo"

import { RouteLink } from "$lib/enums"
import { Button } from "$ui/common"
</script>

<Button
    class="relative bottom-1 hover:(opacity-80)"
    href={RouteLink.HOME}
    variant="text"
>
    <IconLogo
        height="2.5rem"
        width="9.725rem"
    />
</Button>
