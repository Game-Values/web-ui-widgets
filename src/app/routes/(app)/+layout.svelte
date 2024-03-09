<script lang="ts">
import type { IDefaultLayoutData } from "~/layouts"

import "uno.css"

import "~/app/assets/styles/index.css"
import { AppLayout } from "~/layouts"

import { useSession } from "$model"

interface $$Slots {
    default: NonNullable<unknown>
}

let data: IDefaultLayoutData

let { setSession } = useSession()

setSession(data.session)

export {
    data,
}
</script>

<AppLayout>
    <slot />
</AppLayout>
