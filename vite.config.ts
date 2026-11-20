import { defineConfig } from 'vite-plus';

export default defineConfig({
  fmt: {
    singleQuote: true,
    semi: true,
    printWidth: 100,
    ignorePatterns: ['dist/**', '.astro/**', 'public/**'],
  },
  lint: {
    ignorePatterns: ['dist/**', '.astro/**', 'public/**'],
  },
});
