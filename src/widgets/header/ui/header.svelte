<script lang="ts">
import LayoutGrid, { Cell } from "@smui/layout-grid"
import TopAppBar from "@smui/top-app-bar"

import { AuthLoginButton, AuthSignupButton } from "~/entities/auth"
import { HeaderLinks, HeaderLogo } from "~/entities/header"
import { LotAutocomplete } from "~/features/lot"
import { Content } from "~/shared/ui"
</script>

<TopAppBar
    variant="static"
    class="bg-transparent"
>
    <Content>
        <LayoutGrid>
            <Cell
                align="middle"
                spanDevices={{ desktop: 2, tablet: 0, phone: 0 }}
            >
                <HeaderLogo />
            </Cell>

            <Cell
                align="middle"
                spanDevices={{ desktop: 4, tablet: 0, phone: 0 }}
            >
                <LotAutocomplete />
            </Cell>

            <Cell
                align="middle"
                class="flex justify-center gap-x-4"
                spanDevices={{ desktop: 4, tablet: 0, phone: 0 }}
            >
                <HeaderLinks />
            </Cell>

            <Cell
                align="middle"
                class="flex justify-end gap-x-4"
                spanDevices={{ desktop: 2, tablet: 0, phone: 0 }}
            >
                <AuthLoginButton />

                <AuthSignupButton />
            </Cell>
        </LayoutGrid>
    </Content>
</TopAppBar>
