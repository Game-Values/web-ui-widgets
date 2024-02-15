export interface ImportMeta {
    readonly env: ImportMetaEnv
}

export interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_OPENAPI_URL: string
}
