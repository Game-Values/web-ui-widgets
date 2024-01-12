export function refreshArray<T extends any[]>(target: T, newArr: T): T {
    target.length = 0
    target.push(...newArr)

    return target
}
