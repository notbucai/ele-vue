<template>
  <section class="shopselect" :style="{height:`${scrollHeight}px`}">
    <div class="container">
      <main>

        <div class="menucategory">
          <ul>

            <li v-for="(item) in shopFoodList" :key="item.id" :class="{active:isTopID == item.id}" @click="skip(item.id)">
              <span class="menucategory-name">{{item.name}}</span>
              <span class="menucategory-count" v-if="getCartGroup(item.id)">{{getCartGroup(item.id)}}</span>
            </li>

          </ul>
        </div>


        <section ref="scrollUp" class="menuview"  v-if="isShow" @scroll="scrollUp($event)">

          <dl v-for="(foods) in shopFoodList" ref="item" :data="foods.id" :key="foods.id">
            <dt>{{foods.name}}</dt>
            <dd v-for="food in foods.foods" :key="food.item_id">
              <Fooddetails :food="food"  />
            </dd>
          </dl>

        </section>
        <FoodMenuSkeleton v-else/>

        <ShoppingCart/>

      </main>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Fooddetails from "./components/Fooddetails.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import FoodMenuSkeleton from "./prerender/FoodMenu.skeleton.vue";
export default {
  props: {
    scrollHeight: Number
  },
  components: {
    Fooddetails,
    FoodMenuSkeleton,
    ShoppingCart
  },
  data() {
    return {
      scrollTop: 0,
      clientHeight: 600,
      isTopID: 111,
      skipTime: 0,
      isShow: false
    };
  },
  mounted() {
    this.$store.dispatch("getShopFoodList", 11);
    this.$store.dispatch("getShoppingCart", 11);
  },
  computed: {
    ...mapState(["shopFoodList", "shoppingCart"])
  },
  watch: {
    shopFoodList() {
      this.isTopID = this.shopFoodList[0].id;
      this.isShow = true;
    }
  },
  methods: {
    //获取分类分组
    getCartGroup(groupId) {
      let num = 0;
      let group = this.shoppingCart.cart.group[0].filter(
        val => val.group_id == groupId
      );
      // console.log(group);

      group.forEach(element => {
        num += element.quantity;
      });
      return num;
    },

    //子scroll向下拉时改变html的scroll
    scrollUp(event) {
      let { scrollTop } = event.target;
      let { body, documentElement } = document;

      if (scrollTop > this.scrollTop) {
        let top = Math.floor(scrollTop - this.scrollTop);
        body.scrollTop += top;
        documentElement.scrollTop += top;
      }
      this.scrollTop = scrollTop;

      this.isTop(scrollTop);
    },
    //用于判断当前滚动条位置
    async isTop(scrollTop) {
      let { item } = this.$refs;

      // window.item = item;
      let nodes = item.filter(element => {
        // console.log(scrollTop, element.offsetTop);
        return element.offsetTop <= scrollTop;
      });

      this.isTopID =
        (nodes &&
          nodes[nodes.length - 1] &&
          nodes[nodes.length - 1].getAttribute("data")) ||
        this.isTopID;
    },
    //跳转移动到指定栏目
    skip(value) {
      // console.log(value,"===");
      let { item } = this.$refs;
      let { scrollUp } = this.$refs;

      let node = item.find(element => {
        return element.getAttribute("data").trim() == value;
      });

      if (node) {
        let dist = 20;
        if (scrollUp.scrollTop > node.offsetTop) {
          dist = -dist;
        }

        clearInterval(this.skipTime);
        this.skipTime = setInterval(() => {
          // console.log(scrollUp.scrollTop,scrollUp.scrollHeight,scrollUp.clientHeight);

          if (
            Math.abs(scrollUp.scrollTop - node.offsetTop) <= Math.abs(dist) ||
            (dist > 0 &&
              scrollUp.scrollTop + scrollUp.clientHeight ==
                scrollUp.scrollHeight)
          ) {
            clearInterval(this.skipTime);
            scrollUp.scrollTop = node.offsetTop;

            return;
          }
          scrollUp.scrollTop += dist;
        }, 1);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  main {
    display: flex;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 60px;
  }
}
.menucategory {
  width: 80px;
  box-sizing: border-box;
  background-color: #f8f8f8;
  height: 100%;
  overflow-y: auto;
  position: relative;
  ul > li {
    position: relative;
    box-sizing: initial;
    padding: 16px 8px;
    font-size: 12px;
    color: #666;
    &.active {
      color: #333;
      background-color: #fff;
      font-weight: 700;
    }
    .menucategory-count {
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      transform: scale(0.68);
      padding: 4px 6px;
      background: linear-gradient(#ff4312, #f49000);
      border-radius: 50%;
      text-align: center;
      color: #fff;
      font-size: 12px;
    }
  }
}
.menuview {
  overflow-y: auto;
  position: relative;
  height: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  dl {
    dt {
      font-size: 12px;
      font-weight: 700;
      padding: 8px 6px;
      color: #666;
    }
  }
}
</style>
