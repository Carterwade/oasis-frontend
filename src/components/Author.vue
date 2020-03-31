<template>
  <div>
    Hello Author!
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
    const authorId = this.$route.params.id
    console.log(this.$route.query.id)
    console.log(authorId)
    this.$axios.get('/authors/info', {
      params: {
        id: authorId
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
