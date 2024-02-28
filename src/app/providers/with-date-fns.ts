import { setDefaultOptions } from "date-fns"
import { get } from "svelte/store"

import { useSession } from "$model"

export function withDateFns(): Promise<void> {
    let { locale } = useSession()

    // @ts-expect-error get(locale) is correct dynamic key
    return import("date-fns/locale").then(({ [get(locale)]: dateFnsLocale }): void => {
        if (dateFnsLocale)
            setDefaultOptions({ locale: dateFnsLocale })
    })
}
