<template>
  <div id="ArticleSearch">
  <nav-bar></nav-bar>

    <div class="panel panel-info" style="margin-top: 70px; margin-left: 10px">
      <div class="panel-heading">
        <h2 class="panel-title" style="text-align: left; margin-left: 10px">搜索结果</h2>
      </div>
      <div class="panel-body">
        <div class="bs-docs-section" style="float:left;width:100%" v-for="(article,i) in result">
          <div class="bs-callout bs-callout-success" style="clear:both;float:left">
            <span class="glyphicon glyphicon-bookmark" style="float: left"/>
            <a v-bind:href="'#/articles/info/'+article.type+'/'+article.id"><h4 style="text-align: left" v-html="article.documentTitle"></h4></a>
            <p style="text-align: left" v-html="'作者：'+ article.authors+'-----'+article.publicationYear"></p>
            <p v-html="'摘要: '+article.abstract"></p>
            <a style="text-align: left; float:left" v-bind:href="article.pdfLink">{{article.pdfLink}}</a>
          </div>
        </div>
      </div>
    </div>
  <nav class="navbar-fixed-bottom" aria-label="...">
      <ul class="pager">
        <li><a v-bind:href="'#/articles/findArticles?searchKey='+searchKey+'&start='+prepage+'&size='+size">Previous</a></li>
        <li><a v-bind:href="'#/articles/findArticles?searchKey='+searchKey+'&start='+afterpage+'&size='+size">Next</a></li>
      </ul>
  </nav>
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
    const start = this.$route.query.start
    const size = this.$route.query.size
    console.log(keyword)
    console.log(start)
    console.log(size)
    this.$axios.get('/articles/findArticleByKeyword', {
      params: {
        keyword:keyword,
        start:start,
        size:size
      }
    })
      .then(response => {
        console.log(response)
        this.result = response.data
        this.prepage=Number(this.$route.query.start)-1
        if(this.prepage<0){
          this.prepage=0
        }
        this.afterpage=Number(this.$route.query.start)+1
        this.searchKey=this.$route.query.searchKey
        this.size=Number(this.$route.query.size)
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
