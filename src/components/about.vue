<style lang="less">

  .about-info {
    padding: 50px 15px;
    line-height: 1.5;
    background: #f7f7f7;
    dt{
      color:#43b983;
      padding: 1em 0;
      font-weight: bold;
    }
  }

  .mint-header {
    background-color: #42b983;
    h1 {
      font-size: 16px;
    }
  }

</style>

<template>
  <mt-header fixed title="关于">
  </mt-header>
  <div class="about-info">

      <dt>关于项目</dt>
      <dd>项目是基于cnodejs的api，用vue写的移动端页面。</dd>

      <dt>源码地址</dt>

      <dd>
          <a href="https://github.com/yzzting/vuecnode">地址</a>
      </dd>

      <dt>当前版本</dt>
      <dd>V1.0</dd>

      <dt>我想说:</dt>
      <dd>目前这个版本只可以看，登陆功能没有做，代码也没有优化，加载可能会很慢。。。。</dd>

    </div>
</template>
