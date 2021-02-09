<template>
  <div class="swiper-container images" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
        <img class="img" :src="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
export default {
  name: "swiper",
  data() {
    return {};
  },
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
  },
 mounted() {
          new Swiper ('.images', {
              slidesPerView: 'auto',
              spaceBetween: 30,
              centeredSlides: false,
          });
  },
};
</script>
<style>
#swiper{
    width: 100%;
    height: 200px;
}
#swiper img{
  width:30%;
  height:auto;
}
</style>