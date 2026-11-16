import { defineConfig } from 'astro/config';
// trailingSlash 'always' keeps the same URLs as the old WordPress site (good for Google).
export default defineConfig({
  site: 'https://www.phillipsconcrete.com.au',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
