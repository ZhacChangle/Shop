<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(pic, index) in list" :key="pic.id">
        <img :src="`${publicPath}${pic.imgUrl}`" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  watch: {
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            // direction: "vertical", // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
              // 用户操作 swiper 之后自动切换不会停止，每次都会重新启动 autoplay
              disableOnInteraction: false,
              delay: 3000,
            }, //自动切换
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              type: "bullets",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            scrollbar: {
              el: ".swiper-scrollbar",
            },
          });
        });
      },
    },
  },
};
</script>

<style></style>
