import "vuetify/styles"
import { createVuetify } from "vuetify"

export default defineNuxtPlugin((app) => {
    app.vueApp.use(
        createVuetify({
            ssr: true,
        })
    )
})
