<script lang="ts">
import type { IUserLayoutData } from "~/layouts"

import { UserLayout } from "~/layouts"

interface $$Props {
    data: IUserLayoutData
}

interface $$Slots {
    default: NonNullable<unknown>
}

export let data: IUserLayoutData
</script>

<UserLayout user={data.user}>
    <slot />
</UserLayout>
