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
                label: "Rookie",
                value: "Rookie",
            },
            {
                label: "Bronze",
                value: "Bronze",
            },
            {
                label: "Silver",
                value: "Silver",
            },
            {
                label: "Gold",
                value: "Gold",
            },
            {
                label: "Platinum",
                value: "Platinum",
            },
            {
                label: "Diamond",
                value: "Diamond",
            },
            {
                label: "Master",
                value: "Master",
            },
            {
                label: "Apex Predator",
                value: "Apex Predator",
            },
            {
                label: "No rank",
                value: "No rank",
            },
        ],
        name: "Rank",
        type: "checkbox",
    },
    {
        buckets: [],
        name: "Level",
        type: "range",
    },
] satisfies ILotsFilter[]
