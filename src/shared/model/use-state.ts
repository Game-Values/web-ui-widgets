import type { Readable } from "svelte/store"

import { derived, get } from "svelte/store"

import { replaceState } from "$app/navigation"
import { page } from "$app/stores"

type IUseState = {
    setState(pageState: App.PageState): void
    state: Readable<App.PageState>
    updateState(pageState: Partial<App.PageState>): void
}

export function useState(): IUseState {
    let use: IUseState = {
        setState: (pageState: Partial<App.PageState>): void => (
            replaceState("", pageState)
        ),

        state: derived(page, (
            ($page: App.Page): App.PageState => $page.state
        )),

        updateState: (pageState: Partial<App.PageState>): void => (
            replaceState("", Object.assign(get(use.state), pageState))
        ),
    }

    return use
}
