import type { ILotsFilter } from "~/entities/lot"

export default [
    {
        buckets: [
            {
                label: "PC",
                value: "PC",
            },
            {
                label: "PS",
                value: "PS",
            },
            {
                label: "Xbox",
                value: "Xbox",
            },
        ],
        name: "Platform",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Digital code",
                value: "Digital code",
            },
            {
                label: "By logging in to the account",
                value: "By logging in to the account",
            },
        ],
        name: "Top Up options",
        type: "checkbox",
    },
] satisfies ILotsFilter[]
