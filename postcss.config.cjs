import postcssImport from "postcss-import"
import tailwindcss from "tailwindcss"

/** @type {import("postcss-load-config").Config} */
export default {
    plugins: [
        postcssImport,
        tailwindcss,
    ],
}
