import type { Component } from "vue"

export function resolveAsyncComponent(filepath: string): Promise<Component> {
    return defineAsyncComponent((): Component => import(`../${filepath}`))
}
