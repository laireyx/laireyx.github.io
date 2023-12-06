import { readFile } from 'node:fs/promises';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
                async ({ path }) => {
                  return {
                    loader: 'dataurl',
                    contents: await readFile(path),
                  };
                },
              );
            },
          },
        ],
      },
    }),
  ],
});
