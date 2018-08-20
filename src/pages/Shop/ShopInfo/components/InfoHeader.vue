<template>
  <header class="info-header">
    <h3 class="info-header-title">配送信息</h3>
    <div class="info-header-send">
        <span>由商家配送提供配送，约30分钟送达，距离1.6km</span>
    </div>
    <div class="info-header-money">配送费￥9</div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.info-header {
    padding: 16px 14px;
    background-color: #fff;
    margin-bottom: 10px;
  &-title {
    font-size: 14px;
    font-weight: 550;
    padding-bottom: 16px;
  }
  &-send {
    font-size: 12px;
    color: #444;
    line-height: 20px;
  }
  &-money {
    font-size: 12px;
    color: #444;
    line-height: 20px;
  }
}
</style>
