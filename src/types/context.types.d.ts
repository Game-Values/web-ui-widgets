import type { Adapters, Clients, Controllers, Facades, Services } from "~/helpers"
import type { H3EventContext } from "h3"

export interface Context extends H3EventContext {
    adapters: Adapters
    clients: Clients
    controllers: Controllers
    facades: Facades
    services: Services
}
