<script lang="ts">
import LayoutGrid, { Cell } from "@smui/layout-grid"
import BottomAppBar from "@smui-extra/bottom-app-bar"

import {
    FooterCopyright,
    FooterLogo,
    FooterPaymentMethods,
    FooterPolicyLinks,
    FooterSocialLinks,
} from "~/widgets/footer"

import { Content } from "$ui"
</script>

<footer class="pt-8 pb-16 bg-grey-extra-dark">
    <BottomAppBar variant="static">
        <Content>
            <LayoutGrid>
                <Cell
                    class="flex flex-col gap-y-2"
                    spanDevices={{ desktop: 6, phone: 12, tablet: 3 }}
                >
                    <FooterLogo />

                    <FooterCopyright />
                </Cell>

                <Cell>

                </Cell>

                <Cell spanDevices={{ desktop: 6, phone: 12, tablet: 6 }}>
                    <FooterPolicyLinks />
                </Cell>

                <Cell>

                </Cell>

                <Cell spanDevices={{ desktop: 6, phone: 12, tablet: 12 }}>
                    <FooterPaymentMethods />
                </Cell>

                <Cell spanDevices={{ desktop: 6, phone: 12, tablet: 6 }}>
                    <FooterSocialLinks />
                </Cell>
            </LayoutGrid>
        </Content>
    </BottomAppBar>
</footer>
