<template>
  <div>
    Hello Conference!
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
    const conferenceId = this.$route.params.id
    this.$axios.get('/conferences/info', {
      params: {
        id: conferenceId
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
