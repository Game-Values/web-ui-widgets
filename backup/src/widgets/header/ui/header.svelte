<script lang="ts">
import LayoutGrid, { Cell } from "@smui/layout-grid"
import TopAppBar from "@smui/top-10-app-bar"
import Autocomplete from "@smui-extra/autocomplete"

import { SessionOnly } from "~/entities/session"
import { HeaderLinks, HeaderLogo, HeaderSession, HeaderSignin } from "~/widgets/header"

import { Content, SearchField } from "$ui"
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
                <HeaderLogo />
            </Cell>

            <Cell
                align="middle"
                spanDevices={{ desktop: 4, phone: 0, tablet: 0 }}
            >
                <Autocomplete>
                    <SearchField />
                </Autocomplete>
            </Cell>

            <Cell
                align="middle"
                spanDevices={{ desktop: 4, phone: 0, tablet: 0 }}
            >
                <HeaderLinks />
            </Cell>

            <Cell
                class="flex justify-end"
                align="middle"
                spanDevices={{ desktop: 2, phone: 0, tablet: 0 }}
            >
                <SessionOnly>
                    <HeaderSession />

                    <svelte:fragment slot="fallback">
                        <HeaderSignin />
                    </svelte:fragment>
                </SessionOnly>
            </Cell>
        </LayoutGrid>
    </Content>
</TopAppBar>
