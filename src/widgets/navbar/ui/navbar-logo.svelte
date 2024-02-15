<script lang="ts">
import { route } from "$schema/routes"

import IconLogo from "virtual:icons/common/logo"
</script>

<a
    class="
        btn btn-link
        relative bottom-1.5
        h-auto
    "
    href={route("/")}
>
    <IconLogo
        height="2.5rem"
        width="9.725rem"
    />
</a>

<style>
.btn {
    @apply p-0;
    @apply h-auto min-h-0;
}
</style>
