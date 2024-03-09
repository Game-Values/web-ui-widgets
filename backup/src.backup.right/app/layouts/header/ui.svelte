<script lang="ts">
import Button from "@smui/button"
import LayoutGrid, { Cell } from "@smui/layout-grid"
import TopAppBar from "@smui/top-10-app-bar"

import IconLogo from "virtual:icons/custom/logo"

import { headerLinks } from "~/app/layouts/header"
import { AuthLoginButton, AuthOnly, AuthSignupButton } from "~/entities/auth"
import { LotsAutocomplete } from "~/features/lot"
import { Content } from "~/shared/chat-send-hub-message"
</script>

<TopAppBar
    class="bg-transparent"
    variant="static"
>
    <Content>
        <LayoutGrid>
            <Cell
                align="middle"
                spanDevices={{ desktop: 2, phone: 0, tablet: 0 }}
            >
                <Button
                    class="relative bottom-1 button-link"
                    color="secondary"
                    href="/"
                >
                    <IconLogo
                        height="2.5rem"
                        width="9.725rem"
                    />
                </Button>
            </Cell>

            <Cell
                align="middle"
                spanDevices={{ desktop: 4, phone: 0, tablet: 0 }}
            >
                <LotsAutocomplete />
            </Cell>

            <Cell
                class="flex justify-center gap-x-4"
                align="middle"
                spanDevices={{ desktop: 4, phone: 0, tablet: 0 }}
            >
                {#each headerLinks as headerLink (headerLink.label)}
                    <Button
                        class="text-normal font-bold button-link"
                        href={headerLink.url}
                    >
                        {headerLink.label}
                    </Button>
                {/each}
            </Cell>

            <Cell
                class="flex justify-end"
                align="middle"
                spanDevices={{ desktop: 2, phone: 0, tablet: 0 }}
            >
                <AuthOnly>
                    isAuthorized!

                    <svelte:fragment slot="fallback">
                        <AuthLoginButton />

                        <AuthSignupButton />
                    </svelte:fragment>
                </AuthOnly>
            </Cell>
        </LayoutGrid>
    </Content>
</TopAppBar>
