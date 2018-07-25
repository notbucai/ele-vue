<template>
    <section class="headerinfo">
        <div class="main">
            <h2>{{shopInfo.name}}</h2>
            <div class="info">
                <div class="info-item">
                    <h4>{{shopInfo.rating}}</h4>
                    <span>评分</span>
                </div>
                <div class="info-item">
                    <h4>{{shopInfo.recent_order_num}}单</h4>
                    <span>月售</span>
                </div>
                <div class="info-item">
                    <h4>商家配送</h4>
                    <span>约{{shopInfo.order_lead_time}}分钟</span>
                </div>
                <div class="info-item">
                    <h4>2元</h4>
                    <span>配送费</span>
                </div>
                <div class="info-item">
                    <h4>1.9km</h4>
                    <span>距离</span>
                </div>
            </div>
            <div class="title">公告</div>
            <div class="notice">
                <p>{{shopInfo.promotion_info}}</p>
            </div>
            <div class="iconfont icon-2guanbi close-icon" @click="close"></div>

        </div>
        <div class="close" @click="close"></div>
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    close: Function
  },
  computed: {
    ...mapState(['shopInfo'])
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.headerinfo {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .main {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    padding: 20px 10px;

    width: 300px;
    height: 200px;

    margin-left: -150px;
    margin-top: -100px;

    background-color: #fff;
    border-radius: 4px;

    h2 {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
    }
    .info {
      display: flex;
      flex-flow: row;
      margin-bottom: 20px;
      .info-item {
        flex: 1;
        font-size: 12px;
        text-align: center;
        h4 {
          font-size: 14px;
          font-weight: 700;
          line-height: 22px;
        }
        span {
          color: #666;
        }
      }
    }
    .title {
      font-size: 12px;
      margin: 0 auto;
      text-align: center;
      width: 30px;
      height: 20px;
      position: relative;
      color: #666;
      &::after,
      &::before {
        content: "";
        width: 15px;
        height: 1px;
        display: inline-block;
        position: absolute;
        top: 5px;
        background-color: #ddd;
      }
      &::after {
        right: -20px;
      }
      &::before {
        left: -20px;
      }
    }
    .notice {
      color: #000;
      font-size: 12px;
      padding: 0 20px;
      line-height: 20px;
    }
    .close-icon {
      position: absolute;
      z-index: 1;
      bottom: -50px;
      left: 50%;
      margin-left: -12px;
      width: 24px;
      height: 24px;
      font-size: 24px;
      color: #f6f6f6;
      text-align: center;
    }
  }
  .close {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}
</style>
