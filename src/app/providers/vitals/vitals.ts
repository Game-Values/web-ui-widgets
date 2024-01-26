export function vitals(): void {
    import("web-vitals")
        .then(({ onCLS, onFCP, onFID, onLCP, onTTFB }): void => {
            onCLS(console.info)
            onFID(console.info)
            onFCP(console.info)
            onLCP(console.info)
            onTTFB(console.info)
        })
}
