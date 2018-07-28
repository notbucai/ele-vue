<template>
  <div class="skeleton">
    <div class="title"></div>
    <template v-for="a in 6">
      <div class="food" :key="a">
        <div class="img"></div>
        <div class="main">
          <div class="title"></div>
          <div class="info"></div>
          <div class="sale"></div>
          <div class="money"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  components: {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.skeleton {
  .title {
    width: 100px;
    height: 16px;
    background-color: #f8f8f8;
    margin: 6px;
  }
  .food {
    padding: 6px;
    display: flex;
    flex-flow: row;
    .img {
      width: 90px;
      height: 90px;
      background-color: #f8f8f8;
    }
    .main {
      flex-grow: 1;
      .info {
        height: 12px;
        margin: 4px 6px;
        width: 140px;
        background-color: #f8f8f8;
      }
      .sale {
        height: 12px;
        width: 120px;
        margin: 4px 6px;
        background-color: #f8f8f8;
      }
      .money {
        height: 28px;
        margin: 4px 6px;
        background: #f8f8f8;
      }
    }
  }
}
</style>
