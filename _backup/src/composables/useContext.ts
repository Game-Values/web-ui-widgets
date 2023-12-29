import type { Context } from "~/types"

export function useContext(): Context {
    return (
        isServer()
            ? useNuxtApp().ssrContext!.event.context
            : (window.context = window.context || {})
    ) as Context
}
