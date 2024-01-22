// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { IToken } from "~/shared/model"

declare module "@sveltejs/kit" {
    export interface Event {
        locals: App.Locals
    }
}

export declare namespace App {
    export interface Locals {
        authToken: IToken
    }

    // export type PageData = (
    //     Partial<IMainPageData>
    // )
}
