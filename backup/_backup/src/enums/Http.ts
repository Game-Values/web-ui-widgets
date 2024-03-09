export { default as HttpStatus } from "http-status"

export enum HttpCookie {
    ACCESS_TOKEN = "access_token",
    CHAT_TOKEN = "chat_token",
    CHAT_UID = "chat_uid",
    REFRESH_TOKEN = "refresh_token",
    TOKEN_TYPE = "token_type",
}

export enum HttpHeader {
    ACCEPT = "accept",
    AUTHORIZATION = "authorization",
    COOKIE = "cookie",
}

export enum HttpToken {
    BEARER = "bearer",
}
