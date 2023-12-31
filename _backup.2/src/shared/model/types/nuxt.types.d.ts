declare module "nuxt/schema" {
    export interface RuntimeConfig {
        public: PublicRuntimeConfig
    }

    export interface PublicRuntimeConfig {
        apiURL: string
    }
}
