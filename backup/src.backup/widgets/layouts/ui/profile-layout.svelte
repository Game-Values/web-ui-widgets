<Content>
    <LayoutGrid>
        <Cell
            class="flex flex-col gap-y-3"
            spanDevices={{ desktop: 7, tablet: 12, phone: 12 }}
        >
            <ProfileCard user={$page.data.user} />

            <slot />
        </Cell>

        <Cell spanDevices={{ desktop: 5, tablet: 12, phone: 12 }}>
            <ProfileStatistics user={$page.data.user} />
        </Cell>
    </LayoutGrid>
</Content>

<script lang="ts">
import LayoutGrid, { Cell } from "@smui/layout-grid"

import { page } from "$app/stores"
import { Content } from "~/shared/chat-send-hub-message"
import { ProfileCard, ProfileStatistics } from "~/widgets/transaction"
</script>
