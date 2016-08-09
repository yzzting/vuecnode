<style lang="less">
  .index{
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color:#42b983;
    }
  }
</style>

<template>
  <div class="index">
    <h1>welcome</h1>
  </div>
</template>

<script>
export default {
  ready() {
    setTimeout(() => {
      this.$route.router.go({name:'list'})
    },1000)
  }
}
</script>

<style>

</style>
