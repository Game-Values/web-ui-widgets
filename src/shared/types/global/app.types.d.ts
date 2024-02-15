import type { Api } from "$schema/api"
import type { IModal, ISession } from "$types"

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}

        interface Locals {
            api: Api<unknown>["api"]
            session: ISession
        }

        // interface PageData {}

        interface PageState {
            backgroundImage?: string
            modal?: IModal
            previewImage?: string
        }

        // interface Platform {}
    }
}

export {}
