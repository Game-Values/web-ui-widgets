import type { Writable } from "svelte/store"

import { writable } from "svelte/store"

export let isAuthModalOpen: Writable<boolean> = writable(false)

export function openAuthModal(): void {
    isAuthModalOpen.set(true)
}

export function closeAuthModal(): void {
    isAuthModalOpen.set(false)
}
