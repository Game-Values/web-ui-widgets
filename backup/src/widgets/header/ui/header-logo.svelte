<script lang="ts">
import Button from "@smui/button"

import IconLogo from "virtual:icons/common/logo"

import { RouteLink } from "$lib"
</script>

<Button
    class="relative bottom-1 button-link"
    color="secondary"
    href={RouteLink.HOME}
>
    <IconLogo
        height="2.5rem"
        width="9.725rem"
    />
</Button>
