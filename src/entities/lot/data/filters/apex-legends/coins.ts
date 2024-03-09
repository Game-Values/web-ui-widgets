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
                label: "90 Coins",
                value: "90 Coins",
            },
            {
                label: "280 Coins",
                value: "280 Coins",
            },
            {
                label: "500 Coins",
                value: "500 Coins",
            },
            {
                label: "1000 Coins",
                value: "1000 Coins",
            },
            {
                label: "1050 Coins",
                value: "1050 Coins",
            },
            {
                label: "2100 Coins",
                value: "2100 Coins",
            },
            {
                label: "2150 Coins",
                value: "2150 Coins",
            },
            {
                label: "4350 Coins",
                value: "4350 Coins",
            },
            {
                label: "5650 Coins",
                value: "5650 Coins",
            },
            {
                label: "6700 Coins",
                value: "6700 Coins",
            },
            {
                label: "11500 Coins",
                value: "11500 Coins",
            },
            {
                label: "12300 Coins",
                value: "12300 Coins",
            },
            {
                label: "Different amount",
                value: "Different amount",
            },
        ],
        name: "Coins",
        type: "checkbox",
    },
] satisfies ILotsFilter[]
