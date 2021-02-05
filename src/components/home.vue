<template>
  <div class="main-body">
    <div class="head">
      <div class="logo"><img v-if="logo" :src="logo" /></div>
      <div class="logo-desc">ONLINE MOVIE</div>
      <div class="search">
        <input type="text" @keyup.enter="submit" />
      </div>
    </div>
    <div class="banner">
      <el-carousel :interval="4000" indicator-position="outside" height="195px" ref="carousel">
      <el-carousel-item v-for="(item,index) in banners" :key="item.url">
        <v-touch :swipe-options="{direction: 'horizontal'}" v-on:swipeleft="swiperleft(index)" v-on:swiperight="swiperright(index)" class="wrapper">
        <div class="menu-container" ref="menuContainer">   
          <img v-lazy="item.url"/>
        </div>
       </v-touch>
      </el-carousel-item>
    </el-carousel>
    </div>
    <div class="main-nav">
      <ul>
        <li class="icon hot"><a href="#"><span>热门</span></a></li>
        <li class="icon notice"><a href="#"><span>预告</span></a></li>
        <li class="icon mv-top"><a href="#"><span>榜单</span></a></li>
        <li class="icon item"><a href="#"><span>分类</span></a></li>
      </ul>
    </div>
    <div class="main-lastet-broad">
      <h4>正在热播</h4>
      <v-touch :swipe-options="{direction: 'horizontal'}" v-on:swipeleft="left" v-on:swiperight="right" class="wrapper">
        <ul>
          <li v-for="(item) in hotImages" :key="item.url">
            <img v-lazy="item.url"/>
            <span>{{item.title}}</span>
          </li>
        </ul>
       </v-touch>
    </div>
    <div class="main-lastet-online">
      <h4>最新上线</h4>
      <v-touch :swipe-options="{direction: 'horizontal'}" v-on:swipeleft="left" v-on:swiperight="right" class="wrapper">
        <ul>
          <li v-for="(item) in hotImages" :key="item.url">
            <img v-lazy="item.url"/>
            <span>{{item.title}}</span>
          </li>
        </ul>
       </v-touch>
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
.main-body {
  margin: 0 auto;
}
.head {
  margin: 1.5rem auto;
  width: 95%;
  height: 2rem;
}
.logo {
  float: left;
  margin-top: 3px;
}
.logo-desc {
  color: #ff4a4a;
  font-weight: 600;
  margin-left: 0.4rem;
  vertical-align: middle;
  display: inline-block;
  font-family: sanfranciscotext;
}
.search {
  float: right;
  width: 50%;
}
.search input {
  width: 97%;
  height: 1.6rem;
  overflow: hidden;
  background: url(../assets/search.png) no-repeat right center #ebebeb;
  background-size: 1.4rem;
  border: 1px solid #f5f5f5;
  border-radius: 2rem;
}
.banner {
  margin: 0 auto;
  width: 95%;
  height: 13rem;
}
.banner img{
    width: 100%;
    height: 100%;
    border-radius: 2rem;
}
.main-nav{
  width:100%;
  margin:0 auto;
}
.main-nav ul{
    position: relative;
    display: flex;
    padding: 0;
    justify-content: space-around;
}
.main-nav ul li{
  display: inline-block;
  height: 4.5rem;
}
.main-nav ul li a{
  color:#2b231f;
}
.main-nav ul li span{
  position:absolute;
  bottom:0;
  font-size: 0.8rem;
  margin-left: 0.6rem;
  font-family: sanfranciscotext;
}
.wrapper {
  touch-action: pan-y !important;
}
.main-lastet-broad,
.main-lastet-online {
  width: 95%;
  margin: 1.5rem auto;
  height: 10rem;
}
.main-lastet-broad h4,
.main-lastet-online h4{
  height: 0.5rem;
}
.main-lastet-broad ul,.main-lastet-online ul{
  white-space: nowrap;
  overflow-x: auto;
  padding: 0;
  display: flex;
}
.main-lastet-broad ul li,.main-lastet-online ul li{
  position: relative;
  display: inline-block;
  height: 8rem;
  margin-right: 1rem;
}
.main-lastet-broad ul li img,.main-lastet-online ul li img{
    height: 100%;
    width:5.3rem;
    border-radius: 0.5rem;
}
.main-lastet-broad ul li span,.main-lastet-online ul li span{
  position:absolute;
  bottom:0;
  font-size: 0.8rem;
  font-family: sanfranciscotext;
}
</style>
<script>
import logo from "@/assets/logo.png";
import tabBar from "@/components/tabbar";
export default {
  name: "bottom",
  components: {
    tabBar,
  },
  data() {
    return {
      title: "vue online system",
      logo: logo,
      tabbarList: [
        { name: "主页", path: "/" },
        { name: "影城", path: "/store" },
        { name: "留言", path: "/chat" },
        { name: "我的", path: "/my" },
      ],
      imageList:[
        {url:"",name:"1"},
        {url:"",name:"2"},
        {url:"",name:"3"},
      ],
      banners:[
        {url:require("../assets/avengers.png"),title:"复仇者联盟"},
        {url:require("../assets/furys.png"),title:"狂怒1"},
        {url:require("../assets/wolf.png"),title:"狂怒2"}
      ],
      hotImages:[
        {url:require("../assets/avengers.png"),title:"复仇者联盟"},
        {url:require("../assets/furys.png"),title:"狂怒1"},
        {url:require("../assets/wolf.png"),title:"狂怒2"}
      ]
    };
  },
  methods: {
    //设置滑动切换轮播图
    swiperleft: function (index) {
      //上一页
      this.$refs.carousel.prev();
      //设置幻灯片的索引
      this.$refs.carousel.setActiveItem(index - 1);
    },
    swiperright: function (index) {
      //下一页
      this.$refs.carousel.next();
      this.$refs.carousel.setActiveItem(index + 1);
    },
    //左右滑动
    left:function(){
      console.log("左划")
    },
    right:function(){

    }
  }
};
</script>