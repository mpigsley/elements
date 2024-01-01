import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  treeshake: true,
  minify: true,
  clean: true,
  dts: true,
  external: ['react'],
  ...options,
}));
