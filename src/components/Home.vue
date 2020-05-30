<template>
  <div id='home'>
    <nav-bar></nav-bar>
    <article>
      <section data-delighter class="splash">
        <h1 data-delighter class="right">OASIS</h1>
        <h2 data-delighter class="left">Online grAphic System for academIcS</h2>
        <p data-delighter="start:1" class="bottom">
          学术关系图谱系统 by <a target="_blank" href="http://212.129.149.40/151250143_2020SECIII">151250143_2020SECIII</a>
        </p>
      </section>
      <section data-delighter="start:0.3">
        <div class="box">1. 热门领域</div>
        <div class="box">2. 论文信息</div>
        <div class="box">3. 作者分析</div>
      </section>
      <section>
        <h2 data-delighter class="right">系统特色</h2>
        <ul data-delighter>
          <li>研究领域排行</li>
          <li>论文信息展示</li>
          <li>作者信息展示</li>
          <li>作者行为分析</li>
          <li>研究关系预测</li>
          <li>活跃机构排行</li>
        </ul>
      </section>
      <section data-delighter="start:0.25">
        <h2 data-delighter class="left">使用方法</h2>
        <p>1. 搜索论文</p>
        <pre>
   输入论文的名称，概述，关键词或者作者进行搜索</pre>
        <p>2. 搜索作者</p>
        <pre>
   输入作者的名称</pre>
        <p>
          3.页面内点击相关信息查看，例如
          <code>研究领域</code> 和 <code>会议</code>
        </p>

      </section>
      <section>
        <h2>联系方式</h2>
        <ul data-delighter="debug">
          <li>邮箱： <code>151250143@smail.nju.edu.cn</code></li>
          <li>电话： <code>+86 18819368708</code></li>
          <li>QQ： <code>895445916</code></li>
          <li>地址： <code>江苏省南京市玄武区汉口路22号</code></li>

        </ul>
      </section>
      <section>
        <h1 data-delighter class="bottom">开始使用吧!</h1>
      </section>
    </article>
  </div>
    
</template>

<script>
import {delighters} from '../assets/js/delighters.js'
import NavBar from '@/components/common/NavBar'
export default {
        name: "Home",
        components:{NavBar}
    }

</script>

<style scoped>
@import '../assets/css/style.css';

</style>
