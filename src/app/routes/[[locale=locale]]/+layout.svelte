<script lang="ts">
import type { IDefaultLayoutData } from "~/app/layouts"

import { onMount } from "svelte"
import "uno.css"

import "~/app/assets/styles/index.css"
import { DefaultLayout } from "~/app/layouts"
import { withVitals } from "~/app/providers"

import { useSession } from "$model"

interface $$Props {
    data: IDefaultLayoutData
}

interface $$Slots {
    default: NonNullable<unknown>
}

let data: IDefaultLayoutData

let { setSession } = useSession()

setSession(data.session)

onMount(withVitals)

export {
    data,
}
</script>

<DefaultLayout>
    <slot />
</DefaultLayout>
