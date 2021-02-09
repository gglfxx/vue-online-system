<template>
  <div class="main-body">
      <Header></Header>
     <div class="swiper-container banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item) in banners" :key="item.url">
              <img :src="item.url" alt="" @click="$router.push({path:'/movie_detail',query:{id:item.id}})">
            </div>
          </div>
     </div>
    <div class="main-nav">
      <ul>
        <li class="icon hot"><a href="#"><span>热门</span></a></li>
        <li class="icon notice"><a href="#"><span>预告</span></a></li>
        <li class="icon mv-top"><a href="#"><span>榜单</span></a></li>
        <li class="icon family"><a href="#"><span>分类</span></a></li>
      </ul>
    </div>
    <div class="main">
          <div class="panel">
            <div class="header">
              <span class="red-name">正在热播</span><span class="more" @click="$router.push({path:'/movie',query:{hotMovie:1}})">全部{{hotMovieList.length}}部 <span class=" icon-more"></span></span>
            </div>
            <div class="body">
              <!-- <div class="item" v-for="(item,index) in hotMovieList.slice(0, 6)" :key="index">
                <img :src="item.url" alt="" @click="$router.push({path:'/movie_detail',query:{id:item.id}})">
                <div class="title">{{item.title}}</div>
              </div> -->
              <swiper :imgs="hotMovieList"></swiper>
            </div>
          </div>
          <div class="panel">
            <div class="header">
              <span class="blue-name">最新上线</span><span class="more" @click="$router.push({path:'/movie',query:{hotMovie:0}})">全部{{notShowMovieList.length}}部 <span class=" icon-more"></span></span>
            </div>
            <div class="body">
              <div class="item" v-for="(item,index) in notShowMovieList.slice(0,6)" :key="index">
                <img :src="item.url" alt="" @click="$router.push({path:'/movie_detail',query:{id:item.id}})">
                <div class="title">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
    <div class="bottom">
      <router-view></router-view>
      <tabBar :tabbarList="tabbarList" />
    </div>
  </div>
</template>
<script>
import tabBar from "@/components/tabbar"
import Header from "@/components/header"
import swiper from "@/components/swiper"
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: "bottom",
  components: {
    tabBar,
    Header,
    swiper
  },
  data() {
    return {
      title: "vue online system",
      tabbarList: [
        { name: "主页", path: "/" ,icon:'icon movie_index'},
        { name: "影城", path: "/store" ,icon:'icon movie_video'},
        { name: "留言", path: "/chat" ,icon:'icon movie_chat'},
        { name: "我的", path: "/my" ,icon:'icon movie_own'},
      ],
      banners:[
        {url:require("../assets/images/avengers.jpg"),title:"复仇者联盟",id:'1'},
        {url:require("../assets/images/fury.jpg"),title:"狂怒",id:'2'},
        {url:require("../assets/images/doctor.jpg"),title:"奇异博士",id:'3'}
      ],
      //热门电影列表
      hotMovieList:[
        {url:require("../assets/images/t_1.jpg"),title:"你的名字",id:'1',score:'5.2'},
        {url:require("../assets/images/t_2.jpg"),title:"长城",id:'2',score:'5.2'},
        {url:require("../assets/images/t_3.jpg"),title:"血战钢锯岭",id:'3',score:'5.2'},
        
      ],
      //未上映电影列表
      notShowMovieList:[
        {url:require("../assets/images/coming_1.jpg"),title:"唐人街探案3",id:'1',month:'2',day:"1"},
        {url:require("../assets/images/coming_2.jpg"),title:"侍神令",id:'2',month:'2',day:"1"},
        {url:require("../assets/images/coming_3.jpg"),title:"刺杀小说家",id:'3',month:'2',day:"1"}
      ]
    };
  },
  mounted() {
          new Swiper ('.banner', {
            autoplay:true,
            loop: true,
            effect: "coverflow",
            centeredSlides: true,
            slidesPerView: "auto",    //设置中间的卡片居中显示
            coverflowEffect: {           // coverflow 效果调整
              rotate: 30,
              stretch: 0,
              depth: 60,
              modifier: 2,
              slideShadows: true
            }
          });
          window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    //处理滚动
    handleScroll(){
        window.pageYOffset>window.innerWidth*80/360 ? this.headerActive = true : this.headerActive = false
    }
  }
};
</script>
<style scoped>
.main-body {
  margin: 0 auto;
}
.banner {
  margin: 0 auto;
  width: 95%;
  overflow: hidden;
}
.banner img{
    width: 100%;
    height: auto;
    border-radius: 0.6rem;
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
</style>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .main
      width 100%
      border-top-left-radius .25rem
      border-top-right-radius .25rem
      padding-top .25rem
      padding-bottom .8rem
      position relative
      background-color #fff
      margin-bottom 35px
      .panel
        font-size .3125rem
        padding .1rem .25rem
        border-bottom .08rem solid #f5f5f5
        .header
          display flex
          justify-content center
          align-items center
          padding 0 .125rem .2rem
          .red-name
            flex 1
            color #dd2727
            font-weight 600
          .blue-name
            flex 1
            color #2d98f3
            font-weight 600
          .more
            flex 1
            text-align right
            vertical-align middle
            font-size .25rem
        .body
          display flex
          flex-wrap wrap
          .item
            width 33.33%
            padding .4rem
            box-sizing border-box
            position relative
            overflow hidden
            img
              width 100%
              height 90%
              border-radius  0.3rem
              vertical-align bottom
            .describe
              position absolute
              left 0
              bottom 0
              width 100%
              display flex
              align-items center
              padding 0 .08rem
              height .4rem;
              box-sizing border-box
              background-color rgba(0,0,0,.4)
            .title
              height 1.5rem
              width 100%
              font-weight 600
              display flex
              justify-content center
              align-items center
              font-size .25rem
            .peopleNumber
              color #ffb400
              position absolute
              left 0
              bottom 0
              width 100%
              display flex
              align-items center
              padding 0 .08rem
              height .4rem
              background-color rgba(0,0,0,.4)
              font-size .25rem
              box-sizing border-box
            .presell
              height 1rem
              width 100%
              font-size .25rem
              .name
               font-weight 600
               font-size .25rem
               padding .1rem 0
               width 100%
              .info
                width 100%
                height .6rem
                font-size .25rem
                font-weight lighter
                display flex
                justify-content center
                align-items center
                text-align center
                .date
                  flex 1
                .btn
                  text-align center
                  font-size .25rem
                  flex 1
                  color #fff
                  width 100%
                  box-sizing border-box
                  padding .12rem 0
                  background-color #2d98f3
                  border-radius .2rem
                  box-shadow .02rem .02rem .08rem #2d98f3
      .panel + .panel
        padding-top .25rem
</style>