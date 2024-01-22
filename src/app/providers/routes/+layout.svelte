<script lang="ts">
import type { App, TCallableLazy } from "~/shared/model"

import "uno.css"

import "~/app/assets/styles/index.scss"
import { Footer } from "~/app/layouts/footer"
import { Header } from "~/app/layouts/header"
import { AuthOnly, authToken } from "~/entities/auth"
import { asyncComponent } from "~/shared/lib"
import { ClientOnly } from "~/shared/ui"

let AuthDialog: TCallableLazy<ConstructorOfATypedSvelteComponent> = asyncComponent("~/widgets/auth-dialog/ui.svelte")

let data: App.Locals
authToken.set(data.authToken)

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

    <AuthOnly>
        <svelte:fragment slot="fallback">
            <ClientOnly component={AuthDialog} />
        </svelte:fragment>
    </AuthOnly>
</section>
