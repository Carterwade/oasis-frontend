<template>
  <div id="affiliationInfo">
    <nav-bar></nav-bar>
    <div class="panel panel-info" style="margin-top: 70px; margin-left: 10px">
      <div class="panel-heading">
        <h2 class="panel-title" style="text-align: left; margin-left: 10px">研究机构</h2>
      </div>
      <div class="panel-body">
        <div style="float:left">
          <div>
            <h1 style="text-align:left;float: left; margin-top: 20px; margin-left: 10px;">
              <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
              {{affiliation.name}}</h1>
          </div>
          <div>
            <h4 style="clear:left;float:left;margin-left:10px;margin-top: 40px;font-weight: bold">文章总数 <span class="label label-info">{{affiliation.articleNum}}</span></h4>
            <h4 style="float:left;margin-left:10px;margin-top: 40px;font-weight: bold">机构排名 <span class="label label-info">{{affiliation.rank}}</span></h4>
          </div>
        </div>
        <div ref="affiliationActiveness" style="clear:right;margin:0;float:left;width:300px;height:300px"></div>
        <br><br><br><br><br><br><br><br><br><br>
        <div class="panel panel-default" style="position:relative;z-index: 1;clear:left">
          <div class="panel-heading">
            <h3 class="panel-title" style="font-weight: bold;text-align: left">相关领域</h3>
          </div>
          <div class="panel-body">
            <div  v-for="(field,i) in affiliation.fields">
              <div class="panel-body" style="float:left;">
                <a style="float:left;position:relative;z-index: 2;text-align: left" v-bind:href="'#/fields/info/'+field.id" class="glyphicon glyphicon-blackboard">{{field.name}} </a><p style="float:left">&nbsp;&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title"  style="font-weight: bold;text-align: left">论文推荐</h3>
          </div>
          <div class="panel-body">
            <div class="bs-docs-section" style="float:left;width:100%" v-for="(article,i) in affiliation.recentArticle">
              <div class="bs-callout bs-callout-success" style="clear:both;float:left">
                <span class="glyphicon glyphicon-bookmark" style="float: left"/><h4 style="text-align: left">{{article.documentTitle}}</h4>
                <p style="text-align: left">作者： {{article.authors}}-----{{article.publicationYear}}</p>
                <a style="text-align: left; float:left" v-bind:href="article.pdfLink">{{article.pdfLink}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
  name: 'App',
  components: {NavBar},
  data () {
    return {
      affiliation: null
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
      .then(response => {
        console.log(response)
        this.affiliation = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    affiliationActiveness() { // 方法
      var activeness = this.$echarts.init(this.$refs.affiliationActiveness)
      var value = this.affiliation.activeness
      var chartData = {
        name: '活跃度',
        value: value,
        pos: ['30%', '32%']
      }
      activeness.setOption({
        backgroundColor: '#ffffff',
        series: [
          // 外侧光线
          {
            name: chartData.name,
            type: 'gauge',
            center: chartData.pos,
            radius: '60%',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            grid:{
              x:0,
              y:0,
              x2:0,
              y2:0
            },
            axisLine: {
              show: true,
              lineStyle: {
                width: 2,
                color: [
                  [
                    chartData.value / 100, new this.$echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                      offset: 0,
                      color: '#0CD7F0',
                    },
                      {
                        offset: 1,
                        color: '#f05914',
                      }
                    ]
                  )
                  ],
                  [
                    1, 'rgba(255,255,255,0)'
                  ]
                ]
              }
            },
            axisTick: {
              show: 0,
            },
            splitLine: {
              show: 0,
            },
            axisLabel: {
              show: 0
            },
            pointer: {
              show: 0,
            },
            detail: {
              show: 0
            },
            data: [{
              value: chartData.value,
            }]
          },
          // 内圆
          {
            "name": '内圆',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": '30%',
            "z": 0,

            "labelLine": {
              "normal": {
                "show": false
              }
            },
            center: chartData.pos,
            "data": [{
              "value": 0,
            }, {
              "value": 10,

              itemStyle: {
                normal: {
                  color: "#dbe6db"
                },
                emphasis: {
                  color: "#dbe6db"
                }
              }
            }]
          },
          // 圆环
          {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['5%', '6%'],
            "z": 0,
            "labelLine": {
              "normal": {
                "show": false
              }
            },
            center: chartData.pos,
            "data": [{
              "value": 0,
            }, {
              "value": 10,

              itemStyle: {
                normal: {
                  color: "#0BD9F6"
                },
                emphasis: {
                  color: "#0BD9F6"
                }
              }
            }]
          },
          // 内侧指针、数值显示
          {
            name: chartData.name,
            type: 'gauge',
            center: chartData.pos,
            radius: '54%',
            startAngle: 226,
            endAngle: -46,
            min: 0,
            max: 100,
            axisLine: {
              show: true,
              lineStyle: {
                width: 30,
                color: [
                  [
                    1, new this.$echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                      offset: 0,
                      color: 'rgba(38, 211, 166, 1)',
                    },
                      {
                        offset: 0.333,
                        color: 'rgba(38, 211, 166, 1)',
                      },


                      {
                        offset: 0.666,
                        color: 'rgba(24, 179, 254, 1)',
                      },

                      {
                        offset: 1,
                        color: 'rgba(255, 54, 162, 1)',
                      }
                    ]
                  )
                  ],

                ]
              }
            },
            axisTick: {
              show: 0,
            },
            splitLine: {
              show: 0,
            },
            axisLabel: {
              show: 0
            },
            pointer: {
              show: true,
              length: '102%',
              width: 6
            },
            title: {
              show: true,
              offsetCenter: [0, '65%'],
              color: '#000000',
              fontSize: 20,
              // backgroundColor: "#D8d8d8",
              borderRadius: 30,
              padding: 5
            },
            detail: {
              show: true,
              offsetCenter: [0, 20],
              textStyle: {
                fontSize: 15,
                color: '#f05914'
              },
              formatter: [
                '{value}',
              ].join('\n'),

              rich: {
                name: {
                  fontSize: 20,
                  lineHeight: 10,
                  color: '#ffffff',
                  padding: [30, 0, 0, 0]
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#FFED8B',
              }
            },
            data: [{
              value: chartData.value,
              name: chartData.name
            }]
          },
          // 外围刻度
          {
            type: 'gauge',
            center: chartData.pos,
            radius: '50%',
            splitNumber: 10,
            min: 0,
            max: 100,
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [
                  [1, 'rgba(0,0,0,0)']
                ]
              }
            }, //仪表盘轴线

            //刻度样式
            splitLine: {
              show: true,
              length: 6,
              lineStyle: {
                width: 1,

              }
            }, //分隔线样式
            axisLabel: {
              show: false,
              distance: 10,
              textStyle: {
                color: '#fff',
                fontSize: '12',
                fontWeight: 'bold'
              }
            },
            pointer: {
              show: 0
            },
            detail: {
              show: 0
            }
          },

        ]
      })
    },
  },
  mounted () {
    clearTimeout(this.timer);  //清除延迟执行
    this.timer = setTimeout(()=>{   //设置延迟执行
      console.log('ok')
      this.affiliationActiveness()
    },5000)
  }

}
</script>

<style scoped>
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/callout.css';
</style>
