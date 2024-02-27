<script lang="ts">
import { EnhancedImage } from "$ui/data"
</script>

<div class="gap-y-4 flex flex-col">
    <h4>
        Your Achievements:
    </h4>

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
