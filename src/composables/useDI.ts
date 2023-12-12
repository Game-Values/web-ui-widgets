import type { Clients, Confirms, Controllers, Facades, Modals, Toasts } from "~/helpers"

export function useClients(): Clients {
    return useContext().clients
}

export function useConfirms(): Confirms {
    return useContext().confirms
}

export function useControllers(): Controllers {
    return useContext().controllers
}

export function useFacades(): Facades {
    return useContext().facades
}

export function useModals(): Modals {
    return useContext().modals
}

export function useToasts(): Toasts {
    return useContext().toasts
}
