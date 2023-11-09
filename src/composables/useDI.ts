import type { Clients, Facades } from "~/helpers"

export function useClients(): Clients {
    return useContext().clients
}

export function useFacades(): Facades {
    return useContext().facades
}
