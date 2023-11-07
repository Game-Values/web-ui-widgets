/**
 * @see https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
 */

/**
 * @see https://lodash.com/docs/#isArray
 */
export function isArray(target: any): boolean {
    return Array.isArray(target)
}

/**
 * @see https://lodash.com/docs/#isDate
 */
export function isDate(target: any): boolean {
    return Object.prototype.toString.call(target) === "[object Date]"
}

/**
 * @see https://lodash.com/docs/#isDate
 */
export function isBoolean(target: any): boolean {
    return typeof target === "boolean"
}

/**
 * @see https://lodash.com/docs/#isDate
 */
export function isEmpty(target: any): boolean {
    return (
        [Array, Object].includes(target?.constructor) &&
        !useEntries(target).length
    )
}

/**
 * @see https://lodash.com/docs/#isNil
 */
export function isNil(target: any): boolean {
    return (
        isNull(target) ||
        isUndefined(target)
    )
}

/**
 * @see https://lodash.com/docs/#isNull
 */
export function isNull(target: any): boolean {
    return target === null
}

/**
 * @see https://lodash.com/docs/#isUndefined
 */
export function isUndefined(target: any): boolean {
    return target === undefined
}

/**
 * @see https://lodash.com/docs/#isFunction
 */
export function isFunction(target: any): boolean {
    return typeof target === "function"
}

/**
 * @see https://lodash.com/docs/#isObject
 */
export function isObject(target: any): boolean {
    return (
        ["function", "object"].includes(typeof target) &&
        Boolean(target)
    )
}

/**
 * @see https://lodash.com/docs/#isString
 */
export function isString(target: any): boolean {
    return (
        !isNil(target) &&
        typeof target.valueOf() === "string"
    )
}

/**
 * @see https://lodash.com/docs/#entries
 */
export function useEntries(target: any): [string, unknown][] {
    return Object.entries(isObject(target) ? target : {})
}

/**
 * @see https://lodash.com/docs/#keys
 */
export function useKeys(target: any): string[] {
    return Object.keys(isObject(target) ? target : {})
}

/**
 * @see https://lodash.com/docs/#values
 */
export function useValues<T = unknown>(target: any): T[] {
    return Object.values(isObject(target) ? target : {})
}

/**
 * @see https://lodash.com/docs/#includes
 */
export function useIncludes(target: any[], val: any, fromIndex?: number): boolean {
    return Boolean(~target.indexOf(val, fromIndex))
}

/**
 * @see https://lodash.com/docs/#first
 */
export function useFirst<T = any>(target: any): T {
    if (isArray(target))
        return target.at(0)

    return target?.toString().at(0)
}

/**
 * @see https://lodash.com/docs/#last
 */
export function useLast<T = any>(target: any): T {
    if (isArray(target))
        return target.at(-1)

    return target?.toString().at(-1)
}

/**
 * @see https://lodash.com/docs/#get
 */
export function useGet<T = any>(
    target: any,
    path: string | string[],
    defaultValue?: T | undefined,
): T | undefined {
    let travel: (re: RegExp) => object = (re: RegExp): object =>
        String.prototype.split
            .call(path || "", re)
            .filter(Boolean)
            .reduce((result: any, key: string) => (!isNil(result) ? result[key] : result), target)

    let result = (
        travel(/[,[\]]+?/) ||
        travel(/[,[\].]+?/)
    )

    return (
        result === undefined ||
        result === target
            ? defaultValue
            : result
    ) as T | undefined
}

/**
 * @see https://lodash.com/docs/#assign
 */
export function useAssign<T = any>(target: T, ...sources: any[]): T & any {
    return Object.assign(target || {}, ...sources)
}

/**
 * @see https://lodash.com/docs/#clone
 */
export function useClone<T = any>(target: T): T {
    return Object.assign({}, target)
}

/**
 * @see https://lodash.com/docs/#cloneDeep
 */
export function useCloneDeep<T = any>(target: T): T {
    return structuredClone<T>(target)
}

/**
 * @see https://lodash.com/docs/#has
 */
export function useHas(target: any, key: string): boolean {
    let keys: string[] = key.split(".")

    return (
        isObject(target) &&
        isBoolean(keys.length)
            ? useHas(target[useFirst(keys)], keys.slice(1).join("."))
            : Object.hasOwnProperty.call(target, key)
    )
}

/**
 * @see https://lodash.com/docs/#merge
 */
export function useMerge<T extends object, S = Partial<T>>(target: T, source: S): T {
    if (isObject(target) && isObject(source))
        useKeys(source).forEach((key: string): T & S => (
            useAssign(target, {
                [key]: isObject(useGet(source, key)) && useHas(target, key)
                    ? useMerge(useGet(target, key), useGet(source, key))
                    : useGet(source, key),
            })
        ))

    return target
}