import type { ClassConstructor, ClassTransformOptions } from "class-transformer"

export class DTOClient {
    private _modelConfig: ClassTransformOptions = {
        excludeExtraneousValues: true,
        excludePrefixes: [
            "_",
        ],
    }

    public createCollection<
        T extends object,
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
        return plainToClass(Model, raw, this._modelConfig)
    }
}
