import type { CustomPath as CustomPathRaw } from "vite-plugin-kit-routes/esm/plugin"

declare module "vite-plugin-kit-routes" {
    export type CustomPath = CustomPathRaw
}
