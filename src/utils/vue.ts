export function isSetup(): boolean {
    return Boolean(getCurrentInstance()?.proxy)
}
