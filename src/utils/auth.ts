export function isAuthenticated(): boolean {
    return getRef(useAuth())
}

export function isUnauthenticated(): boolean {
    return !isAuthenticated()
}
