<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(nav, index) in navs" :key="index">
            <div class="nav">
                <a v-for="(item, index) in nav" :key="index" href="javascript:" class="nav-item">
                    <div class="container">
                        <img :src="item.img" :alt="item.alt" >
                    </div>
                    <span>{{item.title}}</span>
                </a>
            </div>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
  name: "profile",
  props: {
    navs: Array
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
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
    .container {
      width: 42px;
      height: 42px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      color: #666;
      font-size: 14px;
    }
  }
}
.swiper-container {
  width: 100%;
  height: auto;
  padding-bottom: 24px;
}
</style>
