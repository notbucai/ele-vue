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
    <Shoplist :shoplist="shoplist" />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Shoplist from "./components/Shoplist.vue";
import { mapState } from "vuex";
export default {
  name: "msite",
  components: {
    Nav,
    Shoplist
  },
  mounted() {
    this.$store.dispatch("getAddress");
    this.$store.dispatch("getNavigation");
  },
  computed: {
    ...mapState(["address"])
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      
      shoplist: [
        {
          img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
          title: "标题"
        },
        {
          img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
          title: "标题"
        },
        {
          img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
          title: "标题"
        },
        {
          img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
          title: "标题"
        },
        {
          img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
          title: "标题"
        }
      ]
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
</style>
