import type { HTMLAttributes } from "svelte/elements"
import type { SwiperOptions } from "swiper/types"

declare module "svelte/elements" {
    export interface SvelteHTMLElements {
        "swiper-container": HTMLAttributes & SwiperOptions
        "swiper-slide": HTMLAttributes
    }
}
