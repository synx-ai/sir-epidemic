// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueKatex from 'vue-katex'
import 'katex/dist/katex.min.css';

import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: {
    id: 'UA-106564167-1'
  }
}, router);

Vue.use(VueKatex)

require('./assets/sass/main.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
