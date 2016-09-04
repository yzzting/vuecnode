<style lang="less">

.mint-header {
    background-color: #42b983;
}

.user-box {
  margin-top: 45px;
  width: 100%;
  text-align: center;
  height: 200px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 15px;
    display: inline-block;;
  }
  .score-box {
    width: 100%;
    margin-top: 20px;
    .u-time {
        width: 50%;
        float: left;
        padding-left: 10px;
    }
    .u-score {
      width: 50%;
      text-align: right;
      padding-right: 10px;
      color: #42b983;
    }
  }
}

</style>

<template>

<mt-header fixed title="我的">
</mt-header>
<div class="user-box">
  <img :src="userInfo.avatar_url" alt="photo" />
</br>
  <span class="user-name" v-text="userInfo.loginname"></span>
  <div class="score-box">
    <span class="u-time" v-text="userInfo.create_at | date 'ago'"></span>
    <span class="u-score">积分: {{userInfo.score}}</span>
  </div>
</div>

</template>

<script>
  export default{
    data() {
      return {
        userInfo: {}
      }
    },
    props:[{
      name:'user',
      default:''
    }],
    methods: {

    },
    route: {
        data(transition) {
            let loginname = transition.to.params.loginname
            this.$http.get(`/api/user/${loginname}`)
                .then((res) => {
                    this.userInfo = res.json().data
                })
        }
    }
  }
</script>
