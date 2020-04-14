<template>
    <div>
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid" style="background-color: #3c3c3c">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" style="padding:13px 5px 15px 20px">
              <span class="glyphicon glyphicon-education" aria-hidden="true"></span>
              OASIS
            </a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><a href="#/fields/rank">热门领域<span class="sr-only">(current)</span></a></li>
              <li><a href="#/affiliations/rank">热门机构</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">活动 <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <form class="navbar-form navbar-left">
              <div class="form-group">
                <input type="text" ref='searchKey' class="form-control" placeholder="搜索">
              </div>
              <button type="submit" class="btn btn-primary" @click="searchArticles">搜索文章</button>
              <button type="submit" class="btn btn-primary" @click="searchAuthors">搜索作者</button>

            </form>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">登录</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">个人中心 <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
    </div>
</template>

<script>
  if( ('onhashchange' in window) && ((typeof document.documentMode==='undefined') || document.documentMode===8)) {
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
    alert("url has changed")
    location.reload(true)
  }
export default {
  name: 'NavBar',
  methods: {
    searchArticles:function(searchKey){
      var searchValue=this.$refs.searchKey.value
      this.$router.push({
        path:'/articles/findArticles',
        query:{
          searchKey:searchValue,
          start:0,
          size:10
        }
      })

    },
    searchAuthors:function(searchKey){
      var searchValue=this.$refs.searchKey.value
      this.$router.push({
        path:'/authors/findAuthors',
        query:{
          searchKey:searchValue,
        }
      })

    }
  }

}
</script>

<style scoped>
  @import '../../assets/css/bootstrap.min.css';
  li:hover{
    background-color: #ffffff;
  }
</style>
