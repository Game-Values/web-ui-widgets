export function refreshArray<T extends any[]>(target: T, newArr: T): void {
    target.length = 0
    target.push(...newArr)
}
