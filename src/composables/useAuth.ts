import type { Ref } from "vue"

export function useAuth(): Ref<boolean> {
    return useState<boolean>("authenticated", (): boolean => false)
}
