import type { SeoRaw, SeoStore } from "~/types"

import { Seo } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useSeoStore: (storeId?: string) => SeoStore.Store = createStore<
    SeoStore.Id,
    SeoStore.State,
    SeoStore.Getters,
    SeoStore.Actions
>("seoStore", {
    actions: {
        setSeoRaw(seoRaw: SeoRaw): void {
            this.seoRaw = seoRaw
        },
    },

    getters: {
        seo(): Seo {
            return createModel(Seo, this.seoRaw)
        },
    },

    state: (): SeoStore.State => ({
        seoRaw: {
            description: "",
            image: "",
            title: "",
        },
    }),
})
