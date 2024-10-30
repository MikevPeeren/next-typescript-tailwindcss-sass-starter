import simpleImportSort from "eslint-plugin-simple-import-sort";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

const config = [
    ...compat.extends("eslint:recommended", "next/core-web-vitals", "prettier"),
    {
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
    },
    {
        files: ["**/*.ts", "**/*.tsx"],

        rules: {
            "simple-import-sort/imports": ["error", {
                groups: [
                    ["^react", "^next"],
                    ["^@?\\w"],
                    ["^(@/components|@/utils)(/.*|$)"],
                    ["^\\/public"],
                    ["^\\u0000"],
                    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                    ["^.+\\.s?css$"],
                ],
            }],
        },
    },
];

export default config