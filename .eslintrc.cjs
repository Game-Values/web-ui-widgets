let { env } = require("node:process")

let isDevelopment = env.NODE_ENV === "development"
let isProduction = !isDevelopment

module.exports = (() => (
    {
        root: true,

        parser: "vue-eslint-parser",

        parserOptions: {
            parser: "@typescript-eslint/parser",
            sourceType: "module",
            ecmaVersion: "latest",
        },

        env: {
            browser: true,
            es6: true,
            node: true,
        },

        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:vue/vue3-essential",
            "plugin:vue/vue3-recommended",
            "@vue/typescript/recommended",
            "@vue/eslint-config-typescript/recommended",
            "@logux/eslint-config/ts",
            // "@unocss", todo: not work
        ],

        ignorePatterns: [
            "schema/**/*.ts",
            "*.cjs",
            "*.mjs",
            "*.js",
        ],

        rules: {
            semi: "error",

            curly: ["error", "multi", "consistent"],
            indent: ["error", 4, { SwitchCase: 1 }],
            quotes: ["error", "double"],

            "accessor-pairs": "off",
            "consistent-return": "off",
            "no-return-assign": "off",
            "no-undef": "off",
            "prefer-const": "off",

            "n/global-require": "off",

            "eol-last": "error",
            "key-spacing": "error",
            "no-param-reassign": "error",
            "no-multiple-empty-lines": "error",

            "arrow-parens": ["error", "as-needed"],
            "comma-dangle": ["error", "always-multiline"],
            "object-curly-spacing": ["error", "always"],
            "quote-props": ["error", "as-needed"],

            "no-console": isProduction ? "error" : "off",
            "no-debugger": isProduction ? "error" : "off",

            "import/no-named-default": "off",

            "import/extensions": ["off", {
                ts: "never",
                vue: "always",
            }],

            "max-len": ["error", {
                code: 120,
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
                    "internal",

                    [
                        "parent",
                        "siblings",
                        "index",
                    ],

                    "vue",
                ],
            }],

            "perfectionist/sort-vue-attributes": ["error", {
                "custom-groups": {
                    binding: [
                        "v-bind",
                        "v-for",
                        "v-model",
                        "v-html",
                        "v-slot",
                    ],
                    condition: [
                        "v-if*",
                        "v-else*",
                    ],
                    event: [
                        "@*",
                        "on*",
                    ],
                    important: [
                        ":key",
                    ],
                },
                groups: [
                    "condition",
                    "binding",
                    "important",
                    "multiline",
                    "unknown",
                    "shorthand",
                    "event",
                ],
                order: "asc",
                type: "natural"
            }],

            "space-before-function-paren": ["error", {
                anonymous: "always",
                named: "never",
                asyncArrow: "always",
            }],

            "@typescript-eslint/consistent-type-assertions": "off",
            "@typescript-eslint/consistent-type-imports": "off",
            "@typescript-eslint/indent": "off",
            "@typescript-eslint/no-confusing-void-expression": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-unnecessary-condition": "off",
            "@typescript-eslint/space-before-function-paren": "off",

            "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
            "@typescript-eslint/quotes": ["error", "double"],

            "@typescript-eslint/ban-ts-comment": ["error", {
                "ts-expect-error": "allow-with-description",
            }],

            "@typescript-eslint/explicit-function-return-type": ["error", {
                allowExpressions: true,
                allowTypedFunctionExpressions: false,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: false,
                allowFunctionsWithoutTypeParameters: false,
                allowIIFEs: false,
            }],

            "@typescript-eslint/naming-convention": ["error",
                {
                    selector: "default",
                    format: [
                        "UPPER_CASE",
                        "PascalCase",
                        "camelCase",
                        "snake_case",
                    ],
                    filter: {
                        regex: "^(_?_)",
                        match: false,
                    },
                },
                {
                    selector: "variable",
                    format: [
                        "UPPER_CASE",
                    ],
                    modifiers: [
                        "const",
                    ],
                },
                {
                    selector: "objectLiteralProperty",
                    format: null,
                },
            ],

            "vue/attributes-order": "off",
            "vue/multi-word-component-names": "off",
            "vue/no-v-html": "off",
            "vue/no-v-text-v-html-on-component": "off",
            "vue/require-default-prop": "off",

            "vue/block-tag-newline": "error",
            "vue/match-component-file-name": "error",
            "vue/no-empty-component-block": "error",
            "vue/no-potential-component-option-typo": "error",
            "vue/prop-name-casing": "error",
            "vue/no-reserved-component-names": "error",
            "vue/no-restricted-component-options": "error",
            "vue/order-in-components": "error",
            "vue/padding-line-between-blocks": "error",
            "vue/html-self-closing": "error",
            "vue/singleline-html-element-content-newline": "error",

            "vue/component-name-in-template-casing": ["error", "kebab-case", {
                registeredComponentsOnly: false,
            }],

            "vue/script-indent": ["error", 4, {
                baseIndent: 0,
                switchCase: 1,
            }],

            "vue/html-indent": ["error", 4, {
                attribute: 1,
                baseIndent: 0,
                closeBracket: 0,
                alignAttributesVertically: true,
            }],

            "vue/html-closing-bracket-spacing": ["error", {
                startTag: "never",
                endTag: "never",
                selfClosingTag: "always",
            }],

            "vue/html-closing-bracket-newline": ["error", {
                singleline: "never",
                multiline: "always",
            }],

            "vue/max-attributes-per-line": ["error", {
                singleline: { max: 1 },
                multiline: { max: 1 },
            }],

            "vue/multiline-html-element-content-newline": ["error", {
                ignoreWhenEmpty: true,
                allowEmptyLines: true,
            }],
        },

        overrides: [
            {
                files: [
                    "locales/**/*.ts",
                ],
                rules: {
                    "quote-props": ["error", "always"],
                },
            },
        ],
    }
))(require("@rushstack/eslint-patch/modern-module-resolution"))
