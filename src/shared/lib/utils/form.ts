import type { IFormSelectOption, IKeyOf } from "$types"

import { get } from "lodash-es"

export function mapFormSelectOption<T extends object>(
    data: T,
    keys?: IFormSelectOption & { label?: IKeyOf<T>, value?: IKeyOf<T> },
): IFormSelectOption {
    return {
        label: get(data, keys?.label || "label", "") as string,
        value: get(data, keys?.value || "value", "") as string,
    }
}
