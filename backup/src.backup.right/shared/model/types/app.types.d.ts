// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { IUser } from "~/shared/model"

declare module "@sveltejs/kit" {
    namespace App {
        export interface Locals {
            user: IUser
        }
    }
}
