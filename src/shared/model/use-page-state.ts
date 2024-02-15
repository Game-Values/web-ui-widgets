import type { Page } from "@sveltejs/kit"
import type { Readable } from "svelte/store"

import { derived, get } from "svelte/store"

import { replaceState } from "$app/navigation"
import { page } from "$app/stores"

type IUsePageState = {
    pageState: Readable<App.PageState>
    setPageState(pageState: App.PageState): void
    updatePageState(pageState: Partial<App.PageState>): void
}

export function usePageState(): IUsePageState {
    let use: IUsePageState = {
        pageState: derived(page, (
            ($page: Page): App.PageState => $page.state
        )),

        setPageState: (pageState: Partial<App.PageState>): void => (
            replaceState("", pageState)
        ),

        updatePageState: (pageState: Partial<App.PageState>): void => (
            replaceState("", Object.assign(get(use.pageState), pageState))
        ),
    }

    return use
}
