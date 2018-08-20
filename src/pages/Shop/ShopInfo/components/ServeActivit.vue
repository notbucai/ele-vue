<template>
  <section class="serve-activit">
      <h3 class="serve-activit-title">活动与服务</h3>
      <ul class="serve-activit-list">
          <li class="serve-activit-list-item" v-for="(item, index) in ['六味','70.5卷堡双人','45夜宵餐','23元夜宵餐','97元饿了么经典回味桶','74堡堡','饿了么回味经典桶ST8折','辣堡辣翅啤酒单人餐95折','49热辣助威单人餐','85小食振威干杯桶']" :key="index">
              <span class="serve-activit-list-item-icon" style="background-color:#f07373">
                  折扣
              </span>
              <span class="serve-activit-list-item-text">
                  {{item}}
              </span>
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
<style lang="scss" scoped>
.serve-activit {
  padding: 16px 14px;
  background-color: #fff;
  margin-bottom: 10px;
  &-title {
    font-size: 14px;
    font-weight: 550;
    padding-bottom: 14px;
  }
  &-list {
    &-item {
      margin-bottom: 13px;
      font-size: 13px;
      &-icon {
        color: #fff;
        padding: 2px;
        font-size: 12px;
        display: inline-block;
      }
      &-text {
        color: #333;
      }
    }
  }
}
</style>
