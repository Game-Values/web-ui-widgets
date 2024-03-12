<LazyClientOnly component={LazyGameFaq} />

<script lang="ts">
import type { TCallableLazy } from "~/shared/lib"

import { asyncModule } from "~/shared/lib"
import { LazyClientOnly } from "~/shared/chat-send-hub-message-form"

let LazyGameFaq: TCallableLazy<ConstructorOfATypedSvelteComponent> = (
    (): Promise<ConstructorOfATypedSvelteComponent> => (
        asyncModule("~/widgets/game/chat-send-hub-message-form/game-faq.svelte")
    )
)
</script>
