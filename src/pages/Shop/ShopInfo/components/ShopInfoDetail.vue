<template>
  <section class="shop-info-detail">
      <h3 class="shop-info-detail-title">商家信息</h3>
      <ul>
          
          <li class="shop-info-detail-item">
              暂无简介
          </li>
          <li class="shop-info-detail-item">
              <span>品类</span>
              <span>汉堡, 炸鸡炸串</span>
          </li>
          <li class="shop-info-detail-item">
              <span>商家电话</span>
              <span>13767284458</span>
          </li>
          <li class="shop-info-detail-item">
              <span>地址</span>
              <span>九江濂溪区骡子山濂溪农贸市场29号</span>
          </li>
          <li class="shop-info-detail-item">
              <span>营业时间</span>
              <span>18:30-03:30</span>
          </li>
      </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.shop-info-detail {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 14px;
  &-title {
    font-size: 14px;
    font-weight: 550;
    margin-bottom: 10px;
  }
  &-item {
    overflow: hidden;
    width: 100%;
    font-size: 14px;
    padding: 14px 0;
    border-bottom: 1px solid #f4f4f4;
    color: #666;
    span:first-child {
      color: #444;
      float: left;
      font-weight: 600;
    }
    span:last-child {
      font-size: 12px;
      color: #666;
      float: right;
    }
  }
}
</style>
