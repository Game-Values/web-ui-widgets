<script lang="ts">
import type { IDefaultLayoutData } from "~/app/layouts"

import "uno.css"

import "~/app/assets/styles/index.css"
import { DefaultLayout } from "~/app/layouts"

import { useSession } from "$model"

interface $$Props {
    data: IDefaultLayoutData
}

interface $$Slots {
    default: NonNullable<unknown>
}

let { setSession } = useSession()

let data: IDefaultLayoutData
setSession(data.session)

export {
    data,
}
</script>

<DefaultLayout>
    <slot />
</DefaultLayout>
