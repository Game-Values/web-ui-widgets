import type { Writable } from "svelte/store"

import { writable } from "svelte/store"

export let isAuthLoginModalOpen: Writable<boolean> = writable(false)

export let isAuthSignupModalOpen: Writable<boolean> = writable(false)

export function openAuthLoginModal(): void {
    isAuthLoginModalOpen.set(true)
}

export function closeAuthLoginModal(): void {
    isAuthLoginModalOpen.set(false)
}

export function openAuthSignupModal(): void {
    isAuthSignupModalOpen.set(true)
}

export function closeAuthSignupModal(): void {
    isAuthSignupModalOpen.set(false)
}
