<script lang="ts">
import type { ISvelteComponentConstructor } from "$types"

import { page } from "$app/stores"
import { asyncComponent, DialogName } from "$lib"
import { Lazy } from "$ui"

$: dialog = $page.state.dialog

$: provider = asyncComponent<ISvelteComponentConstructor>(`~/widgets/dialog/ui/${dialog}.svelte`)
</script>

{#each Object.values(DialogName) as dialogName (dialogName)}
    {#if dialog === dialogName}
        <Lazy {provider}/>
    {/if}
{/each}
