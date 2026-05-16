// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://moq77111113.github.io',
  base: '/trace.io',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !/\/og\/?$/.test(page) })],
  vite: {
    plugins: [tailwindcss()],
  },
});
