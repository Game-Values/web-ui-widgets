<script lang="ts">
import type { IContextUser } from "$types"

import { SessionUserOnly } from "~/entities/session"

import { useContext } from "$model"
import { EnhancedImage } from "$ui/data"

let { context } = useContext<IContextUser>()
</script>

<div class="flex flex-col">
    <h5 class="text-secondary capitalize">
        <SessionUserOnly user={$context.user}>
            Your Achievements:

            <svelte:fragment slot="fallback">
                {$context.user.full_name} Achievements:
            </svelte:fragment>
        </SessionUserOnly>
    </h5>

    <ul class="flex">
        {#each Array(3) as _, i (i)}
            <li>
                <EnhancedImage
                    --height="6.75rem"
                    --width="6.75rem"
                    alt="achievement"
                    size="sm"
                    src="images/achievements/{i + 1}.png"
                />
            </li>
        {/each}
    </ul>
</div>
