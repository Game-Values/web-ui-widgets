import { format, formatDistance } from "date-fns"

export function humanizeDate(date: Date | string): string {
    return format(new Date(date), "dd.MM.yy")
}

export function humanizeDateWithTime(date: Date | string): string {
    return `${humanizeDate(date)}, ${format(new Date(date), "HH:mm")}`
}

export function timeAgo(date: Date | string): string {
    return formatDistance(new Date(date), new Date(), { addSuffix: true })
}
