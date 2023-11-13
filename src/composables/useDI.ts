import type { Clients, Controllers, Facades } from "~/helpers"

export function useClients(): Clients {
    return useContext().clients
}

export function useControllers(): Controllers {
    return useContext().controllers
}

export function useFacades(): Facades {
    return useContext().facades
}
