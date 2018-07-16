<template>
  <div class="userinfo">
    <mt-header title="账户信息">
      <mt-button slot="left" @click="back" class="iconfont icon-fanhui1"></mt-button>
    </mt-header>

    <mt-cell title="头像" is-link>
      <div class="icon">
        <img :src="userData.img_path" alt="">
      </div>
    </mt-cell>
    <mt-cell title="用户名" is-link>
      <span>{{userData.name}}</span>
    </mt-cell>

    <section class="title">账号绑定</section>
    <mt-cell title="手机" is-link>
      <i slot="icon" class="iconfont icon-tel"></i>
      <span>{{userData.tell}}</span>
    </mt-cell>

    <section class="title">安全设置</section>
    <mt-cell title="登陆密码" is-link>
      <span style="color:#08f">未设置</span>
    </mt-cell>

    <mt-button class="logout" @click="Logout" type="danger" size="large">退出登陆</mt-button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Toast } from "mint-ui";
export default {
  name: "userinfo",
  mounted() {
    if (this.userData.code !== 0) {

      this.$router.replace("/profile");
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    Logout() {
      this.$store.dispatch("clearUserData");
      this.$router.replace("/profile");
      
      Toast({
        message: "退出成功",
        position: "bottom",
        duration: 1000
      });
    }
  },
  computed: {
    ...mapState(["userData"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.userinfo {
  background: #f5f5f5;
  height: 100%;
  width: 100%;
  position: absolute;
}
.icon-tel {
  font-size: 14px;
  color: #08f;
}
.icon {
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
}
.title {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
}
.logout {
  margin-top: 20px;
}
</style>
