<template>
  <div>
    <nav-bar></nav-bar>
    <div class="panel panel-info" style="margin-top: 70px; margin-left: 10px">
      <div class="panel-heading">
        <h2 class="panel-title" style="text-align: left; margin-left: 10px">热门领域</h2>
      </div>
      <div ref="graph" style="width:100%;height:700px"></div>
      <div class="panel-body">
        <div class="bs-docs-section" style="float:left;width:100%" v-for="(field,i) in fieldRank">
          <div class="bs-callout bs-callout-success" style="clear:both;float:left">
            <p style="float: left;font-weight: bold">第{{i+1}}名&nbsp;&nbsp;</p>
            <a class="glyphicon glyphicon-blackboard" style="float: left" v-bind:href="'#/fields/info/'+field.id">{{field.name}}</a>
            <p style="font-weight: bold;float:left">&nbsp;&nbsp;活跃度： {{field.activeness}}</p>
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
      fieldRank: null
    }
  },
  // 实现跨域
  created () {
    // fetch方式实现跨域
    this.$axios.get('/fields/rank', {
    })
      .then(response => {
        console.log(response)
        this.fieldRank = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    graph() { // 方法
      var graph = this.$echarts.init(this.$refs.graph)
      var data=[]
      var colorList = [[
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
        '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5',
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff'
      ],
        [
          '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
          '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
          '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
          '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0',
          '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
          '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
          '#1e90ff'
        ],
        [
          '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
          '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
          '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
          '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f',
          '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
          '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
          '#0780cf'
        ]][2];
      for(var k in this.fieldRank){
        var i=Number(k)+Number(1)
        var s={"name": this.fieldRank[k].name, "value": this.fieldRank[k].activeness, "symbolSize": this.fieldRank[k].activeness, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[i], "color": colorList[i] } } }
        data[k]=s
      }
      graph.setOption({
        // 图表标题
        title: {
          show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: '',//主标题文本，'\n'指定换行
          x: 'center',        // 水平安放位置，默认为左对齐，可选为：
          // 'center' ¦ 'left' ¦ 'right'
          // ¦ {number}（x坐标，单位px）
          y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
          // 'top' ¦ 'bottom' ¦ 'center'
          // ¦ {number}（y坐标，单位px）
          //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ccc',    // 标题边框颜色
          borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
          padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
                                  // 接受数组分别设定上右下左边距，同css
          itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
          textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#eee'        // 主标题文字颜色
          },
          subtextStyle: {
            color: '#aaa'        // 副标题文字颜色
          }
        },
        backgroundColor: '#e3e3e3',
        tooltip: {},
        animationDurationUpdate: function(idx) {
          // 越往后的数据延迟越大
          return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 250,
            edgeLength: 10
          },
          roam: true,
          label: {
            normal: {
              show: true
            }
          },
          data: data
        }]
      })
    }
  },
  mounted () {
    clearTimeout(this.timer);  //清除延迟执行
    this.timer = setTimeout(()=>{   //设置延迟执行
      console.log('ok')
      this.graph()
    },2000)
  }
}
</script>

<style scoped>
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/callout.css';
</style>
