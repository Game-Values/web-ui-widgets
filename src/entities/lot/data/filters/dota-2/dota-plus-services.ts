import type { ILotsFilter } from "~/entities/lot"

export default [
    {
        buckets: [
            {
                children: [
                    {
                        buckets: [
                            {
                                label: "Tier 3 Crusaders or below",
                                value: "Tier 3 Crusaders or below",
                            },
                            {
                                label: "Tier 4 Archons",
                                value: "Tier 4 Archons",
                            },
                            {
                                label: "Tier 5 Legends",
                                value: "Tier 5 Legends",
                            },
                            {
                                label: "Tier 6 Ancients",
                                value: "Tier 6 Ancients",
                            },
                            {
                                label: "Tier 7 Divines",
                                value: "Tier 7 Divines",
                            },
                            {
                                label: "Tier 8 Immortals",
                                value: "Tier 8 Immortals",
                            },
                        ],
                        name: "Battle Cup Type",
                        type: "radio",
                    },
                ],
                label: "Battle Cup Victory",
                value: "Battle Cup Victory",
            },
            {
                label: "Hero Leveling",
                value: "Hero Leveling",
            },
            {
                label: "Dota+ Quests Completion",
                value: "Dota+ Quests Completion",
            },
            {
                label: "Dota+ Subscription",
                value: "Dota+ Subscription",
            },
            {
                label: "Customized Dota+ Services",
                value: "Customized Dota+ Services",
            },
        ],
        info: `
            • Battle Cup Victory: Services that assist in winning the weekly Battle Cup tournaments, with options available for various tiers and a money-back guarantee in case of a loss.• Hero Leveling: Services aimed at accelerating the leveling up of heroes in Dota+, including optimizing experience gains through wins and losses.• Dota+ Quests Completion: Assistance in completing challenging Dota+ quests for quick star acquisition and progress.
            • Dota+ Subscription Assistance: Services for adding funds to your Steam account for purchasing or renewing Dota+ subscriptions, along with individual refill options for different durations.
            • Customized Dota+ Services: Including options such as game streaming, playing as part of a team with a coach, and other personalized services related to Dota+.
        `,
        name: "Services Type",
        type: "radio",
    },
] satisfies ILotsFilter[]
