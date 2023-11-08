import type { ClassConstructor } from "class-transformer"

export abstract class CollectionAbstract<
    T extends object,
    Raw extends object,
> {
    public constructor(
        private _items: Raw[],
    ) {}

    public getById(id: number | string): T | undefined {
        return this.getItemsMap("id").get(id)
    }

    public getItemsMap(key: number | string = "id"): Map<number | string, T> {
        let itemsMap: Map<number | string, T> = new Map()

        this.items.forEach((item: T, i: number): void => {
            itemsMap.set(useGet(this.items, key.toString(), i), item)
        })

        return itemsMap
    }

    public get count(): number {
        return this._items.length
    }

    public get items(): T[] {
        return this._items.map((item: Raw): T => new this.__Model(item))
    }

    public get itemsSet(): Set<T> {
        return new Set(this.items)
    }

    protected abstract __Model: ClassConstructor<T>
}
