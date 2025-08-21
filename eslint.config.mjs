import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintParserTypeScript from '@typescript-eslint/parser';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import eslintPluginValidateFilename from 'eslint-plugin-validate-filename';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        project: true,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
      'validate-filename': eslintPluginValidateFilename
    },
    rules: {
      // enable all recommended rules to report a warning
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,

      // or configure rules individually
      '@next/next/no-page-custom-font': 'off',
      'react/no-unescaped-entities': [
        'error',
        {
          forbid: [
            {
              char: '>',
              alternatives: ['&gt;']
            },
            {
              char: '}',
              alternatives: ['&#125;']
            }
          ]
        }
      ],
      'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 100 }],
      'validate-filename/naming-rules': [
        'error',
        {
          rules: [
            {
              case: 'pascal',
              target: '**/components/**'
            },
            {
              case: 'kebab',
              target: '**/app/**',
              patterns: '^(page|layout|loading|error|not-found|route|template).tsx$'
            },
            {
              case: 'camel',
              target: '**/hooks/**',
              patterns: '^use'
            }
          ]
        }
      ]
    },
    settings: {
      'better-tailwindcss': {
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
        entryPoint: 'src/app/global.css',
        // tailwindcss 3: the path to the tailwind config file (eg: `tailwind.config.js`)
        tailwindConfig: 'tailwind.config.js'
      }
    }
  }
];

export default eslintConfig;
