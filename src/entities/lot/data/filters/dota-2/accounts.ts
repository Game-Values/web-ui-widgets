import type { ILotsFilter } from "~/entities/lot"

export default [
    {
        buckets: [
            {
                label: "Rated",
                value: "Rated",
            },
            {
                label: "TBD",
                value: "TBD",
            },
            {
                label: "Without access to ranked matches",
                value: "Without access to ranked matches",
            },
        ],
        name: "Account type",
        type: "radio",
    },
    {
        name: "MMR",
        type: "range",
    },
    {
        name: "Behavior score",
        type: "range",
    },
    {
        name: "Number of hours",
        type: "range",
    },
    {
        buckets: [
            {
                children: [
                    {
                        name: "Inventory value",
                        type: "range",
                    },
                ],
                label: "Yes",
                tooltip: `
                    In this category, the approximate total value of the Steam account's inventory is indicated.
                    It includes the valuation of all items available in the player's inventory across all games,
                    including skins, equipment, tools, and other game assets.The value is determined based
                    on the current market prices for these items on the Steam Community Market or through other valuation services.
                `,
                value: "Yes",
            },
            {
                label: "No",
                value: "No",
            },
            {
                label: "Trade ban",
                value: "Trade ban",
            },
        ],
        name: "Inventory",
        type: "radio",
    },
] satisfies ILotsFilter[]
