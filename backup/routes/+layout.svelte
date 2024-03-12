<script lang="ts">
import type { LayoutData } from "$types"

import "uno.css"

import "~/app/assets/styles/index.scss"
import { Footer } from "~/widgets/footer"
import { Header } from "~/widgets/header"

import { asyncComponent } from "$lib"
import { updateSession } from "$lib"
import { Lazy } from "$chat-send-hub-message-form"

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

    <Footer />
</section>

<Lazy provider={asyncComponent("~/widgets/dialog/chat-send-hub-message-form/modal-provider.svelte")} />
