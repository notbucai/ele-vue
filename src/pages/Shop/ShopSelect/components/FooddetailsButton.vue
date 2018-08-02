<template>
    <div class="fooddetails-button">
        <span class="cartBtn">
            <span v-if="cartFood">
              <a href="" class="minus">
                  <i class="iconfont icon-minus"></i>
              </a>
              <span class="count">{{cartFood.quantity}}</span>
            </span>
            <a href="" class="add">
                <i class="iconfont icon-add"></i>
            </a>
        </span>
    </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  props: {
    id: String
  },
  components: {},
  computed: {
    ...mapState(["shoppingCart"]),
    cartFood() {
      return this.shoppingCart.cart.group[0].find(val => val.sku_id == this.id);
    }
  },
  methods:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fooddetails-button {
  position: absolute;
  .cartBtn {
    a {
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      display: inline-block;
      > .iconfont {
        display: inline-block;
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
      }
    }
    .minus {
      float: left;
      color: #2396ff;
      .iconfont {
        border: 1px solid #2396ff;
      }
    }
    .add {
      float: right;
      color: #fff;
      .iconfont {
        border: 1px solid #2396ff;
        background-color: #2396ff;
      }
    }
    .no{
      
    }
    .count {
      color: #444;
      float: left;
      font-size: 14px;
      width: 26px;
      text-align: center;
      line-height: 24px;
    }
  }
}
</style>
