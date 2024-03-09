import type { ILotsFilter } from "~/entities/lot"

export default [
    {
        buckets: [
            {
                label: "1",
                value: "1",
            },
            {
                label: "2",
                value: "2",
            },
            {
                label: "3",
                value: "3",
            },
            {
                label: "4",
                value: "4",
            },
            {
                label: "5",
                value: "5",
            },
        ],
        name: "Number of Games",
        type: "radio",
    },
    {
        buckets: [
            {
                label: "Very Quickly",
                value: "Very Quickly",
            },
            {
                label: "Up to 2 days",
                value: "Up to 2 days",
            },
            {
                label: "Up to 3 days",
                value: "Up to 3 days",
            },
            {
                label: "Up to 7 days",
                value: "Up to 7 days",
            },
        ],
        name: "Duration of LP Removal",
        type: "radio",
    },
] satisfies ILotsFilter[]
