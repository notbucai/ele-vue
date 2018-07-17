<template>
    <section class="shopheader">
        <nav class="header" style="background-image:url(http://fuss10.elemecdn.com/e/5e/219962176b9055bf8d2e58649b396jpeg.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/)">
            <router-link to="/" class="iconfont icon-fanhui1"></router-link>
        </nav>
        <div class="main" @click="open">
            <img src="http://fuss10.elemecdn.com/e/5e/219962176b9055bf8d2e58649b396jpeg.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/" alt="">
            <div class="main-info">
                <h2>神仙烧饭</h2>
                <div class="info">
                    <span>评价4.4</span>
                    <span>月销690</span>
                    <span>商家配送约68分钟</span>
                </div>
                <p>天气炎热，为了能尽快把餐送到亲的手上，请各位亲尽量提前预订哦。谢谢！</p>
            </div>
        </div>
        <div class="discounts">
            <div class="info">
                <span class="icon" style="background-color: rgb(240, 115, 115);">满减</span>
                <span class="title">满100减1</span>
            </div>
            <div class="count">
                18个优惠
            </div>
        </div>
        <transition name="info">
            <HeaderInfo v-if="isShow" :close="close" />
        </transition>
    </section>
</template>

<script>
import { mapState } from "vuex";
import HeaderInfo from "./HeaderInfo.vue";
export default {
  components: {
    HeaderInfo
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    open() {
      this.isShow = true;
    },
    close() {
      this.isShow = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shopheader {
}

.header {
  height: 16vw;
  background: no-repeat;
  background-size: cover;
  position: relative;
  padding: 4px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(119, 103, 137, 0.43);
  }
  .iconfont {
    margin: {
      left: 4px;
      top: 4px;
    }
    display: inline-block;
    color: #fff;
    font-size: 16px;
    transform: rotate(0deg);
  }
}

.main {
  text-align: center;
  width: 60%;
  margin: 0 auto;
  height: 110px;
  position: relative;
  z-index: 2;
  img {
    margin-top: -40px;
  }
  .main-info {
    h2 {
      font-size: 20px;
      font-weight: 700;
      line-height: 40px;
    }
    .info {
      font-size: 12px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      color: #aaa;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 20px;
      line-height: 20px;
    }
  }
}

.discounts {
  width: 80%;
  overflow: hidden;
  padding: 4px;
  margin: 10px auto;
  font-size: 12px;
  border: 1px solid #f8f8f8;
  .info {
    float: left;
    position: relative;
    .icon {
      position: absolute;
      top: -4px;
      left: -8px;
      display: inline-block;
      box-sizing: border-box;
      padding-top: 2px;
      width: 46px;
      height: 20px;
      text-align: center;
      color: #f4f4f4;
      font-size: 16px;
      transform: scale(0.5);
    }
    .title {
      color: #666;
      margin-left: 30px;
    }
  }
  .count {
    float: right;
    color: #666;
  }
}

.info-enter-active, .info-leave-active {
  transition: opacity .5s;
}
.info-enter, .info-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
