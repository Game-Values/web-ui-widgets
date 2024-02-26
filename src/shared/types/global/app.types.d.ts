import type { Api } from "$schema/api"
import type { IEnhancedImageSrc, IModal, IRouteParams, ISeo, ISession } from "$types"
import type { Page as PageRaw } from "@sveltejs/kit"

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}

        interface Locals {
            api: Api<unknown>["api"]
            session: ISession
        }

        type Page = PageRaw<IRouteParams>

        // interface PageData {}

        interface PageState {
            background?: { height?: string, src: IEnhancedImageSrc, width?: string }
            modal?: IModal
            seo?: ISeo
        }

        // interface Platform {}
    }
}

export {}
