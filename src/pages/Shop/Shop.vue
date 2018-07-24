<template>
  <section class="shop">

    <ShopHeader/>

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
    <router-view :tabRefElement="tabRefElement"></router-view>

  </section>
</template>

<script>
import { mapState } from "vuex";
import ShopHeader from "./components/ShopHeader.vue";
export default {
  components: {
    ShopHeader
  },
  mounted(){
    this.$store.dispatch('getShopInfo',11);
  },
  computed:{
    tabRefElement(){
      return this.$refs;
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
