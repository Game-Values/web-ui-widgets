import { Api } from "@/schema/Api"
import { http } from "~/shared/httpInstance"

export let api: Api = new Api(http)
