<template>
  <div id="authorInfo">
    <nav-bar></nav-bar>
    <div class="panel panel-info" style="margin-top: 70px; margin-left: 10px">
      <div class="panel-heading">
        <h2 class="panel-title" style="text-align: left; margin-left: 10px">作者详情</h2>
      </div>
      <div class="panel-body">
        <div>
    <h1 style="text-align: left; margin-top: 20px; margin-left: 10px">
      <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
      {{author.name}} <small>{{author.affiliations}}</small></h1>
        </div>
        <div>
          <h4 style="float:left;margin-left:10px;margin-top: 40px;font-weight: bold">活跃度</h4>
          <div ref="liquidFill" style="float:left;width:100px;height:100px"></div>
          <h4 style="float:left;margin-left:10px;margin-top: 40px;font-weight: bold">文章总数 <span class="label label-info">{{author.articleNums}}</span></h4>
          <h4 style="float:left;margin-left:10px;margin-top: 40px;font-weight: bold">引用数 <span class="label label-info">{{author.citation}}</span></h4>

        </div>
        <br><br><br><br><br><br>
        <div >
          <h4 style="float:left;margin-left:10px;margin-top: 40px;font-weight: bold">作者关键词:</h4>
          <h4 style="float:left;margin-left:10px;margin-top: 40px">{{author.authorKeywords}}</h4>
        </div>
        <br><br><br><br><br><br>
        <div>
        <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">主要领域:</h4>
          <div style="float:left" v-for="(field,i) in author.authorFields">
            <a v-bind:href="'#/fields/info/'+field.id" style="float:left">{{field.name+', '}}</a>
          </div>
        </div>
        <br><br><br><br><br><br>
        <div>
          <h4 style="float:left;margin-left:10px;margin-top:0px;font-weight: bold">参与会议:</h4>
          <div style="float:left" v-for="(conference,i) in author.conference">
            <a href="#" style="float:left">{{conference+', '}}</a>
          </div>
        </div>
      </div>
    </div>
    <br><br><br><br><br><br>
    <div ref="activity" style="width:100%;height:500px"></div>
    <br><br>
    <div class="page-header">
      <h2 style="font-weight: bold;text-align: left">论文推荐</h2>
    </div>
    <div class="bs-docs-section" style="float:left;width:100%" v-for="(article,i) in author.recommendArticle">
      <div class="bs-callout bs-callout-success" style="clear:both;float:left">
        <span class="glyphicon glyphicon-bookmark" style="float: left"/><h4 style="text-align: left">{{article.documentTitle}}</h4>
        <p style="text-align: left">作者： {{article.authors}}-----{{article.publicationYear}}</p>
        <a style="text-align: left; float:left" v-bind:href="article.pdfLink">{{article.pdfLink}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import echartsLiquidfill from 'echarts-liquidfill'// 在这里引入
import 'echarts-liquidfill/src/liquidFill.js'
export default {
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      author: null
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
      .then(response => {
        console.log(response)
        this.author = response.data
        this.nextTick(() =>{
          console.log(document.getElementById(this.$refs.liquidFill))
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    liquidFill () { // 方法
      var liquid = this.$echarts.init(this.$refs.liquidFill)
      var value =this.author.activeness/100
      var data = []
      data.push(value)
      data.push(value)
      data.push(value)
      data.push(value)
      data.push(value)
      liquid.setOption({
        backgroundColor: '#ffffff',
        title: {
          text: '',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 15,
            fontFamily:'KaiTi',
            color: '#ff6111'
          },
          left: 'right'
        },
        series: [{
          type: 'liquidFill',
          radius: '80%',
          data: data,
          outline: {
            //show: true , //是否显示轮廓 布尔值
            borderDistance: 0, //外部轮廓与图表的距离 数字
            itemStyle:{
              //borderColor:'rgba(255,0,0,0.09)', //边框的颜色
              borderWidth: 0,  //边框的宽度
              //shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
              //shadowColor: '#000' //外部轮廓的阴影颜色
            }
          },
          backgroundStyle: {
            borderWidth: 2,
            borderColor: '#118bf1',
            color: '#82f1f1'
          },
          itemStyle: {
            opacity:0.8,//波浪的透明度
            shadowColor:'#f60'//阴影颜色
          },
          label: {
            normal: {
              formatter: (value * 100).toFixed(2) + '%',
              textStyle: {
                fontSize: 10
              }
            }
          }
        }]
      })
    },
    activityChart () {
      var aChart=this.$echarts.init(this.$refs.activity)
      var activities=this.author.articleNumByYear
      aChart.setOption({
        backgroundColor: '#fff',
        title:{
          text:'论文发表情况',
          textStyle: {
            fontWeight: 'Bold',
            fontSize: 30,
            color: '#000000'
          },
          left: 'center'
        },
        grid: {
          top: '15%',
          right: '10%',
          left: '10%',
          bottom: '12%'
        },
        xAxis: [{
          type: 'category',
          color: '#59588D',
          data: ['2013年', '2014年', '2015年','2016年','2017年','2018年','2019年'],
          axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
              fontSize: 18
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(107,107,107,0.37)',
            }
          },
          axisTick: {
            show: false
          },
        }],
        yAxis: [{
          min: 0,
          max: 4,
          axisLabel: {
            formatter: '{value}篇',
            color: '#999',
            textStyle: {
              fontSize: 18
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(107,107,107,0.37)',
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(131,101,101,0.2)',
              type: 'dashed',
            }
          }
        }],
        series: [{
          type: 'bar',
          data: activities,
          barWidth: '50px',
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#FF9A22' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#FFD56E' // 100% 处的颜色
              }], false),
              barBorderRadius: [30, 30, 0, 0],
            }
          },
          label: {
            normal: {
              show: true,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333',
              position: 'top',
            }
          }
        },{
          data: activities,
          type: 'line',
          smooth: true,
          name: '折线图',
          symbol: 'none',
          lineStyle: {
            color: '#3275FB',
            width: 4,
            shadowColor: 'rgba(0, 0, 0, 0.3)',//设置折线阴影
            shadowBlur: 15,
            shadowOffsetY: 20,
          }
        }
        ]
      })

    }
  },
  mounted () {
    clearTimeout(this.timer);  //清除延迟执行
    this.timer = setTimeout(()=>{   //设置延迟执行
      console.log('ok')
      this.liquidFill()
      this.activityChart()
    },5000)
  }

}
</script>

<style scoped>
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/callout.css';
</style>
