import type { IModal } from "$types"
import type { Readable } from "svelte/store"

import { derived } from "svelte/store"

import { useState } from "$model"

type IUseModal<T> = {
    closeModal(): void
    modalOpened: Readable<boolean>
    modalState: Readable<T>
    openModal(modalState: any): void
}

export function useModal<T = never>(modal: IModal): IUseModal<T> {
    let { state, updateState } = useState()

    return {
        closeModal: (): void => updateState({ modal: undefined, modalState: undefined }),

        modalOpened: derived(state, ($state: App.PageState): boolean => $state.modal === modal),

        modalState: derived(state, ($state: App.PageState): T => $state.modalState),

        openModal: (modalState: any): void => updateState({ modal, modalState }),
    }
}
