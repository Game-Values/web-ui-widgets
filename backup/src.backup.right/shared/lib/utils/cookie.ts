import type { ICookieAttributes } from "~/shared/lib"

import Cookie from "js-cookie"

export function removeCookie(
    name: string,
    options?: Omit<ICookieAttributes, "name" | "value">,
): void {
    Cookie.remove(name, options)
}

export function removeCookies(cookies: Omit<ICookieAttributes, "value">[]): void {
    cookies.forEach(({ name, ...options }) => {
        removeCookie(name, options)
    })
}

export function getCookie(name: string): string | undefined {
    return Cookie.get(name)
}

export function getCookies(): Record<string, string> {
    return Cookie.get()
}

export function setCookie(
    name: string,
    val: string,
    options?: Omit<ICookieAttributes, "name" | "value">,
): string | undefined {
    return Cookie.set(name, val, options)
}

export function setCookies(
    cookies: ICookieAttributes[],
): void {
    cookies.forEach(({ name, value, ...options }) => {
        setCookie(name, value, options)
    })
}
