import { Callable, Lazy } from "~/types"

export async function useNextTick(cb: Callable | Lazy): Promise<void> {
    await nextTick()
    await new Promise((resolve: Callable): void => (
        requestAnimationFrame(async (): Promise<void> => {
            await cb()

            resolve()
        })
    ))
}
