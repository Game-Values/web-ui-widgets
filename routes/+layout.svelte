<script lang="ts">
import type { LayoutData } from "$types"

import "uno.css"

import "~/app/assets/styles/index.scss"
import { Header } from "~/widgets/header"

import { asyncComponent } from "$lib"
import { updateSession } from "$model"
import { Lazy } from "$ui"

let data: LayoutData
updateSession(data.session)

export {
    data,
}
</script>

<section class="h-full flex flex-col">
    <Header />

    <main class="flex-auto">
        <slot />
    </main>
</section>

<Lazy provider={asyncComponent("~/widgets/dialog/ui/dialog-provider.svelte")} />
