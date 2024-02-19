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
                label: "Rank boosting",
                value: "Rank boosting",
            },
            {
                label: "Wins boosting",
                value: "Wins boosting",
            },
            {
                label: "Kills boosting",
                value: "Kills boosting",
            },
            {
                label: "Level boosting",
                value: "Level boosting",
            },
        ],
        name: "Boosting type",
        type: "checkbox",
    },
] satisfies ILotsFilter[]
