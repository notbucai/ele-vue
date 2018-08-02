<template>
  <section class="shop">
    
    <ShopHeader v-if="isHeaderShow"/>
    <ShopHeaderSkeleton v-else/>
    

    <div class="tab" ref="tabRef">
      <div class="slelect" @click="$router.replace(`/shop/slelect`)">
        <span :class="{'yes':$route.path == '/shop/slelect'}">点餐</span>
      </div>
      <div class="evaluate" @click="$router.replace(`/shop/evaluate`)">
        <span :class="{'yes':$route.path == '/shop/evaluate'}">评价</span>
      </div>
      <div class="info" @click="$router.replace(`/shop/info`)">
        <span :class="{'yes':$route.path == '/shop/info'}">商家</span>
      </div>
    </div>
    <router-view :scrollHeight="scrollHeight"></router-view>

  </section>
</template>

<script>
import { mapState } from "vuex";
import ShopHeader from "./components/ShopHeader.vue";
import ShopHeaderSkeleton from "./prerender/ShopHeader.skeleton.vue";
export default {
  data() {
    return {
      isHeaderShow: false,
      scrollHeight: 100
    };
  },
  components: {
    ShopHeader,
    ShopHeaderSkeleton
  },
  mounted() {
    this.$store.dispatch("getShopInfo", 11);
    this.getScrollHeight();
    window.addEventListener("resize", this.getScrollHeight);
  },
  computed: {
    ...mapState(["shopInfo"])
  },
  watch: {
    shopInfo() {
      this.isHeaderShow = true;
    }
  },
    //获取屏幕高度（减去切换卡高度）
  methods: {
    getScrollHeight() {

      let tabHeight = this.$refs["tabRef"].offsetHeight;

      // 为方便直接解析document的属性
      let { body, documentElement } = document;
      // 获取屏幕高度 同时为了解决兼容性问题（屏幕分辨率和屏幕宽度不一致。。。）
      let clientHeight = documentElement.clientHeight;
      console.log("=>",tabHeight);
      
      this.scrollHeight = clientHeight - tabHeight;

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tab {
  display: flex;
  position: sticky;
  z-index: 3;
  top: -2px;
  height: 40px;
  line-height: 40px;
  box-shadow: 0 1px 2px 0 #ddd;
  background-color: #fff;
  > div {
    flex: 1;
    text-align: center;
    > span {
      font-size: 14px;
      color: #666;
      display: inline-block;
      border-bottom: 2px solid transparent;
      height: 36px;
      &.yes {
        border-color: #28f;
      }
    }
  }
}
</style>
