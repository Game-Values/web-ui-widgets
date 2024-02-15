import { LRUCache } from "lru-cache"

export let cache: LRUCache<string, object> = new LRUCache({
    max: 500,
    ttl: 1000 * 60 * 5,
})
