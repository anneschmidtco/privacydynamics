// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/styles/global.css')

import VueCompositionAPI from '@vue/composition-api';
import DefaultLayout from '~/layouts/Default.vue';
import VueAnimate from 'vue-animate-scroll'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  })

  head.script.push({
    src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
    body: true
  })

  head.bodyAttrs = { class: 'antialiased font-body font-normal text-sm' }

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueAnimate);
  Vue.use(VueCompositionAPI);
}
