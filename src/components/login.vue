<style lang="less">

.mint-header {
    background-color: #42b983;
}

.login-box {
    padding: 50px 15px;
    .txt {
        padding: 12px 0;
        border: 0;
        border-bottom: 1px solid #42b983;
        background-color: transparent;
        font-style: 14px;
        width: 100%;
        color: #313131;
    }
    .label {
        display: inline-block;
        width: 100%;
        margin-top: 15px;
        position: relative;
        left: 0;
        top: 0;
        .file {
            position: absolute;
            top: 0;
            left: 0;
            height: 42px;
            width: 48%;
            opacity: 0;
        }
        .login-btn {
          display: inline-block;
          width: 48%;
          height: 42px;
          line-height: 42px;
          border-radius: 3px;
          color: #fff;
          font-size: 16px;
          background-color: #42b983;
          border: none;
          border-bottom: 2px solid #3aa373;
          text-align: center;
          vertical-align: middle;
        }
    }
}

</style>

<template>

<mt-header fixed title="登录">
</mt-header>
<div class="login-box">
    <input type="text" placeholder="Access Token" v-model="token" minheight="36" class="txt">
    <div class="label">
        <mt-button type="primary" class="login-btn">选择二维码图片</mt-button>
        <input class="file" type="file" id="file_upload" accept="image/*" capture="camera" />
        <mt-button type="primary" class="login-btn" @click="login">登录</mt-button>
    </div>
</div>

</template>

<script>
  export default{
    props:[{
      name:'token',
      default:''
    }],
    methods: {
      login() {
        this.$http.post('api/accesstoken', {
          accesstoken: this.token
        })
        .then((response) => {
          let resJson = response.json()
          //存入localSrorage
          localStorage.loginname = resJson.loginname
          localStorage.avatar_url = resJson.avatar_url
          localStorage.accesstoken = this.token
          localStorage.id = resJson.id
          this.$route.router.go({name:'user'})
        })
      }
    }
  }
</script>
