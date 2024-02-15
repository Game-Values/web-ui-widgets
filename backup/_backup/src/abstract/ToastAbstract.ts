import type { AsyncComponent } from "~/types"
import type { ToastOptions } from "vexip-ui"
import type { Component, ComponentCustomProps } from "vue"

import { Toast } from "vexip-ui"

import { TOAST_DURATION } from "~/enums"

interface ToastOpenOptions {
    props?: ComponentCustomProps
    toast?: ToastOptions
}

export abstract class ToastAbstract {
    private get _options(): ToastOptions {
        return useAssign({
            closable: true,
            duration: TOAST_DURATION,
            maskClose: true,
            showMask: true,
        }, this.__options)
    }

    public async open(options?: ToastOpenOptions): Promise<() => void> {
        return Toast.open(
            useMerge(this._options, options?.toast, {
                renderer: (): Component => (
                    h(this.__component, options?.props)
                ),
            }),
        )
    }

    protected abstract __component: AsyncComponent

    protected abstract __options: ToastOptions
}
