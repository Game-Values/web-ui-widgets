// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare module "@sveltejs/kit" {
    import type { Api, ISession } from "~/shared/lib"

    namespace App {
        export interface Error {

        }

        export interface Locals {
            api: Api<unknown>["api"]
            session: ISession
        }

        export interface PageData {

        }

        export interface PageState {

        }

        export interface Platform {

        }
    }
}
