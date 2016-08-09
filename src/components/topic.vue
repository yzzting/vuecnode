<style lang="less">
  @import "../assets/css/github-markdown.css";
  .mint-header {
    background-color: #42b983;
  }
  .topic-content{
    padding: 3%;
    padding-top: 38px;
  }
  .topic-title {
    padding: 5px;
    margin: 15px;
    font-size: 18px;
    color: #2c3e50;
    line-height: 1.5;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  .mint-header-title {
    font-size: 16px;
  }
  .author-info {
    padding:1% 3%;
    font-size: 12px;
    color:#2c3e50;
    display: flex;
    align-items: center;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 15px;
    }
    span,time{
      display: block;
      padding: 5px 0;
    }
  }
  .info {
    display: block;
    flex: 1;
    width: 100%;
  }
  .tag {
    color:#fff;
    padding: 5px 6px;
    font-size: 10px;
    font-weight: 400;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
    &.share {
      background: #1ABC9C;
    }
    &.ask {
      background: #3498DB;
    }
    &.job {
      background: #9B59B6;
    }
    &.good {
      background: #E67E22;
    }
    &.top {
      background: #E74C3C;
    }
  }
  .reply-title{
    padding: 3%;
    border-bottom: solid 1px #d4d4d4;
    strong {
      color:#42b983;
    }
  }
  .reply-list ul li{
    width: 100%;
    list-style: none;
    border-bottom: solid 1px #d4d4d4;
    padding: 0!important;
    margin: 0!important;
  }
  .reply-box {
     padding: 3%;
    .head {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .reply-box {
    display: flex;
    width: 100%;
    margin: 15px 0;
    padding: 0 10px;
  }
  .reply-info {
    display: block;
    flex: 1;
    width: 100%;
    .reply-author {
      float: left;
      width: 70%;
    }
    span {
      font-size: 13px;
    }
  }
  .left-reply {
    display: block;
    margin-bottom: 10px;
  }
  .reply-content {
    padding: 0 15px;
    margin-bottom: 15px;
    p {
      line-height: 1.5;
      font-size: 14px;
      color:#34495e;
    }
  }
  @import "../assets/css/iconfont.css";
</style>
<template>
  <div class="topic-box">
    <mt-header fixed title="主题">
      <mt-button v-link="'/list'" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="topic-content">
      <h2 class="topic-title" v-text="content.title"></h2>
      <section class="author-info">
        <img :src="content.author.avatar_url" alt="photo" />
        <div class="info">
          <span>{{content.author.loginname}}</span>
          <time>
            发布于:{{content.create_at | date 'ago'}}
          </time>
        </div>
        <div class="right">
          <span class="tag" :class="[{'top': content.top, 'good': content.good}, content.tab]">
            {{content.top === true ? 'top' : content.good === true ? 'good' : content.tab | tab}}
          </span>
          <span class="name">{{content.visit_count}}次浏览</span>
        </div>
      </section>

      <section class='markdown-body topic-content' v-html="content.content"></section>

      <h3 class="reply-title"><strong>{{content.reply_count}}</strong>回复</h3>

      <section class="reply-list">
        <ul>
          <li v-for="item in content.replies">
            <div class="reply-box">
              <img :src="item.author.avatar_url" alt="photo" class="head"/>
              <div class="reply-info">
                <div class="reply-author">
                  <span class="left-reply" v-html="item.author.loginname"></span>
                  <span class="time">发布于{{item.create_at | date 'ago'}}</span>
                </div>
                <!-- reply-author end -->
                <div class="right">
                  <span class="iconfont icon">&#xe608;</span>
                  {{item.ups.length}}
                  <span class="iconfont icon">&#xe609;</span>
                </div>
                <!-- right end -->
              </div>
              <!--reply-info end -->
            </div>
            <!-- reply-box end -->
            <div class="reply-content" v-html="item.content"></div>
          </li>
        </ul>
      </section>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content:[]
      }
    },
    methods: {

    },
    ready() {
      this.$http.get(`/api/topic/${this.$route.params.id}`)
                .then((res) => {
                  this.content = res.json().data
                })
    }
  }
</script>
