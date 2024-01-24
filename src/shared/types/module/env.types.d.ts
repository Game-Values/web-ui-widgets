interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_API_URL: string
    readonly VITE_OPENAPI_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
