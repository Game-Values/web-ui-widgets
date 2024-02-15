declare module "@sveltejs/kit" {
    import type { Api, IUser } from "$api"
    import type { DialogName } from "$lib"

    namespace App {
        export interface Error {

        }

        export interface Locals {
            api: Api<unknown>["api"]
            session: {
                user?: IUser
            }
        }

        export interface PageData {

        }

        export interface PageState {
            dialog: DialogName
        }

        export interface Platform {

        }
    }
}
