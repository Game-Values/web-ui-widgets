import type { ReportCallback } from "web-vitals"

import { isFunction } from "lodash-es"

export function vitals(reportCallback: ReportCallback): void {
    if (isFunction(reportCallback))
        import("web-vitals")
            .then(({ onCLS, onFCP, onFID, onLCP, onTTFB }): void => {
                onCLS(reportCallback)
                onFID(reportCallback)
                onFCP(reportCallback)
                onLCP(reportCallback)
                onTTFB(reportCallback)
            })
}
