import type { NuxtConfig } from '@nuxt/types';
import googleFonts from './google-fonts';

const config: NuxtConfig = {
  build: {
    postcss: {
      plugins: {
        'postcss-nested' : {}
      }
    }
  },
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    'nuxt-windicss'
  ],
  css: ['vuesax/dist/vuesax.css', '~/assets/fonts/fonts.css', '~/assets/scss/main.scss'],
  env: {},
  head: {
    title: 'Caesura',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
      // TODO
    ],
    link: [
      {
        rel: 'stylesheet',
        href: googleFonts
      }
    ]
  },
  modules: ['@nuxtjs/style-resources'],
  loading: { color: '#0c64c1' },
  plugins: [
    '~/plugins/truncate',
    '~/plugins/vuesax'
  ]
};

export default config;
