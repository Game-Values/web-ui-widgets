import { HttpCookie } from "$lib"

export async function handle({ event, resolve }): Promise<Response> {
    event.locals.authToken = {
        access_token: event.cookies.get(HttpCookie.ACCESS_TOKEN) || "",
        chat_token: event.cookies.get(HttpCookie.CHAT_TOKEN) || "",
        chat_uid: event.cookies.get(HttpCookie.CHAT_UID) || "",
        refresh_token: event.cookies.get(HttpCookie.REFRESH_TOKEN) || "",
        token_type: event.cookies.get(HttpCookie.TOKEN_TYPE) || "",
    }

    return resolve(event)
}
