import type { DefineStore, SeoRaw } from "~/types"

import { Seo } from "~/dto"
import { createModel, createStore } from "~/factories"

export namespace SeoStore {
    export type Id = "seoStore"

    export type State = {
        seoRaw: SeoRaw
    }

    export type Getters = {
        seo: () => Seo
    }

    export type Actions = {
        setSeoRaw: (seoRaw: SeoRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

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
