<script lang="ts">
import type { HTMLAnchorAttributes } from "svelte/elements"

import { policyLinks, PolicyTab } from "~/entities/policy"

interface $$Props {
    class?: string
    tabClass?: string
    target?: HTMLAnchorAttributes["target"]
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let tabClass: string = ""

export {
    className as class,
    tabClass,
}
</script>

<nav class="join {className}">
    {#each policyLinks as policyLink (policyLink.label)}
        <PolicyTab
            class="join-item {tabClass}"
            link={policyLink}
        />
    {/each}
</nav>
