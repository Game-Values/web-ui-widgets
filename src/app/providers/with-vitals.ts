export function withVitals(): Promise<void> {
    return import("web-vitals")
        .then(({ onCLS, onFCP, onFID, onLCP, onTTFB }): void => {
            onCLS(console.info)
            onFCP(console.info)
            onFID(console.info)
            onLCP(console.info)
            onTTFB(console.info)
        })
}
