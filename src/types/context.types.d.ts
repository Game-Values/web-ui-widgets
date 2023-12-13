import type { Adapters, Clients, Confirms, Controllers, Facades, Modals, Services, Toasts } from "~/helpers"
import type { ConsolaInstance } from "consola"
import type { H3EventContext } from "h3"
import type { Logger } from "pino"

export interface Context extends H3EventContext {
    adapters: Adapters
    clients: Clients
    confirms: Confirms
    controllers: Controllers
    facades: Facades
    logger: ConsolaInstance | Logger
    modals: Modals
    services: Services
    toasts: Toasts
}
