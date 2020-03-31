<template>
  <div>
    Hello FieldRank!
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  // 实现跨域
  created () {
    // fetch方式实现跨域
    this.$axios.get('/fields/rank', {
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

}
</script>

<style scoped>

</style>
