<template>
  <div>
    Hello Field!
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
    const fieldId = this.$route.params.id
    console.log(this.$route.query.id)
    this.$axios.get('/fields/info', {
      params: {
        id: fieldId
      }
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
