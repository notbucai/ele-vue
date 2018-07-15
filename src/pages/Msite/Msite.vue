<template>
  <div class="msite">
    <mt-header :title="address.name">
      <router-link to="/" slot="left">
        <mt-button class="iconfont  icon-sousuo"></mt-button>
      </router-link>
      <router-link v-if="userData.code!==0" to="/login" slot="right">登陆 | 注册</router-link>
      <router-link v-else to="/userinfo" slot="right"><i class="iconfont icon-wode"></i></router-link>
    </mt-header>

    <Nav/>

    <div class="shoplist-title">推荐商家</div>

    <section class="shoplist" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <!--
        <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
          <li v-for="item in list">{{ item }}</li>
        </ul>
       -->
      <List v-for="(shop) in shoplists" :restaurant="shop.restaurant" :key="shop.id" />

    </section>
    <section :class="{'loading':shoplists.length }" style="display:none">加载中。。。</section>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import List from "./components/List.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "msite",
  components: {
    Nav,
    List
  },
  mounted() {
    this.$store.dispatch("getShoplists");
  },
  computed: {
    ...mapState(["address", "shoplists","userData"])
  },
  methods: {
    ...mapActions(["updateShoplists"]),
    loadMore() {
      this.loading = true;
      this.updateShoplists();
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      loading: true
    };
  },
  watch: {
    shoplists() {
      if (this.shoplists.length > 0) {
        this.loading = false;
      }
    }
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
.loading {
  margin-bottom: 60px;
  height: 30px;
  line-height: 30px;
  width: 100%;
  display: block !important;
  text-align: center;
}
</style>
