import type { ClassConstructor } from "class-transformer"

import { createModel } from "~/factories"

export abstract class CollectionAbstract<
    T extends object,
    Raw extends object,
> extends Array<T> {
    public constructor(items: Raw[] = []) {
        super()

        let collection: T[] = useMap(items, (item: Raw): T => createModel(this.__Model, item))
        this.push(...collection)
    }

    public getById(id: string): T | undefined {
        return this.find((item: T): boolean => useGet(item, "id") === id)
    }

    protected abstract get __Model(): ClassConstructor<T>
}
