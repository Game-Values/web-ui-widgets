export function isClient(): boolean {
    return !isServer()
}

export function isServer(): boolean {
    return Boolean(process.server)
}
