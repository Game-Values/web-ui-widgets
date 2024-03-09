import { Locale } from "$lib/enums"

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param: string): boolean {
    return Object
        .values<string>(Locale)
        .includes(param)
}
