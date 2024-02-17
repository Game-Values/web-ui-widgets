<script lang="ts">
import { useRoute } from "$model"

import IconLogo from "virtual:icons/common/logo"

interface $$Props {
    class?: string
}

let className: string = ""

let { route } = useRoute("/")

export {
    className as class,
}
</script>

<a
    class="btn btn-link {className}"
    href={$route}
>
    <IconLogo
        height="2.5rem"
        width="9.725rem"
    />
</a>

<style>
.btn {
    @apply relative bottom-1.5;
    @apply p-0;
    @apply h-auto min-h-0;
}
</style>
