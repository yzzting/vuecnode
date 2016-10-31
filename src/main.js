// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//global normalize scss

import 'normalize.css/normalize.css'
import '../static/scss/global.scss'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
