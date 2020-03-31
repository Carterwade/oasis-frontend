<template>
  <div>
    Hello Affiliation!
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
    const affiliationId = this.$route.params.id
    this.$axios.get('/affiliations/info', {
      params: {
        id: affiliationId
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
