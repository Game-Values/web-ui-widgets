import type { AsyncComponent } from "~/types"
import type { ToastOptions } from "vexip-ui"
import type { Component } from "vue"

import { ToastAbstract } from "~/abstract"

export class OrderCancelledToast extends ToastAbstract {
    protected __component: AsyncComponent = defineAsyncComponent(
        (): Promise<Component> => import("~/views/toast/OrderCancelled.vue"),
    )

    protected __options: ToastOptions = {
        duration: 0,
        type: "error",
    }
}
