import { relative } from 'node:path';
import { env } from 'node:process';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'prefetch',
      buildStart: {
        order: 'post',
        async handler() {
          config();
          const profile = await fetch(`${env.VITE_API_URL}/profile`).then(
            (resp) => resp.json() as unknown,
          );

          env.VITE_PREFETCHED_PROFILE = JSON.stringify(profile);
          console.log(env.VITE_PREFETCHED_PROFILE);
        },
      },
    },
    tsconfigPaths(),
    react(),
    vanillaExtractPlugin({
      esbuildOptions: {
        plugins: [
          // Image loader for loading image asset in the
          // vanilla-extract .css.ts style file.
          {
            name: 'image-loader',
            setup(build) {
              build.onLoad(
                {
                  filter: /[.](svg|png|jpe?g|gif|webp)$/,
                },
                ({ path }) => ({
                  loader: 'js',
                  contents: `export default '/${relative(
                    build.initialOptions.absWorkingDir ?? '/',
                    path,
                  ).replace(/\\/g, '/')}';`,
                }),
              );
            },
          },
        ],
      },
    }),
    {
      name: 'async-css',
      transformIndexHtml: {
        order: 'post',
        handler(html) {
          return html.replace(
            /(?![\r\n])[\s]*?<link[^<>]?rel="stylesheet"[^<>]*?\/?>/g,
            (cssTag) => {
              return [
                cssTag.replace('rel="stylesheet"', 'rel="preload" as="style"'),
                cssTag.replace(
                  /<link rel="stylesheet"/,
                  `<link rel="stylesheet" media="print" onload="this.media='all';"`,
                ),
                cssTag
                  .replace('>', '></noscript>')
                  .replace(/<link/, '<noscript><link'),
              ].join('\n');
            },
          );
        },
      },
    },
  ],
});
