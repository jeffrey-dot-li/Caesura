import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  build: {
  },
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    'nuxt-windicss'
  ],
  css: ['~/assets/scss/main.scss'],
  env: {},
  head: {
    title: 'Caesura',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
      // TODO
    ],
    link: []
  },
  modules: ['@nuxtjs/style-resources'],
  loading: { color: '#0c64c1' },
  plugins: [
    '~/plugins/truncate'
  ]
};

export default config;
