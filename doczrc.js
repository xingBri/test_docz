import { css } from 'docz-plugin-css';

export default {
  title: 'test_docz',
  description: 'portal modules components Docz',
  port: 4000,
  base: '/portal-modules',
  src: './src/',
  typescript: true,
  propsParser: true,
  filterComponents: files =>
    files.filter(
      filepath =>
        /[w-]*.(js|jsx|ts|tsx)$/.test(filepath) && !filepath.includes('.d.ts'),
    ),
  plugins: [
    css({
      preprocessor: 'postcss',
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      },
    }),
  ],
};
