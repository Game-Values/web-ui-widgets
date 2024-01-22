<script lang="ts">
import type { IGamesListPageData } from "~/pages/games-list"

import { GamesListPage } from "~/pages/games-list"

export let data: IGamesListPageData
</script>

<GamesListPage pageData={data} />
