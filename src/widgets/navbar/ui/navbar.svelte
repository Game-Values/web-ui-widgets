<script lang="ts">
import { AuthOnly } from "~/entities/auth"
import {
    NavbarAuthButton,
    NavbarLogo,
    NavbarRegistrationButton,
    NavbarStats,
    NavbarTabs,
    NavbarUserMenu,
} from "~/widgets/navbar"

import { SearchInput } from "$ui/data"
import { Container, Divider } from "$ui/layout"
</script>

<Container
    class="
        navbar
        relative z-10
        h-16
        px-4 py-2.5 gap-4
        flex items-center justify-between
        shadow-[0_0.25rem_1rem_0.25rem_rgba(0,0,0,0.60)]
    "
    fluid
    tag="nav"
>
    <NavbarLogo />

    <SearchInput
        class="max-w-96 flex-1"
        inputClass="input-sm"
    />

    <NavbarTabs />

    <Divider horizontal />

    <NavbarStats />

    <Divider horizontal />

    <AuthOnly>
        <NavbarUserMenu />

        <svelte:fragment slot="fallback">
            <div class="flex gap-x-2">
                <NavbarRegistrationButton />

                <NavbarAuthButton />
            </div>
        </svelte:fragment>
    </AuthOnly>
</Container>
