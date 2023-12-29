import type { AsyncComponent } from "~/types"
import type { ToastOptions } from "vexip-ui"
import type { Component } from "vue"

import { ToastAbstract } from "~/abstract"

export class DeletedLotToast extends ToastAbstract {
    protected __component: AsyncComponent = defineAsyncComponent(
        (): Promise<Component> => import("~/views/toast/DeletedLot.vue"),
    )

    protected __options: ToastOptions = {
        type: "warning",
    }
}
