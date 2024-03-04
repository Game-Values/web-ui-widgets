<script lang="ts">
import type { HTMLAnchorAttributes } from "svelte/elements"

import { PolicyLink, policyLinks } from "~/entities/policy"

interface $$Props {
    class?: string
    linkClass?: string
    target?: HTMLAnchorAttributes["target"]
}

let className: string = ""

let linkClass: string = ""

let target: HTMLAnchorAttributes["target"] = undefined

export {
    className as class,
    linkClass,
    target,
}
</script>

<nav class="gap-2 flex {className}">
    {#each policyLinks as policyLink (policyLink.label)}
        <PolicyLink
            class={linkClass}
            link={policyLink}
            {target}
        />
    {/each}
</nav>
