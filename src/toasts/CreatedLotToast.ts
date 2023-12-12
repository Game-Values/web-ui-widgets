import type { AsyncComponent } from "~/types"
import type { ToastOptions } from "vexip-ui"
import type { Component } from "vue"

import { ToastAbstract } from "~/abstract"
import { TOAST_DURATION } from "~/consts"

export class CreatedLotToast extends ToastAbstract {
    protected __component: AsyncComponent = defineAsyncComponent(
        (): Promise<Component> => import("~/views/toast/CreatedLot.vue"),
    )

    protected __options: ToastOptions = {
        closable: true,
        duration: TOAST_DURATION,
        type: "success",
    }
}
