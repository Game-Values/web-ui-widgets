import type { IModal } from "$types"
import type { Page } from "@sveltejs/kit"
import type { Readable } from "svelte/store"

import { derived } from "svelte/store"

import { replaceState } from "$app/navigation"
import { page } from "$app/stores"

type IUseModal = {
    closeModal(): void
    modalOpened: Readable<boolean>
    openModal(): void
}

export function useModal(modal: IModal): IUseModal {
    return {
        closeModal: (): void => replaceState("", { modal: undefined }),

        modalOpened: derived(page, ($page: Page): boolean => $page.state.modal === modal),

        openModal: (): void => replaceState("", { modal }),
    }
}
