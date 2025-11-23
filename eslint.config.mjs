import { FlatCompat } from '@eslint/eslintrc';
import eslintParserTypeScript from '@typescript-eslint/parser';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import eslintPluginValidateFilename from 'eslint-plugin-validate-filename';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    ignores: ['src/app/robots.ts', 'src/app/sitemap.ts'],
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

      // Auto-fix unused imports
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'no-unused-vars': 'off', // Turn off base rule as it can report incorrect errors

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
      'better-tailwindcss/no-unregistered-classes': [
        'error',
        {
          ignore: ['bg-dots', 'animate-marquee']
        }
      ],
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
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/globals.css`)
        entryPoint: 'src/app/globals.css',
        // tailwindcss 3: the path to the tailwind config file (eg: `tailwind.config.js`)
        tailwindConfig: 'tailwind.config.ts'
      }
    }
  }
];

export default eslintConfig;
