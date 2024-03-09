<script lang="ts">
import type { IGameDetailsPageData } from "~/pages/game-details"

import { GamePreview } from "~/entities/game"
import { Content } from "~/shared/chat-send-hub-message"

export let pageData: IGameDetailsPageData
</script>

<GamePreview game={pageData.game} />

<Content>

</Content>
