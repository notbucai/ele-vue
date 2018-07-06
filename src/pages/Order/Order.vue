<template>
  <div class="order">
    <mt-header title="订单">
      
    </mt-header>
    <section class="nodatatipWrap">
      <img src="http://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt="">
      <P>登陆后查看外卖订单</P>
      <mt-button class="login" type="primary">立刻登陆</mt-button>
    </section>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.order {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
}
.nodatatipWrap{
  margin-top: 80px;
  text-align: center;
  font-size: 16px;
  img{
    width: 220px;
    height: 220px;
  }
  p{
    color: #666;
    margin: 10px 0;
  }
  .login{
    font-size: 14px;
    padding: 0 24px;
  }
}
</style>
