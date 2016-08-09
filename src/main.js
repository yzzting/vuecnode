import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(MintUI)


import filters from './filters.js'

Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

let router = new VueRouter()

router.map({
  '/':{
    name:'index',
    component:function(resolve){
      require(['./components/index.vue'],resolve)
    }
  },
  'list':{
    name:'list',
    component:function(resolve){
      require(['./components/list.vue'],resolve)
    }
  },
  'topic/:id':{
    name:'topic',
    component:function(resolve){
      require(['./components/topic.vue'],resolve)
    }
  },
  'about':{
    name:'about',
    component:function(resolve){
      require(['./components/about.vue'],resolve)
    }
  },
  'login':{
    name:'login',
    component:function(resolve){
      require(['./components/login.vue'],resolve)
    }
  },
  '/user/:username':{
    name:'user',
    component:function(resolve){
      require(['./components/user.vue'],resolve)
    },
    auth:true
  },
  'message':{
    name:'message',
    component:function(resolve){
      require(['./components/message.vue'],resolve)
    },
    auth:true
  }
})

router.start(App, '#app')