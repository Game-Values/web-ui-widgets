<script lang="ts">
import type { FormAction } from "@felte/core"

import { forwardEvent } from "$lib/helpers"

export let form: FormAction
</script>

<form
    on:reset|preventDefault={forwardEvent()}
    on:submit|preventDefault={forwardEvent()}
    use:form
>
    <slot />
</form>
