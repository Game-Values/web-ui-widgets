import type { AsyncComponent } from "~/types"
import type { ConfirmOptions } from "vexip-ui"
import type { Component } from "vue"

import { ConfirmAbstract } from "~/abstract"

export class DeletedLotConfirm extends ConfirmAbstract {
    protected __component: AsyncComponent = defineAsyncComponent(
        (): Promise<Component> => import("~/views/confirm/DeletedLot.vue"),
    )

    protected __options: ConfirmOptions = {
        closable: true,
    }
}
