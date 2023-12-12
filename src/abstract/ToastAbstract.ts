import type { AsyncComponent } from "~/types"
import type { ToastOptions } from "vexip-ui"
import type { Component, ComponentCustomProps } from "vue"

import { Toast } from "vexip-ui"

interface ToastOpenOptions {
    props?: ComponentCustomProps
    toast?: ToastOptions
}

export abstract class ToastAbstract {
    public async open(options?: ToastOpenOptions): Promise<() => void> {
        return Toast.open(
            useMerge(this.__options, options?.toast, {
                renderer: (): Component => (
                    h(this.__component, options?.props)
                ),
            }),
        )
    }

    protected abstract __component: AsyncComponent

    protected abstract __options: ToastOptions
}
