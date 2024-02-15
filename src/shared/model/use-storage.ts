import type { IKeyOf, IValueOfRecord } from "$types"
import type { Readable, Writable } from "svelte/store"

import { isNil } from "lodash-es"
import { derived, get, writable } from "svelte/store"

import { onClient } from "$lib/helpers"

type IStorage = {
    drawer: boolean
}

type IStorageKey = IKeyOf<IStorage>

type IStorageVal = IValueOfRecord<IStorage>

type IUseStorage = {
    getStorage<T extends IStorageVal>(): T
    hasStorage(): boolean
    setStorage(val: IStorageVal): void
    storageValue: Readable<IStorageVal>
}

const STORE_KEY: string = "game-values-store"

let store: Writable<IStorage> = writable(Object.create(null))

onClient((): void => {
    if (localStorage.getItem(STORE_KEY))
        store.set(JSON.parse(localStorage.getItem(STORE_KEY)!))

    store.subscribe((val: IStorage): void => (
        localStorage.setItem(STORE_KEY, JSON.stringify(val))
    ))
})

export function useStorage(key: IStorageKey, defaultVal?: IStorageVal): IUseStorage {
    let use: IUseStorage = {
        getStorage: <T extends IStorageVal>(): T => get(store)[key] as T,

        hasStorage: (): boolean => !isNil(use.getStorage()),

        setStorage: (val: IStorageVal): void => (
            store.set(Object.assign(get(store), { [key]: val }))
        ),

        storageValue: derived(store, ($store: IStorage): IStorageVal => $store[key]),
    }

    if (defaultVal && !use.hasStorage())
        use.setStorage(defaultVal)

    return use
}
