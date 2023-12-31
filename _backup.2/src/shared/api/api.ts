import { Api } from "@/schema/Api"
import { http } from "~/shared/api"

export let api: Api = new Api(http)
