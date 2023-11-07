import "@nuxt/schema"

declare module "@nuxt/schema" {
    interface RuntimeConfig {
        public: PublicRuntimeConfig
    }

    interface PublicRuntimeConfig {
        baseURL: string
    }
}
