<style lang="less">

.bottom-box {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    margin-top: 40px;
}

.bottom-box {
  a {
    text-decoration: none;
    color: #000;
    &:active,&focus{
      color:#42b983!important;
    }
  }
}

.main {
  overflow-x: hidden;
}

</style>

<template>

<div class="main">
    <router-view></router-view>
    <div class="bottom-box" v-if="!isLogin">
        <mt-tabbar :selected.sync="btn">
            <mt-tab-item id="list">
              <img src="./assets/node.png" alt="photo" slot="icon"/>
              话题
            </mt-tab-item>
            <mt-tab-item id="message">
              <img src="./assets/message.png" alt="photo" slot="icon"/>
              消息
            </mt-tab-item>
            <mt-tab-item id="user">
              <img src="./assets/me.png" alt="photo" slot="icon"/>
              我的
            </mt-tab-item>
            <mt-tab-item id="about">
              <img src="./assets/about.png" alt="photo" slot="icon"/>
              关于
            </mt-tab-item>
        </mt-tabbar>
    </div>
</div>

</template>

<script>

export default {
  data() {
    return {
      btn: this.$route.path.split('/')[1]
    }
  },
  computed: {
    isLogin() {
      return this.$route.path == '/' || this.$route.path == '/login'
    }
  },
  watch: {
    'btn' : function(val) {
      if (this.btn == 'user') {
        this.$route.router.go ({
          name:'user',
          params: {
            loginname: localSrorage.loginname
          }
        })
      }else{
        this.$route.router.go({
          name:this.btn
        })
      }
    }
  }
}

</script>
