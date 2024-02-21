<script lang="ts">
import { AuthNavbarButton, AuthOnly } from "~/entities/auth"
import { RegistrationNavbarButton } from "~/entities/registration"
import { UserNavbarMenu } from "~/entities/user"
import { NavbarLogo, NavbarStats, NavbarTabs } from "~/widgets/navbar"

import { Input } from "$ui/data"
import { Container, Divider } from "$ui/layout"

import IconMagnifyingGlass from "virtual:icons/heroicons/magnifying-glass"
</script>

<Container
    class="
        navbar
        relative z-20
        h-16
        px-4 py-2.5 gap-x-4
        flex items-center
        shadow-[0_0.25rem_1rem_0.25rem_rgba(0,0,0,0.60)]
    "
    fluid
    tag="nav"
>
    <NavbarLogo class="mr-auto" />

    <Input
        class="w-full max-w-64"
        inputClass="input-sm"
        placeholder="Search GameValues"
        type="search"
    >
        <svelte:fragment slot="icon">
            <IconMagnifyingGlass />
        </svelte:fragment>
    </Input>

    <NavbarTabs class="mt-px" />

    <Divider horizontal />

    <NavbarStats />

    <Divider horizontal />

    <AuthOnly>
        <UserNavbarMenu class="ml-auto" />

        <svelte:fragment slot="fallback">
            <div class="ml-auto flex gap-x-2">
                <RegistrationNavbarButton />

                <AuthNavbarButton />
            </div>
        </svelte:fragment>
    </AuthOnly>
</Container>
