<script lang="ts">
import type { App, TCallableLazy } from "~/shared/model"

import "uno.css"

import "~/app/assets/styles/index.scss"
import { Footer } from "~/app/layouts/footer"
import { Header } from "~/app/layouts/header"
import { AuthOnly, authToken } from "~/entities/auth"
import { asyncComponent } from "$lib"
import { ClientOnly } from "~/shared/ui"

let AuthLoginDialog: TCallableLazy<ConstructorOfATypedSvelteComponent> = asyncComponent("~/widgets/auth-signin-dialog/ui.svelte")
let AuthSignupDialog: TCallableLazy<ConstructorOfATypedSvelteComponent> = asyncComponent("~/widgets/auth-signup-dialog/ui.svelte")

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
            <ClientOnly component={AuthLoginDialog} />

            <ClientOnly component={AuthSignupDialog} />
        </svelte:fragment>
    </AuthOnly>
</section>
