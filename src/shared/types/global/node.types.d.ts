declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production"
            PUBLIC_BASE_ADDRESS: "http://www.localhost:3000" | "https://www.game-values.com"
            PUBLIC_SERVER_PORT: 3000 | 80
            VITE_API_URL: string
            VITE_OPENAPI_URL: string
        }
    }
}

export {}
