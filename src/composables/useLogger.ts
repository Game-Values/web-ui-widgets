import type { Context } from "~/types"

export function useLogger(): Context["logger"] {
    return useContext().logger
}
