<template>
    <div class="fooddetails">
        <span class="fooddetails-logo">
            <img src="//fuss10.elemecdn.com/5/f4/77a3a6972f64b0ed551fecf853ee9jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" alt="">
        </span>
        <section class="fooddetails-info">
            <h6 class="info-title">米饭一元化每份</h6>
            <section class="info-detail">
                <p class="info-introduce">介绍一下这个米饭</p>
                <p class="info-sales">
                    <span>月销855份</span>
                    <span>好评率84%</span>
                </p>
                <div class="icon-activityRow">
                    <span class="label">3.2折</span>
                    <span>每单限1份优惠</span>
                </div>
            </section>
            <span class="info-money">
                <i class="iconfont icon-Money"></i>
                <span>25</span>
                <del>￥30.5</del>
            </span>
            <FooddetailsButton/>
        </section>
    </div>
</template>

<script>
import FooddetailsButton from "./FooddetailsButton.vue";
export default {
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
  }
}
</style>
