export function withBaseURL(url: string): string {
    return useRuntimeConfig().public.baseURL + url
}
