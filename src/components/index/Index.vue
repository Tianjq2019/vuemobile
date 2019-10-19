<template>
<div>
    <!-- fixed 固定到底部 -->
  <yd-tabbar fixed>
      <!-- <h1>{{c_active}}</h1> -->
        <yd-tabbar-item title="首页" link="/" :active="c_active==1" @click.native="isactive(1)">
            <yd-icon name="home" slot="icon" size="0.54rem" ></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="动态" link="/dongtai" :active="c_active==2" @click.native="isactive(2)">
            <yd-icon name="feedback" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/user" :active="c_active==3" @click.native="isactive(3)">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>        
    </yd-tabbar>
    
    <router-view/>
</div>

</template>

<script>
export default {
     name: 'Index',
     data(){
         return {
             c_active:0
         }
     },
     methods:{
        isactive(index){
            this.c_active = index;
            console.log(index);
            // alert(1)
        }
     }
}
</script>

<style>

</style>