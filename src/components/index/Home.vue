<template>
  <div class="home">
    <!-- <h1 style="font-size:1rem;">Home</h1> -->
    <!-- 头部标题 -->
    <yd-navbar>
      <img slot="center" src="http://static.yufenghen.cn/vueserver/resource/img/logo.png" />
    </yd-navbar>
    <!-- 轮播图 -->
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.yufenghen.cn/vueserver/resource/img/new1.jpg" />
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.yufenghen.cn/vueserver/resource/img/new2.jpg" />
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.yufenghen.cn/vueserver/resource/img/new3.jpg" />
        </a>
      </yd-slider-item>
    </yd-slider>
    <!-- 轮播图下面的两等分网格 -->
    <yd-grids-group :rows="2">
        <yd-grids-item>
            <yd-icon slot="icon" name="phone2" color="#209dfc"></yd-icon>

            <span slot="text">预约挂号</span>
        </yd-grids-item>
        <yd-grids-item>
            <yd-icon slot="icon" name="search" color="#209dfc"></yd-icon>
            <span slot="text">报告查询</span>
        </yd-grids-item>
    </yd-grids-group>
    <!-- 预约挂号下面的三宫格 -->
    <template>
    <yd-grids-group :rows="3" >
        <yd-grids-item v-for="n in 6" :key="n">
            <yd-icon slot="icon" :name="name[n-1]" color="rgb(255, 104, 93)"></yd-icon>
            <span slot="text">{{msg[n-1]}}</span>
        </yd-grids-item>
    </yd-grids-group>
</template>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:['home','good','like','location','shield','question'],
            msg: ["费用查询","就诊攻略","健康百科","医院导航","医院介绍","满意度调查"]
        }
    }
};
</script>

<style>
</style>