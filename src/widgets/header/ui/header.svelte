<script lang="ts">
import LayoutGrid, { Cell } from "@smui/layout-grid"
import TopAppBar from "@smui/top-app-bar"

import { HeaderAuth, HeaderLinks, HeaderLogo, HeaderMenu } from "~/widgets/header"

import { Content } from "$ui"
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
                Autocomplete
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
                <HeaderAuth />

                <HeaderMenu />
            </Cell>
        </LayoutGrid>
    </Content>
</TopAppBar>
