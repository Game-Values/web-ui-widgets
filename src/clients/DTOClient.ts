import type { CollectionAbstract } from "~/abstract"
import type { ClassConstructor, ClassTransformOptions } from "class-transformer"
import type { ValidatorOptions } from "class-validator"

import { plainToClass } from "class-transformer"
import { validateOrReject } from "class-validator"

export class DTOClient {
    private _modelOptions: ClassTransformOptions = {
        excludeExtraneousValues: true,
        excludePrefixes: [
            "_",
        ],
    }

    private _validatorOptions: ValidatorOptions = {
        // todo (?)
    }

    public createCollection<
        T extends CollectionAbstract<any, Raw>,
        Raw extends object,
    >(
        Collection: ClassConstructor<T>,
        raw: Raw[],
    ): T {
        return new Collection(raw)
    }

    public createModel<
        T extends object,
        Raw extends object,
    >(
        Model: ClassConstructor<T>,
        raw: Raw,
    ): T {
        return plainToClass(Model, raw, this._modelOptions)
    }

    public async validateCollection<T extends CollectionAbstract<any, any>>(collection: T): Promise<void[]> {
        return Promise.all(
            collection.items.map((item: any): Promise<void> => (
                validateOrReject(item, this._validatorOptions)
            )),
        )
    }

    public async validateModel<T extends object>(model: T): Promise<void> {
        return validateOrReject(model, this._validatorOptions)
    }
}
