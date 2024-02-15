import { PluginHookParameters, PluginHookReturn } from "@hebilicious/vue-query-nuxt/dist/runtime/types"

export default defineVueQueryPluginHook(({ queryClient }: PluginHookParameters): PluginHookReturn => (
    {
        pluginReturn: {},
        vueQueryPluginOptions: {
            queryClient: useMerge(queryClient, {
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        staleTime: 60 * 5000, // 5 min
                    },
                },
            }),
        },
    }
))
