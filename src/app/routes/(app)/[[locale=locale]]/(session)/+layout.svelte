<script lang="ts">
import { UserLayout } from "~/layouts"

import { useSession } from "$model"

interface $$Slots {
    default: NonNullable<unknown>
}

let { user } = useSession()
</script>

<UserLayout user={$user}>
    <slot />
</UserLayout>
