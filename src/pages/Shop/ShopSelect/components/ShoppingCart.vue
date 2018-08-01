<template>
  <section class="shoppingCart">
      <main>
        <transition name="fade">
          <div class="mask" v-if="isExamine"  @click="examine"></div>
        </transition>
        <div class="main">
          <div class="info">{{shoppingCart.shop_promotion_cell[0].add_on_pop_up_tip}}</div>
          <transition
          name="down">
            <CartList v-if="isExamine"/>
          </transition>
        </div>
      </main>
    <footer @click="examine">
        <div class="main">
            <div class="icon iconfont icon-ziyuan"></div>
            <div class="money">
                <div class="price">
                    ￥{{shoppingCart.cart.total}}
                    <del>￥{{shoppingCart.cart.original_total}}</del>
                </div>
                <div class="info">{{shoppingCart.cart.agent_fee_tip}}</div>
            </div>
            <div class="go-pay">{{shoppingCart.checkout_button_v2.text}}</div>
        </div>
    </footer>

  </section>
</template>

<script>
import { mapState } from "vuex";
import CartList from "./CartList.vue";
export default {
  components: {
    CartList
  },
  data() {
    return {
      isExamine: true
    };
  },
  methods: {
    examine() {
      let flag = "hidden";
      if (this.isExamine) {
        flag = "auto";
      }
      document.body.style.overflow = flag;
      document.documentElement.style.overflow = flag;
      this.isExamine = !this.isExamine;
    }
  },
  computed: {
    ...mapState(["shoppingCart"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shoppingCart {
  position: absolute;
  top: 0;
  z-index: 999;
  main {
    position: fixed;
    overflow: hidden;
    .mask {
      // display: none;
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: #2f333390;
    }
    > .main {
      position: fixed;
      bottom: 0;
      z-index: 100;
      padding-bottom: 44px;
      width: 100%;
      background-color: #fff;
      > .info {
        color: #555;
        font-size: 10px;
        line-height: 18px;
        text-align: center;
        background-color: #fffad8;
      }

      .down-enter-active,
      .down-leave-active {
        transition: height 0.5s;
      }
      .down-enter, .down-leave-to /* .down-leave-active below version 2.1.8 */ {
        height: 0;
      }
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.5s;
      }
      .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
    }
  }
  footer {
    width: 100%;
    background-color: #303030;
    position: fixed;
    bottom: 0;

    .main {
      position: relative;
      height: 100%;
      box-sizing: border-box;
      .icon {
        box-sizing: border-box;
        position: absolute;
        top: -10px;
        left: 10px;
        width: 50px;
        height: 50px;
        font-size: 16px;
        font-weight: 700;
        border-radius: 50%;
        text-align: center;
        padding-top: 14px;
        color: #f5f5f5;
        border: 4px solid #000;
        background-color: #3190e8;
      }
      .money {
        margin-left: 60px;
        padding: 8px;
        display: flex;
        flex-flow: column;
        height: 30px;
        .price {
          color: #f6f6f6;
          font-size: 16px;
          margin-bottom: 2px;
          flex-grow: 1;
          display: flex;
          align-items: center;
          del {
            color: #aaa;
            font-size: 12px;
          }
        }
        .info {
          font-size: 10px;
          color: #aaa;
        }
      }
      .go-pay {
        position: absolute;
        right: 0;
        top: 0;
        width: 100px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: Center;
        font-weight: 700;
        font-size: 14px;
        color: #fff;
        background-color: #38ca73;
      }
    }
  }
}
</style>
