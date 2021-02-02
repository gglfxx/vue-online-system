<template>
  <div class="main-body">
    <div class="head">
      <div class="logo"><img v-if="logo" :src="logo"></div>
      <div class="logo-desc">online movie</div>
      <div class="search">
        <input type="text"  @keyup.enter="submit">
      </div>
    </div>
    <div class="banner"></div>
    <div class="main-nav"></div>
    <div class="main-lastet-broad">
        <h4>正在热播</h4>
    </div>
    <div class="main-lastet-online">
        <h4>最新上线</h4>
    </div>
    <div class="bottom">
        <router-view></router-view>
        <tabBar :tabbarList="tabbarList" />
    </div>
  </div>
</template>
<style >
    @import "../styles/icon.scss";
</style>
<style scoped>
.main-body{
    margin: 0 auto;
}
.head {
  margin-top:1.5rem;
  width: 100%;
  height: 3rem;
}
.logo-desc {
  width: 35%;
  float: left;
  color: #ff4a4a;
  font-weight: 600;
  font-size:1.2rem;
  margin-left: 0.5rem;
  font-family: sans-serif;
}
.search {
  float: right;
  width: 50%;
}
.search input {
    width: 97%;
    height: 1.6rem;
    overflow: hidden;
    font-size: 0.5410628rem;
    background: #ebebeb;
    border: 1px solid #f5f5f5;
    border-radius: 2rem;
}
.banner{
    margin: 0 auto;
    width:95%;
    border: 1px solid #f5f5f5;
    border-radius: 2rem;
    height:12rem;
    box-shadow: 0.5rem 0.5rem 0.5rem #ebebeb;
}
.main-nav{
    margin: 2rem auto;
    width:95%;
    border: 1px solid #f5f5f5;
    border-radius: 2rem;
    height:5rem;
}
.main-lastet-broad,.main-lastet-online{
    margin: 2rem auto;
    width:95%;
    border: 1px solid #f5f5f5;
    border-radius: 2rem;
    height:10rem;
}

</style>
<script>
 import logo from '@/assets/logo.png'
 import tabBar from '@/components/tabbar'
export default {
  name:"bottom",
  components:{
        tabBar
    },
  data() {
    return {
      title: 'vue online system',
      logo: logo,
      tabbarList:[
                {name:"主页",path:"/"},
                {name:"影城",path:"/store"},
                {name:"留言",path:"/chat"},
                {name:"我的",path:"/my"}
            ]
    }
  }
}
</script>