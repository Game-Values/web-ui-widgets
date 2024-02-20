declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production"
            PORT: 3000 | 80
            VITE_API_URL: string
            VITE_OPENAPI_URL: string
        }
    }
}

export {}
