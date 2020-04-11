<template>
  <div>
    <nav-bar></nav-bar>
    <div class="panel panel-info" style="margin-top: 70px; margin-left: 10px">
      <div class="panel-heading">
        <h2 class="panel-title" style="text-align: left; margin-left: 10px">文章详情</h2>
      </div>
      <div class="panel-body">
        <div>
        <h1 style="text-align: left; margin-top: 20px; margin-left: 10px">
          <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
          {{article.documentTitle}}</h1>
        </div>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">作者:</h4>
        <div v-for="(author,i) in article.articleAuthors">
          <a v-bind:href="'#/authors/info/'+author.id" style="float:left">{{author.name+', '}}</a>
        </div>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">机构:</h4>
        <div v-for="(affiliation,i) in article.affiliations">
          <a v-bind:href="'#/affiliations/info/'+affiliation.id" style="float:left">{{affiliation.name}}</a>
        </div>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">研究方向:</h4>
        <div v-for="(field,i) in article.fields">
          <a v-bind:href="'#/fields/info/'+field.id" style="float:left">{{field.name+', '}}</a>
        </div>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">会议:</h4>
        <div v-for="(conference,i) in article.conferences">
          <a v-bind:href="'#/conferences/info/'+conference.id" style="float:left">{{conference.name}}</a>
        </div>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">会议日期:</h4>
        <p style="text-align:left">{{article.meetingDate}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">摘要:</h4>
        <p style="text-align:left">{{article.articleAbstract}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">PDF 链接:</h4>
        <a v-bind:href="article.pdfLink"><p  style="text-align:left">{{article.pdfLink}}</p></a>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">发表日期:</h4>
        <p style="text-align:left">{{article.publicationYear}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">上线日期:</h4>
        <p style="text-align:left">{{article.onlineDate}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">发表标题:</h4>
        <p style="text-align:left">{{article.publicationTitle}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">作者关键词:</h4>
        <p style="text-align:left">{{article.authorKeywords}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">被引用次数:</h4>
        <p style="text-align:left">{{article.citation}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">引用数量:</h4>
        <p style="text-align:left">{{article.reference}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">发表日期:</h4>
        <p style="text-align:left">{{article.publicationYear}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">文献标识:</h4>
        <p style="text-align:left">{{article.documentIdentifier}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">发表年份:</h4>
        <p style="text-align:left">{{article.publicationYear}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">发行商:</h4>
        <p style="text-align:left">{{article.publisher}}</p>
        <br><br>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">发行日期:</h4>
        <p style="text-align:left">{{article.issueDate}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">发表于:</h4>
        <p style="text-align:left">{{article.issue}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">卷:</h4>
        <p style="text-align:left">{{article.volume}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">起始页:</h4>
        <p style="text-align:left">{{article.startPage}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">结束页:</h4>
        <p style="text-align:left">{{article.endPage}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">DOI:</h4>
        <p style="text-align:left">{{article.doi}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">ISSN:</h4>
        <p style="text-align:left">{{article.issn}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">ISBNs:</h4>
        <p style="text-align:left">{{article.isbns}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">IEEE Terms:</h4>
        <p style="text-align:left">{{article.ieeeterms}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">Inspec Controlled Terms:</h4>
        <p style="text-align:left">{{article.inspeccontrolledTerm}}</p>
        <br><br>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">Inspec Non-Controlled Terms:</h4>
        <p style="text-align:left">{{article.inspecnonControlledTerm}}</p>



      </div>
    </div>

  </div>
    
</template>

<script>
  import NavBar from '@/components/common/NavBar'

  export default {
        name: "Article",
    components: {NavBar},
    data () {
      return {
        article: null
      }
    },
    created () {
      // fetch方式实现跨域
      const articleId = this.$route.params.id
      const type=this.$route.params.type
      this.$axios.get('/articles/info', {
        params: {
          id: articleId,
          type:type
        }
      })
        .then(response => {
          console.log(response)
          this.article = response.data
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
