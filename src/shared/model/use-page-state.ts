import type { Page } from "@sveltejs/kit"
import type { Readable } from "svelte/store"

import { merge } from "lodash-es"
import { tick } from "svelte"
import { derived, get } from "svelte/store"

import { replaceState } from "$app/navigation"
import { page } from "$app/stores"

type IUsePageState = {
    pageState: Readable<App.PageState>
    setPageState(state: App.PageState): void
    updatePageState(state: Partial<App.PageState>): void
}

let pageState: Readable<App.PageState> = derived(page, (
    ($page: Page): App.PageState => $page.state
))

export function usePageState(): IUsePageState {
    return {
        updatePageState: (): void => {
            tick().then(() => (
                replaceState("", merge(get(pageState), pageState))
            ))
        },
    }
}
