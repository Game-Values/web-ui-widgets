/** @type { import("eslint").Linter.Config } */
module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },

    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:svelte/recommended",
        "@logux/eslint-config/svelte",
        "prettier",
    ],

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
                "svelte/html-self-closing": ["error", "all"],
                "svelte/indent": ["error", {
                    alignAttributesVertically: true,
                    indent: 4,
                    indentScript: false,
                }],
                "svelte/no-at-html-tags": "off",
                "svelte/no-inline-styles": "off",
                "svelte/no-unused-class-name": "off",
            },
        },
    ],

    parser: "@typescript-eslint/parser",

    parserOptions: {
        ecmaVersion: 2020,
        extraFileExtensions: [".svelte"],
        sourceType: "module",
    },

    plugins: [
        "@typescript-eslint",
    ],

    root: true,

    rules: {
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            varsIgnorePattern: "^\\$\\$",
        }],
        "arrow-parens": ["error", "as-needed"],
        camelcase: "off",
        "comma-dangle": ["error", "always-multiline"],
        curly: ["error", "multi", "consistent"],
        "eol-last": "error",
        "import/extensions": ["off", {
            css: "always",
            svelte: "always",
            ts: "never",
        }],
        indent: ["error", 4, { SwitchCase: 1 }],
        "key-spacing": "error",
        "max-len": ["error", {
            code: 120,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            tabWidth: 4,
        }],
        "no-multiple-empty-lines": "error",
        "no-param-reassign": "error",
        "no-return-assign": "off",
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": ["error", "after", {
            overrides: {
                ":": "before",
                "?": "before",
            },
        }],
        "perfectionist/sort-imports": ["error", {
            "custom-groups": {
                value: {
                    assets: [
                        "virtual:icons/**",
                    ],
                    rootAlias: [
                        "@/**",
                    ],
                    sharedAlias: [
                        "$**",
                        "$**/**",
                    ],
                    srcAlias: [
                        "~/**",
                    ],
                },
            },
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
                "internal",
                "svelte",
                "rootAlias",
                "srcAlias",
                "sharedAlias",
                "assets",

                [
                    "parent",
                    "siblings",
                    "index",
                ],
            ],
            order: "asc",
            type: "natural",
        }],
        "quote-props": ["error", "as-needed"],
        quotes: ["error", "double"],
        semi: ["error", "never"],
        "space-before-function-paren": ["error", {
            anonymous: "always",
            asyncArrow: "always",
            named: "never",
        }],
    },
}
