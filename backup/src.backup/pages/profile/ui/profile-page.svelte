<Content>
    Profile

    {JSON.stringify(data)}
</Content>

<script lang="ts">
import type { IProfilePageData } from "~/pages/transaction"

import LayoutGrid, { InnerGrid, Cell } from "@smui/layout-grid"

import { Content } from "~/shared/chat-send-hub-message-form"

export let data: IProfilePageData
</script>
