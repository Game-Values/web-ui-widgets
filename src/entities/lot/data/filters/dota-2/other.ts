import type { ILotsFilter } from "~/entities/lot"

export default [
    {
        buckets: [
            {
                label: "Turbo Mode Assistance",
                value: "Turbo Mode Assistance",
            },
            {
                label: "Quests Completion",
                value: "Quests Completion",
            },
            {
                label: "Behavior Score Boost",
                value: "Behavior Score Boost",
            },
            {
                label: "Item & Hero Customization",
                value: "Item & Hero Customization",
            },
            {
                label: "Battle Cup Victory",
                value: "Battle Cup Victory",
            },
            {
                label: "Token Farming",
                value: "Token Farming",
            },
            {
                label: "PC Optimization",
                value: "PC Optimization",
            },
            {
                label: "Account Management",
                value: "Account Management",
            },
            {
                label: "Streaming & Content Creation",
                value: "Streaming & Content Creation",
            },
            {
                label: "Event Participation",
                value: "Event Participation",
            },
            {
                label: "Guild Services",
                value: "Guild Services",
            },
            {
                label: "Workshop & Custom Content",
                value: "Workshop & Custom Content",
            },
            {
                label: "Special Requests",
                value: "Special Requests",
            },
        ],
        info: `
            • Turbo Mode Assistance: Help with playing and winning in Turbo mode matches.
            • Quests Completion: Assistance with completing in-game quests for rewards.
            • Behavior Score Boost: Services aimed at improving the behavior score.
            • Item & Hero Customization: Customizing items or heroes to unlock new styles or complete specific challenges.
            • Battle Cup Victory: Support with participation and success in Battle Cup events.
            • Token Farming: Assistance with collecting tokens through game participation.
            • PC Optimization: Improving computer performance for a better gaming experience.
            • Account Management: Help with managing Dota 2 accounts and settings.
            • Streaming & Content Creation: Support with setting up game streaming or creating content.
            • Event Participation: Assistance with engaging in Dota 2 events and seasonal activities.
            • Guild Services: Managing guild-related activities and challenges.
            • Workshop & Custom Content: Creating and managing custom content through the Dota 2 Workshop.
            • Special Requests: Catering to unique needs that don't fit into the standard categories.
        `,
        name: "Other Dota 2 Services",
        type: "radio",
    },
] satisfies ILotsFilter[]
