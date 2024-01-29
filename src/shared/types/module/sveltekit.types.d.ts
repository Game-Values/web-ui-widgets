import type { Api, IUser } from "$api"
import type { DialogName } from "$lib/enums"

declare global {
    namespace App {
        export interface Locals {
            api: Api<unknown>["api"]
            session: {
                user?: IUser
            }
        }

        export interface PageState {
            dialog?: DialogName
            preview?: string
        }
    }
}
