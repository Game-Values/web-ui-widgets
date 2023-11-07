import tailwindAspectRatio from "@tailwindcss/aspect-ratio"
import tailwindForms from "@tailwindcss/forms"
import tailwindTypography from "@tailwindcss/typography"

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",

        "blue-accent-medium": "#3478F6",
        "grey-dark": "#1B1B1C",
      },
    },
  },

  corePlugins: {
    aspectRatio: false,
  },

  plugins: [
    tailwindAspectRatio,
    tailwindForms,
    tailwindTypography,
  ],
}
