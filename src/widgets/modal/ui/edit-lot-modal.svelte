<script lang="ts">
import type { IEditLotModalState } from "~/widgets/modal"

import { LotForm } from "~/features/lot"

import { useModal, useState } from "$model"
import { Modal } from "$ui/actions"

let { state } = useState()
let { closeModal, modalState } = useModal<IEditLotModalState>($state.modal)
</script>

<Modal
    name="edit-lot"
    title="Edit lot"
>
    <LotForm
        action="edit"
        game={$modalState.game}
        lot={$modalState.lot}
        on:submit={e => {
            $modalState.update(e.detail)
            closeModal()
        }}
    />
</Modal>
