import type { Readable, Writable } from "svelte/store"

import { derived, get, writable } from "svelte/store"

import { onClient } from "$lib/helpers"

type IUseState = {
    setState(pageState: App.PageState): void
    state: Readable<App.PageState>
    updateState(pageState: Partial<App.PageState>): void
}

let state: Writable<App.PageState> = writable(Object.create(null))

export function useState(): IUseState {
    let use: IUseState = {
        setState: (pageState: Partial<App.PageState>): void => {
            onClient((): void => state.set(pageState))
        },

        state: derived(state, ($state: App.PageState): App.PageState => $state),

        updateState: (pageState: Partial<App.PageState>): void => {
            onClient((): void => state.set(Object.assign(get(use.state), pageState)))
        },
    }

    return use
}
