// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    import type { Api, IUser } from "$schema/api"
    import type { IModal, ISession } from "$types"

    namespace App {
        // interface Error {}

        interface Locals {
            api: Api<unknown>["api"]
            session: ISession
        }

        // interface PageData {}

        interface PageState {
            modal?: IModal
        }

        // interface Platform {}
    }
}

export {}
