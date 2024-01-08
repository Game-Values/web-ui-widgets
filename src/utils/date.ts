import { format } from "date-fns"

export function formatDate(date: string, formatStr: string): string {
    window.format = format
    return format(new Date(date), formatStr, {
        locale: useClients().routerClient.getRouteParam("locale"),
    })
}
