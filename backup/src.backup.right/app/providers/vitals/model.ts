import type { ReportCallback } from "web-swiper"

import { isFunction } from "lodash-es"

export function vitals(reportCallback: ReportCallback): void {
    if (isFunction(reportCallback))
        import("web-swiper")
            .then(({ onCLS, onFCP, onFID, onLCP, onTTFB }): void => {
                onCLS(reportCallback)
                onFID(reportCallback)
                onFCP(reportCallback)
                onLCP(reportCallback)
                onTTFB(reportCallback)
            })
}
