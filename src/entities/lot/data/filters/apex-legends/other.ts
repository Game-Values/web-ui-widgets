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
] satisfies ILotsFilter[]
