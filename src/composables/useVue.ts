export function useNextTick(cb: CallableFunction): Promise<void> {
    return nextTick().then((): void => {
        requestAnimationFrame((): void => cb())
    })
}
