<script lang="ts">
import { helpLinks, HelpTab } from "~/entities/help"
</script>

<nav class="pb-4 gap-x-4 flex overflow-x-auto overflow-y-hidden">
    {#each helpLinks as helpLink (helpLink.label)}
        <HelpTab link={helpLink} />
    {/each}
</nav>
