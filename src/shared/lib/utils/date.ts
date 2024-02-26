import { format } from "date-fns"

export function humanizeDate(date: string): string {
    return format(new Date(date), "dd.MM.yy")
}

export function humanizeDateWithTime(date: string): string {
    return `${humanizeDate(date)}, ${format(new Date(date), "HH:mm")}`
}
