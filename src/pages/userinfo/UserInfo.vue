<template>
  <div class="userinfo">
    <mt-header title="账户信息">
      <mt-button slot="left" @click="back" class="iconfont icon-fanhui1"></mt-button>
    </mt-header>

    <mt-cell title="头像" is-link>
      <img src="../../../static/img/logo.png" alt="" width="100px" height="100px">
    </mt-cell>
    <mt-cell title="用户名" is-link>
      <span>41145244554Fa</span>
    </mt-cell>
    
    <section>账号绑定</section>
    <mt-cell title="手机" is-link>
      <i slot="icon" class="iconfont icon-fanhui1"></i>
      <span>137*****559</span>
    </mt-cell>

    <section>安全设置</section>
    <mt-cell title="登陆密码" is-link>
      <i slot="icon" class="iconfont icon-fanhui1"></i>
      <span>未设置</span>
    </mt-cell>

     <mt-button @click="Logout">退出登陆</mt-button>
  </div>
</template>

<script>

export default {
  name: "userinfo",
  methods:{
    back(){
      this.$router.back();
    },
    Logout(){

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .userinfo{
    background: #f5f5f5;
    height: 100%;
    width: 100%;
    position: absolute;
  }
</style>
