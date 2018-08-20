<template>
  <section class="remind-list">
    <p class="remind-list-logo">
      <img v-if="remindItem.img_path" :src="remindItem.img_path" alt="">
      <i v-else class="iconfont icon-sousuo"></i>
    </p>
    <p class="remind-list-name">{{remindItem.name}}</p>
    <p v-if="remindItem.evaluate" class="remind-list-evaluate">评价{{remindItem.evaluate}}</p>
  </section>
</template>

<script>
export default {
  props: {
    remindItem: Object
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.remind-list {
  overflow: hidden;
  border-bottom: 1px solid #f4f4f4;
  margin: 0 14px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  &-logo {
    display: block;
    .iconfont {
      font-size: 14px;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
  &-name {
    display: block;
    margin-left: 10px;
    flex-grow: 1;
    height: 100%;
    color: #333;
    font-size: 12px;
  }
  &-evaluate {
    display: block;
    font-size: 10px;
    color: #999;
  }
}
</style>
