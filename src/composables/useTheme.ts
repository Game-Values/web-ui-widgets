export function useTheme(keypath: string): string {
    return useGet<string>(useRuntimeConfig().public.theme, keypath)
}
