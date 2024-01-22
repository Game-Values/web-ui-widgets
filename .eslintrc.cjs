/** @type { import("eslint").Linter.Config } */
module.exports = {
    root: true,

    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:svelte/recommended",
        "@logux/eslint-config/svelte",
        "prettier",
    ],

    parser: "@typescript-eslint/parser",

    plugins: [
        "@typescript-eslint",
    ],

    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        extraFileExtensions: [
            ".svelte",
        ],
    },

    env: {
        browser: true,
        es2022: true,
        node: true,
    },

    rules: {
        "@typescript-eslint/no-confusing-void-expression": "off",

        "no-return-assign": "off",

        "import/extensions": ["off", {
            scss: "always",
            svelte: "always",
            ts: "never",
        }],

        semi: "error",

        curly: ["error", "multi", "consistent"],
        indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["error", "double"],

        "eol-last": "error",
        "key-spacing": "error",
        "no-param-reassign": "error",
        "no-multiple-empty-lines": "error",

        "arrow-parens": ["error", "as-needed"],
        "comma-dangle": ["error", "always-multiline"],
        "object-curly-spacing": ["error", "always"],
        "quote-props": ["error", "as-needed"],

        "max-len": ["error", {
            code: 100,
            tabWidth: 4,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        }],

        "operator-linebreak": ["error", "after", {
            overrides: {
                "?": "before",
                ":": "before",
            },
        }],

        "perfectionist/sort-imports": ["error", {
            type: "natural",
            order: "asc",
            groups: [
                [
                    "type",
                    "builtin-type",
                    "external-type",
                    "internal-type",
                    "parent-type",
                    "sibling-type",
                    "index-type",
                ],

                "builtin",
                "external",
                "virtual:icons",
                "internal",
                "svelte",

                [
                    "$app",
                    "$lib",
                    "parent",
                    "siblings",
                    "index",
                ],
            ],
            "custom-groups": {
                value: {
                    "$app": "$app/**",
                    "$lib": "$lib",
                    "virtual:icons": "virtual:icons/**",
                },
            },
        }],

        "space-before-function-paren": ["error", {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
        }],
    },

    overrides: [
        {
            files: [
                "*.svelte",
            ],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
            },
            rules: {
                "svelte/no-unused-class-name": "off",

                "svelte/html-self-closing": ["error", "all"],

                "svelte/indent": ["error", {
                    alignAttributesVertically: true,
                    indent: 4,
                    indentScript: false,
                }],
            },
        },
    ],
}
