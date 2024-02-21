<script lang="ts">
import type { IRouteWithLabel } from "$types"

import { FooterLink } from "~/widgets/footer"

let links: IRouteWithLabel[] = [
    {
        label: "Privacy Policy",
        url: "/",
    },
    {
        label: "End-User License Agreement",
        url: "/",
    },
    {
        label: "Agency Agreement",
        url: "/",
    },
]
</script>

<nav class="gap-y-2 flex flex-col text-secondary">
    {#each links as link (link.label)}
        <FooterLink {link} />
    {/each}
</nav>
