import type { IModal } from "$types"
import type { Readable } from "svelte/store"

import { derived } from "svelte/store"

import { useState } from "$model"

type IUseModal = {
    closeModal(): void
    modalOpened: Readable<boolean>
    openModal(): void
}

export function useModal(modal: IModal): IUseModal {
    let { state, updateState } = useState()

    return {
        closeModal: (): void => updateState({ modal: undefined }),

        modalOpened: derived(state, ($state: App.PageState): boolean => $state.modal === modal),

        openModal: (): void => updateState({ modal }),
    }
}
