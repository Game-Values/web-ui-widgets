<script lang="ts">
import type { IRouteWithLabel } from "$types"

import { FooterLink } from "~/widgets/footer"

type IFooterLink = {
    label: "Company" | "Help" | "Services"
    links: IRouteWithLabel[]
}

let footerLinks: IFooterLink[] = [
    {
        label: "Services",
        links: [
            {
                label: "Promotions",
                url: "/promotions",
            },
            {
                label: "Ai-assistant",
                url: "/ai-assistant",
            },
            {
                label: "Games",
                url: "/",
            },
            {
                label: "Top-10",
                url: "/top-10",
            },
        ],
    },
    {
        label: "Company",
        links: [
            {
                label: "About",
                url: "/about",
            },
            {
                label: "Blog",
                url: "/blog",
            },
            {
                label: "Job",
                url: "/job",
            },
        ],
    },
    {
        label: "Help",
        links: [
            {
                label: "Feedback",
                url: "/feedback",
            },
            {
                label: "Help",
                url: "/help",
            },
        ],
    },
]
</script>

{#each footerLinks as footerLink (footerLink.label)}
    <nav>
        <h6 class="footer-title capitalize text-white/[0.12]">
            {footerLink.label}
        </h6>

        <ul class="gap-y-2 flex flex-col">
            {#each footerLink.links as link (link.label)}
                <li class="text-sm">
                    <FooterLink {link} />
                </li>
            {/each}
        </ul>
    </nav>
{/each}
