// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      themes: {
        pine: 'rose-pine',
        moon: 'rose-pine-moon',
        dawn: 'rose-pine-dawn',
      },
      defaultColor: false,
      wrap: true,
    },
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Grenze Gotisch',
      cssVariable: '--astro-font-heading',
      fallbacks: ['ui-serif', 'serif'],
      weights: ['400 900'],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Crimson Pro',
      cssVariable: '--astro-font-body',
      fallbacks: ['ui-serif', 'serif'],
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Cascadia Code',
      cssVariable: '--astro-font-code',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      weights: ['200 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
