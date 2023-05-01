<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home Search显示 在登陆注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import Pagination from "./components/Pagination/index.vue";
export default {
  components: {
    Header,
    Footer,
    Pagination,
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
