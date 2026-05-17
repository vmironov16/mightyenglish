import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import yaml from '@rollup/plugin-yaml';
import react from '@astrojs/react';

export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE,
  integrations: [tailwind(), react()],
  vite: {
    plugins: [yaml()],
  },
});
