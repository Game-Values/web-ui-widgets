import type { IModal } from "$types"
import type { Readable } from "svelte/store"

import { derived } from "svelte/store"

import { usePageState } from "$model"

type IUseModal = {
    closeModal(): void
    modalOpened: Readable<boolean>
    openModal(): void
}

export function useModal(modal: IModal): IUseModal {
    let { pageState, updatePageState } = usePageState()

    return {
        closeModal: (): void => (
            updatePageState({ modal: undefined })
        ),

        modalOpened: derived(pageState, ($pageState: App.PageState): boolean => (
            $pageState.modal === modal
        )),

        openModal: (): void => (
            updatePageState({ modal })
        ),
    }
}
