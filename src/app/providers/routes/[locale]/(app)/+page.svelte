<script lang="ts">
import type { IMainPageData } from "~/pages/main"

import { MainPage } from "~/pages/main"

export let data: IMainPageData
</script>

<MainPage data={data} />
