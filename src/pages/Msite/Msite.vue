<template>
  <div class="msite">
    <mt-header :title="address.name">
      <router-link to="/" slot="left">
        <mt-button class="iconfont  icon-sousuo"></mt-button>
      </router-link>
      <mt-button slot="right">登陆 | 注册</mt-button>
    </mt-header>

    <Nav/>

    <div class="shoplist-title">推荐商家</div>

    <section class="shoplist">
      <List v-for="(shop) in shoplists" :restaurant="shop.restaurant" :key="shop.id"/>

    </section>

  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import List from "./components/List.vue";
import { mapState } from "vuex";
export default {
  name: "msite",
  components: {
    Nav,
    List
  },
  mounted() {
    this.$store.dispatch("getAddress");
    this.$store.dispatch("getNavigation");
    this.$store.dispatch("getShoplists");
  },
  computed: {
    ...mapState(["address","shoplists"])
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shoplist-title {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #333;
  margin: 8px 0;
  &:after {
    content: "";
    width: 20px;
    display: inline-block;
    height: 1px;
    margin-bottom: 4px;
    margin-left: 10px;
    background-color: #aaa;
  }
  &:before {
    content: "";
    width: 20px;
    display: inline-block;
    height: 1px;
    margin-bottom: 4px;
    margin-right: 10px;
    background-color: #aaa;
  }
}
.shoplist {
  display: flex;
  flex-direction: column;
}
</style>
