import type { Api } from "$schema/api"
import type { IModal, IRouteParams, ISession } from "$types"
import type { Page as _Page } from "@sveltejs/kit"

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}

        interface Locals {
            api: Api<unknown>["api"]
            session: ISession
        }

        interface Page extends _Page {
            params: IRouteParams
        }

        // interface PageData {}

        interface PageState {
            background?: { height?: string, src: string, width?: string }
            modal?: IModal
        }

        // interface Platform {}
    }
}

export {}
