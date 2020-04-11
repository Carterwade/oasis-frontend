<template>
  <div id="AuthorSearch">
    <nav-bar></nav-bar>

    <div class="panel panel-info" style="margin-top: 70px; margin-left: 10px">
      <div class="panel-heading">
        <h2 class="panel-title" style="text-align: left; margin-left: 10px">搜索结果</h2>
      </div>
      <div class="panel-body">
        <div class="bs-docs-section" style="float:left;width:100%" v-for="(author,i) in result">
          <div class="bs-callout bs-callout-success" style="clear:both;float:left">
            <span class="glyphicon glyphicon-user" style="float: left"/>
            <a v-bind:href="'#/authors/info/'+author.id"><h4 style="text-align: left" v-html="author.name"></h4></a>
            <p style="text-align: left" v-html="'机构：'+ author.affiliations"></p>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import NavBar from '@/components/common/NavBar'
  if( ('onhashchange' in window) && ((typeof document.documentMode==='undefined') || document.documentMode==8)) {
    // 浏览器支持onhashchange事件
    window.onhashchange = hashChangeFire;  // TODO，对应新的hash执行的操作函数
  } else {
    // 不支持则用定时器检测的办法
    setInterval(function() {
      // 检测hash值或其中某一段是否更改的函数， 在低版本的iE浏览器中通过window.location.hash取出的指和其它的浏览器不同，要注意
      var ischanged = isHashChanged();
      if(ischanged) {
        hashChangeFire();  // TODO，对应新的hash执行的操作函数
      }
    }, 150);
  }
  function hashChangeFire(){
    location.reload(true)
  }

  export default {
    name: "ArticleSearch",
    components:{NavBar},
    data () {
      return {
        result: null,
        prepage:null,
        afterpage:null,
        searchKey:null,
        size:null
      }
    },
    created () {
      // fetch方式实现跨域
      const keyword = this.$route.query.searchKey
      this.$axios.get('/authors/findByKeyword', {
        params: {
          keyword:keyword
        }
      })
        .then(response => {
          console.log(response)
          this.result = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  }
</script>

<style scoped>
  @import '../assets/css/bootstrap.min.css';
  @import '../assets/css/callout.css';
</style>
