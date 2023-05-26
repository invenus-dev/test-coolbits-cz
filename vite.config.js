import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
// eslint-disable-next-line import/no-unused-modules
export default {
  plugins: [tsconfigPaths()]
};