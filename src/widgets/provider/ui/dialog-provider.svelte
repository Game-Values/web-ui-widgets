<script lang="ts">
import { DialogName } from "$lib/enums"
import { asyncComponent } from "$lib/helpers"
import { useState } from "$model/state"
import { LazyComponent } from "$ui/effect"

let { state } = useState()
</script>

{#each Object.values(DialogName) as dialogName (dialogName)}
    {#if $state.dialog === dialogName}
        <LazyComponent
            provider={asyncComponent(`~/widgets/dialog/ui/${$state.dialog}.svelte`)}
        />
    {/if}
{/each}
