<Content>
    Profile

    {JSON.stringify(data)}
</Content>

<script lang="ts">
import type { IProfilePageData } from "~/pages/profile"

import LayoutGrid, { InnerGrid, Cell } from "@smui/layout-grid"

import { Content } from "~/shared/ui"

export let data: IProfilePageData
</script>
