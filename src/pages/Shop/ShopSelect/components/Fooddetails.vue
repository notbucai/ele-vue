<template>
  <div class="fooddetails">
    <span class="fooddetails-logo">
      <img :src="`//fuss10.elemecdn.com/${food.image_path}.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/`" alt="">
    </span>
    <section class="fooddetails-info">
      <h6 class="info-title">{{food.name}}</h6>
      <section class="info-detail">
        <p class="info-introduce">{{food.description}}</p>
        <p class="info-sales">
          <span>月销{{food.month_sales}}份</span>
          <span>好评率{{food.satisfy_rate}}%</span>
        </p>
        <div class="icon-activityRow" v-if="food.activity">
          <span class="label">{{food.activity.benefit_text}}</span>
          <span>{{food.activity.applicable_quantity_text}}</span>
        </div>
      </section>
      <span class="info-money">
        <i class="iconfont icon-Money"></i>
        <span>{{food.specfoods[0].price}}</span>
        <del v-if="food.specfoods[0].original_price">￥{{food.specfoods[0].original_price}}</del>
      </span>
      <FooddetailsButton :id="food.specfoods[0].sku_id" class="extra"/>
    </section>
  </div>
</template>

<script>
import FooddetailsButton from "./FooddetailsButton.vue";
export default {
  props: {
    food: Object
  },
  components: { FooddetailsButton },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fooddetails {
  display: flex;
  flex-flow: row;
  padding: 8px;
  &-logo {
    width: 88px;
    height: 88px;
    img {
      width: 100%;
    }
  }
  &-info {
    position: relative;
    padding-left: 10px;
    flex-grow: 1;
    .info-title {
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
    }
    .info-detail {
      height: 44px;
      .info-introduce,
      .info-sales {
        line-height: 14px;
        font-size: 10px;
        color: #666;
      }
      .icon-activityRow {
        span {
          display: inline-block;
          color: #eb6551;
          font-size: 10px;
          line-height: 16px;
          border: 1px solid transparent;
          &.label {
            padding: {
              left: 2px;
              right: 2px;
            }
            line-height: 12px;
            padding-top: 1px;
            font-size: 8px;
            margin-right: 2px;
            border-color: hsla(8, 79%, 62%, 0.3);
          }
        }
      }
    }
    .info-money {
      position: absolute;
      bottom: 0;
      font-size: 18px;
      color: #ff5339;
      .iconfont {
        font-weight: 700;
        font-size: 14px;
      }
      del {
        font-size: 12px;
        color: #999;
      }
    }

    .extra {
      bottom: 0;
      right: 10px;
    }
  }
}
</style>
