import type { Page } from "@sveltejs/kit"
import type { Readable } from "svelte/store"

import { tick } from "svelte"
import { derived, get } from "svelte/store"

import { replaceState } from "$app/navigation"
import { page } from "$app/stores"

type IUseState = {
    state: Readable<App.PageState>
    update(state: App.PageState): void
}

let state: Readable<App.PageState> = derived(page, (
    ($page: Page): App.PageState => $page.state
))

function updateState(pageState: App.PageState): void {
    tick().then(() => (
        replaceState("", Object.assign(get(page).state, pageState))
    ))
}

export function useState(): IUseState {
    return {
        state,
        update: updateState,
    }
}
