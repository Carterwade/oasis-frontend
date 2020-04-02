<template>
  <div>
    <nav-bar></nav-bar>
    <div class="panel panel-info" style="margin-top: 70px; margin-left: 10px">
      <div class="panel-heading">
        <h2 class="panel-title" style="text-align: left; margin-left: 10px">活跃机构</h2>
      </div>
      <div class="panel-body">
        <div class="bs-docs-section" style="float:left;width:100%" v-for="(affiliation,i) in affiliationRank">
          <div class="bs-callout bs-callout-success" style="clear:both;float:left">
            <p style="float: left;font-weight: bold">第{{i+1}}名&nbsp;&nbsp;</p>
            <a class="glyphicon glyphicon-home" style="float: left" v-bind:href="'#/affiliations/info/'+affiliation.id">{{affiliation.name}}</a>
            <p style="font-weight: bold;float:left">&nbsp;&nbsp;活跃度： {{affiliation.activeness}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './common/NavBar'
  export default {
    name: 'App',
    components: {NavBar},
    data () {
      return {
        affiliationRank: null
      }
    },
    // 实现跨域
    created () {
      // fetch方式实现跨域
      this.$axios.get('/affiliations/rank', {
      })
        .then(response => {
          console.log(response)
          this.affiliationRank = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }

  }
</script>

<style scoped>
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/callout.css';
</style>
