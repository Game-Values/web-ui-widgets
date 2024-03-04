import type { IFooterLink } from "~/widgets/footer"

export let footerLinks: IFooterLink[] = [
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
                url: "/help/general",
            },
        ],
    },
]
