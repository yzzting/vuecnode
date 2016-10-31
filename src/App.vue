<template>
  <div id="app">
      <yzz-header fixed title="主题">
          <yzz-button icon="more" slot="left"></yzz-button>
      </yzz-header>
      <section class="leftBox">
          <div class="userInfo">
              <div class="avertar">
                  <img src="#" alt="#">
              </div>
              <div class="userName">
                  <p>yzzting</p>
              </div>
          </div>
          <div class="listItem">
              <yzz-item>全部</yzz-item>
              <yzz-item>精华</yzz-item>
              <yzz-item>分享</yzz-item>
              <yzz-item>问答</yzz-item>
              <yzz-item>招聘</yzz-item>
              <yzz-item>消息</yzz-item>
              <yzz-item>关于</yzz-item>
          </div>
      </section>
  </div>
</template>

<script>
import { Header , Button , TabItem } from 'mint-ui'
export default {
  name: 'app',
  components: {
    'yzz-header':Header,
    'yzz-button':Button,
    'yzz-item': TabItem,
  }
}
</script>

<style lang="scss">
  @import "../static/scss/app";
</style>
