<style lang="less">

.mint-header {
    background-color: #42b983;
}

</style>

<template>

<mt-header fixed title="我的">
</mt-header>
<div class="user-box">
  <img :src="user.avatar_url" alt="photo" />
</div>

</template>

<script>
  export default{
    data() {
      return {
        user: {}
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
                    this.user = res.json().data
                })
        }
    }
  }
</script>
