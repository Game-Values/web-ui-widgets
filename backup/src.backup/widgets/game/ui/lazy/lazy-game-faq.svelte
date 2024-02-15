<LazyClientOnly component={LazyGameFaq} />

<script lang="ts">
import type { TCallableLazy } from "~/shared/model"

import { asyncModule } from "~/shared/lib"
import { LazyClientOnly } from "~/shared/ui"

let LazyGameFaq: TCallableLazy<ConstructorOfATypedSvelteComponent> = (
    (): Promise<ConstructorOfATypedSvelteComponent> => (
        asyncModule("~/widgets/game/ui/game-faq.svelte")
    )
)
</script>
