<script lang="ts">
import { policyLinks, PolicyTab } from "~/entities/policy"

interface $$Props {
    class?: string
    tabClass?: string
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
