<template>
  <section class="shoplist-item" @click="open(restaurant.id)">
    <div class="container">
      <div class="item-img">
        <img :src="getImgUrl(restaurant.image_path)" alt="">
      </div>
      <div class="item-main">

        <h3>{{restaurant.name}}</h3>
        <p>
          <span class="left grade"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="> {{restaurant.rating}} 月售{{restaurant.recent_order_num}}单</span>
          <span class="right" v-if="restaurant.delivery_mode" :style="{background:'#'+restaurant.delivery_mode.color,color:'#fff',padding:'1px',borderRadius: '1px'}">{{restaurant.delivery_mode.text}}</span>
        </p>
        <p>
          <span class="left">￥{{restaurant.float_minimum_order_amount}}起送 | 配送费￥{{restaurant.float_delivery_fee}}</span>
          <span class="right">{{(restaurant.distance/1000).toFixed(2)}}km | {{restaurant.order_lead_time}}分钟</span>
        </p>

      </div>
    </div>
    <div class="item-sale">
      <template v-for="(activitie) in restaurant.activities">
        <!--  v-if="activitie.type" -->
        <section class="sale" :key="activitie.id" v-show="isShow||activitie.type">
          <i :style="{backgroundColor:'#'+activitie.icon_color}">{{activitie.icon_name}}</i>
          <span>{{activitie.description}}</span>
        </section>
      </template>
      <div class="sale-activity" @click="openOrClose()">
        <span>{{restaurant.activities.length}}个活动</span>
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" class="">
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    restaurant: Object
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isShow: false
    };
  },
  computed: {},
  methods: {
    getImgUrl(image_path) {
      let path = "";
      if (/jpeg$/.test(image_path)) {
        path = "jpeg";
      } else if (/png$/.test(image_path)) {
        path = "png";
      }
      return `//fuss10.elemecdn.com/${image_path}.${path}`;
    },
    openOrClose(arr) {
      this.isShow = !this.isShow;
    },
    open(key) {
      // console.log(111);
      
      localStorage.setItem("shop_item", key);
      this.$router.push("/shop");
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shoplist-item {
  margin-top: 8px;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  display: flex;
  padding: 0 10px;
  border-bottom: 1px solid #f1f1f1;
  .left {
    float: left;
  }
  .right {
    float: right;
    margin-left: 10px;
  }

  p {
    color: #666;
    font-size: 10px;
  }
  .container {
    display: flex;
    flex-direction: row;
    padding-bottom: 8px;
    box-sizing: border-box;
    .item-img {
      width: 60px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #eee;
      }
    }
    .item-main {
      padding-bottom: 4px;
      flex-grow: 2;
      margin-left: 12px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      border-bottom: 1px dotted #f1f1f1;
      h3 {
        font-size: 14px;
        line-height: 18px;
        font-weight: 700;
        overflow: hidden;
      }
    }
  }
  .item-sale {
    padding-left: 72px;
    position: relative;
    .sale {
      display: flex;
      margin-bottom: 4px;
      color: #666;
      font-size: 10px;
      span {
        margin-left: 4px;
      }
      i {
        color: #fff;
        line-height: normal;
        border-radius: 1px;
      }
    }
    .sale-activity {
      position: absolute;
      right: 0;
      top: 0;
      color: #999;
      span {
        font-size: 8px;
      }
    }
  }
}
</style>
