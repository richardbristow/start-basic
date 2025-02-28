import { defineConfig } from '@tanstack/start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import { cloudflare } from 'unenv';

export default defineConfig({
  server: {
    preset: 'cloudflare-pages',
    unenv: cloudflare,
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
});
