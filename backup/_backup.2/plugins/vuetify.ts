import { createVuetify } from "vuetify"

import { THEME_COLORS } from "@/config/consts"

export default defineNuxtPlugin((app) => {
    app.vueApp.use(
        createVuetify({
            defaults: {
                VAppBar: {
                    color: "transparent",
                    density: "comfortable",
                    elevation: 0,
                },
                VBtn: {
                    density: "comfortable",
                },
                VCard: {
                    color: "transparent",
                    density: "comfortable",
                    elevation: 0,
                },
                VFooter: {
                    color: "transparent",
                    density: "comfortable",
                },
                VTextField: {
                    color: "primary",
                    variant: "outlined",
                    density: "comfortable",
                },
            },

            ssr: true,

            theme: {
                defaultTheme: "dark",
                themes: {
                    dark: {
                        colors: THEME_COLORS,
                        dark: true,
                    },
                },
                variations: {
                    colors: [
                        "accent",
                        "black",
                        "grey",
                        "negative",
                        "positive",
                        "white",
                    ],
                    lighten: 5,
                    darken: 5,
                },
            },
        })
    )
})
