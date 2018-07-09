<template>
  <div>

    <swiper v-if="isShow" :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(navs, index) in navigation" :key="index">
        <div class="nav">
          <router-link v-for="nav in navs" :key="nav.id" :to="nav.to" class="nav-item">
            <div class="container">
              <img :src="nav.img_path" :alt="nav.title">
            </div>
            <span>{{nav.title}}</span>
          </router-link>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 显示骨架图，，bug:出现缓存，，， -->
    <div v-else>
        <div class="nav">
          <div class="nav-item" v-for="(i) in 10" :key="i">
            <div class="container back"></div>
            <span class="back-span"></span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "profile",
  props: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      swiperOption: {
        paginationClickable: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    ...mapState(["navigation"]),
    isShow() {
      return this.navigation.length !== 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav {
  overflow: hidden;
  box-sizing: border-box;
  padding: 2px;
  .nav-item {
    float: left;
    width: 20%;
    text-align: center;
    margin-top: 8px;
    padding: 4px;
    box-sizing: border-box;
    .back {
      background: #f4f4f4;
      border-radius: 50%;
    }
    .back-span {
      height: 14px;
      width: 60%;
      background: #f4f4f4;
    }
    .container {
      width: 42px;
      height: 42px;
      margin: 4px auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      color: #666;
      font-size: 14px;
      display: inline-block;
    }
  }
}
.swiper-container {
  width: 100%;
  height: auto;
  padding-bottom: 24px;
}
</style>
