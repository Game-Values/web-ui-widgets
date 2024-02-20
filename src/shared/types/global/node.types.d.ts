declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production"
            VITE_API_URL: string
            VITE_OPENAPI_URL: string
        }
    }
}

export {}
