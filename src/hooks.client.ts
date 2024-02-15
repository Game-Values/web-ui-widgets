import { withSwiper, withVitals } from "~/app/providers"

await Promise.all([
    withSwiper(),
    withVitals(),
])
