<template>
  <div class="type-option">
      <i class="iconfont icon-oksign type-option-state ok"></i>
      <span class="type-option-content">只看有内容的评价</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.type-option {
  padding: 10px;
  border-bottom: 1px solid #f6f6f6;
  &-state {
    color: #ddd;
    font-size: 14px;
    &.ok {
      color: #76d572;
    }
  }
  &-content {
    font-size: 14px;
    color: #666;
  }
}
</style>
