<template>
    <div class="fooddetails-button">
        <span class="cartBtn">
            <a href="" class="minus">
                <i class="iconfont icon-minus"></i>
            </a>
            <span class="count">1</span>
            <a href="" class="add">
                <i class="iconfont icon-add"></i>
            </a>
        </span>
    </div>
</template>

<script>
export default {
  components: {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fooddetails-button {
  position: absolute;
  bottom: 0;
  right: 6px;
  .cartBtn {
    a {
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      display: inline-block;
      > .iconfont {
        display: inline-block;
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
      }
    }
    .minus {
      float: left;
      color: #2396ff;
      .iconfont {
        border: 1px solid #2396ff;
      }
    }
    .add {
      float: right;
      color: #fff;
      .iconfont {
        border: 1px solid #2396ff;
        background-color: #2396ff;
      }
    }
    .count {
      color: #666;
      float: left;
      font-size: 14px;
      padding: 0 6px;
      line-height: 24px;
    }
  }
}
</style>
