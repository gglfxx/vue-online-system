<template>
  <div class="main-body">
    <div class="head">
      <div class="logo"><img v-if="logo" :src="logo" /></div>
      <div class="logo-desc">ONLINE MOVIE</div>
      <div class="search">
        <input type="text" @keyup.enter="submit" />
      </div>
    </div>
    <div class="banner"></div>
    <div class="banners">
      <div class="banner-index"></div>
      <div class="banner-index"></div>
      <div class="banner-index"></div>
    </div>
    <div class="main-nav">
      <ul>
        <li class="icon hot"><a href="#"><img/><span>热门</span></a></li>
        <li class="icon notice"><a href="#"><img/><span>预告</span></a></li>
        <li class="icon mv-top"><a href="#"><img/><span>榜单</span></a></li>
        <li class="icon item"><a href="#"><img/><span>分类</span></a></li>
      </ul>
    </div>
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
  border-radius: 2rem;
  background: url(../assets/bg1.png) no-repeat;
  height: 12rem;
  background-size: 120%;
  box-shadow: 0.5rem 0.5rem 0.5rem #ebebeb;
}
.banners {
  width: 95%;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 0.5rem;
  align-items: center;
}
.banner-index {
  width: 10px;
  margin-left: 5px;
  border: 1px solid #26231f;
}
.main-nav{
  width:100%;
  position: relative;
  margin:1.5rem auto;
}
.main-nav ul{
}
.main-nav ul li{
  display: inline-block;
}
.main-nav ul li span{
  position:absolute;
  bottom:0;
}
.main-lastet-broad,
.main-lastet-online {
  margin: 2rem auto;
  width: 95%;
  height: 10rem;
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
    };
  },
};
</script>