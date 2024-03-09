// import postcssImport from "postcss-import"
// import tailwindcss from "tailwindcss"
//
// /** @type {import("postcss-load-config").Config} */
// export default {
//     plugins: [
//         postcssImport,
//         tailwindcss,
//     ],
// }

/** @type {import("postcss-load-config").Config} */
module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss"),
    ],
}
