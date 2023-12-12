import type { Adapters, Clients, Confirms, Controllers, Facades, Modals, Services, Toasts } from "~/helpers"
import type { H3EventContext } from "h3"

export interface Context extends H3EventContext {
    adapters: Adapters
    clients: Clients
    confirms: Confirms
    controllers: Controllers
    facades: Facades
    modals: Modals
    services: Services
    toasts: Toasts
}
