<script lang="ts">
import { UserLayout } from "~/layouts"

import { useSession } from "$model"

interface $$Slots {
    default: NonNullable<unknown>
}

let { user: sessionUser } = useSession()
</script>

<UserLayout user={$sessionUser}>
    <slot />
</UserLayout>
