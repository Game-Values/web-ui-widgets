import type { AsyncComponent } from "~/types"
import type { ToastOptions } from "vexip-chat-send-hub-message-form"
import type { Component } from "vue"

import { ToastAbstract } from "~/abstract"

export class CreatedLotToast extends ToastAbstract {
    protected __component: AsyncComponent = defineAsyncComponent(
        (): Promise<Component> => import("~/views/toast/CreatedLot.vue"),
    )

    protected __options: ToastOptions = {
        type: "success",
    }
}
