<template>
<div class="cart-list" >
    <div class="title">
        <h5>已选商品</h5>
        <span><i class="iconfont icon-qingkonghuishouzhan"></i> 清空</span>
    </div>
    <ul>
        <li v-for="(item) in shoppingCart.cart.group[0]" :key="item.id">
            <div class="info">
              <span class="name">{{item.name}}</span>
              <span class="money">
                  <del v-if="item.activities.length">￥{{item.total_price}}</del>
                  ￥{{item.total_price + calculation(item.activities)}}
              </span>
            </div>
            
            <FooddetailsButton :id="item.sku_id" class="extra"/>
        </li>
        <li v-for="item in shoppingCart.cart.extra" :key="item.id">
          <div class="info">
              <span class="name">{{item.name}}</span>
              <span class="money">
                  {{item.price}}
              </span>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import { mapState } from "vuex";
import FooddetailsButton from "./FooddetailsButton.vue";
export default {
  components: { FooddetailsButton },
  data() {
    return {};
  },
  methods: {
    calculation(activities) {
      let req_price = 0;
      activities.forEach(element => {
        let { quantity, max_quantity, price } = element;
        if (quantity <= max_quantity) {
          req_price =(quantity * price);
        }else{
          req_price = (max_quantity * price);
        }
      });
      return req_price;
    }
  },
  computed: {
    ...mapState(["shoppingCart"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cart-list {
  // display: none;
  height: 320px;
  .title {
    color: #888;
    font-size: 16px;
    padding: 8px 10px;
    background-color: #f2f2f2;
    overflow: hidden;
    h5 {
      float: left;
      padding-left: 4px;
      line-height: 18px;
      border-left: 3px solid #007aff;
      font-weight: 540;
    }
    span {
      float: right;
      font-size: 12px;
      line-height: 18px;
      .iconfont {
        font-size: 12px;
        color: #333;
      }
    }
  }
  ul {
    overflow-y: auto;
    height: 280px;
    > li {
      position: relative;
      padding: 16px 10px;
      border-bottom: 1px solid #f9f9f9;
      .info {
        display: flex;
        width: 264px;
        .name {
          color: #444;
          flex-grow: 1;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 16px;
        }
        .money {
          color: #ff5339;
          width: 120px;
          white-space:nowrap ;
          display: inline-block;
          text-align: right;
          font-size: 14px;
          font-weight: 600;
          vertical-align: middle;
          height: 20px;
          del {
            font-size: 10px;
            color: #aaa;
            line-height: 20px;
            font-weight: normal;
          }
        }
      }

      .extra {
        bottom: 8px;
        right: 10px;
      }
    }
  }
}
</style>
