import type { CollectionAbstract } from "~/abstract"
import type { ClassConstructor } from "class-transformer"

import { plainToInstance } from "class-transformer"

export function createCollection<
    T extends CollectionAbstract<any, Raw>,
    Raw extends object[],
>(
    Collection: ClassConstructor<T>,
    raw: Raw[],
): T {
    return new Collection(raw || [])
}

export function createModel<
    T extends object,
    Raw extends object,
>(
    Model: ClassConstructor<T>,
    raw: Raw,
): T {
    return plainToInstance(Model, raw, {
        excludeExtraneousValues: true,
        excludePrefixes: [
            "_",
        ],
    })
}
