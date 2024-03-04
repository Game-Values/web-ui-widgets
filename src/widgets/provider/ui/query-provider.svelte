<script lang="ts">
import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query"

interface $$Slots {
    default: NonNullable<unknown>
}

let queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})
</script>

<QueryClientProvider client={queryClient}>
    <slot />
</QueryClientProvider>
