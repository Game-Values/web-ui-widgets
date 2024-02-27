// import type { IHeaders } from "$types"
//
// import { useApi } from "$api"
// import { Currency, Locale, Theme } from "$lib/enums"
// import { getSessionHeaders } from "$lib/helpers"
// import { useSession } from "$model"
//
// export async function handle({ event, resolve }): Promise<Response> {
//     let { logout } = useSession()
//
//     let headers: IHeaders = getSessionHeaders(event)
//
//     event.locals = {
//         api: useApi({
//             baseApiParams: {
//                 headers: Object.fromEntries(headers.entries()),
//             },
//         }),
//         session: {
//             currency: Currency.EUR,
//             locale: Locale.EN,
//         },
//     }
//
//     if (headers.has("authorization"))
//         try {
//             event.locals.session.user = await event.locals.api.readUserApiV1UsersGet()
//         } catch {
//             logout()
//         }
//
//     return resolve(event, {
//         transformPageChunk: ({ html }): string => (
//             html
//                 .replace("%sveltekit.lang%", Locale.EN)
//                 .replace("%sveltekit.theme%", Theme.DARK)
//         ),
//     })
// }
