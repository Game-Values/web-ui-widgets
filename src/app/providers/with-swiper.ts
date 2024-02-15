export function withSwiper(): Promise<void> {
    return import("swiper/element/bundle")
        .then(({ register }): void => register())
}
