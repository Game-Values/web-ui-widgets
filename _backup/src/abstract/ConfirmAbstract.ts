import type { AsyncComponent, Callable } from "~/types"
import type { ConfirmOptions } from "vexip-ui"
import type { Component, ComponentCustomProps } from "vue"

import { Confirm } from "vexip-ui"

interface ConfirmOpenOptions {
    confirm?: ConfirmOptions
    props?: ComponentCustomProps
}

export abstract class ConfirmAbstract {
    private get _options(): ConfirmOptions {
        return useAssign({
            closable: true,
        }, this.__options)
    }

    public async confirm(options?: ConfirmOpenOptions): Promise<boolean> {
        return Confirm.open(
            useMerge(this._options, options?.confirm, {
                renderer: (
                    confirmOptions: ConfirmOptions,
                    confirm: Callable<boolean>,
                    cancel: Callable<boolean>,
                ): Component => (
                    h(this.__component, (
                        useMerge(options?.props, {
                            cancel,
                            confirm,
                            confirmOptions,
                        })
                    ))
                ),
            }),
        )
    }

    protected abstract __component: AsyncComponent

    protected abstract __options: ConfirmOptions
}
