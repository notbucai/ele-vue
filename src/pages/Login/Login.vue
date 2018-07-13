<template>
  <div class="login">
    <div class="logo">
      <img src="/static/img/logo.png" alt="">
    </div>
    <div class="tabs">
      <a href="javascript:;" @click="active ='message' " :class="{'active':(active=='message')}">短信登陆</a>
      <a href="javascript:;" @click="active ='password' " :class="{'active':(active=='password')}">密码登陆</a>
    </div>
    <mt-tab-container v-model="active">
      <!-- 手机号登陆 默认 -->
      <mt-tab-container-item id="message" class="message">
        <section><input name="tell" v-model="tell" maxlength="11" type="tel" placeholder="手机号"></section>
        <section class="get-code">
          <a href="javascript:;" :class="{yes_click:isCodeOk}" @click="getCode">{{code_info}}</a>
        </section>
        <section><input name="code" v-model="code" maxlength="6" type="tel" placeholder="验证码"></section>
        <section class="info">
          温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意 《用户服务协议》
        </section>
        <mt-button class="login-btn" type="primary" @click="login">登陆</mt-button>
      </mt-tab-container-item>
      <!-- 账号密码登陆 -->
      <mt-tab-container-item id="password">
        <section><input name="tell" v-model="tell" maxlength="11" type="tel" placeholder="手机号"></section>
        <section class="get-code">
          <a href="javascript:;">获取验证码</a>
        </section>
        <section><input name="code" v-model="code" type="number" placeholder="验证码"></section>
        <section class="info">
          温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意 《用户服务协议》
        </section>
        <mt-button class="login-btn" type="primary" @click="login">登陆</mt-button>
      </mt-tab-container-item>

    </mt-tab-container>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { login as login_get } from "../../api/";
import { mapActions } from "vuex";
export default {
  name: "profile",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      active: "message",
      tell: "",
      code: "",
      code_info: "获取验证码",
      isCodeOk: false,
      interval: 0
    };
  },
  methods: {
    async login() {
      //登陆
      let msg = "";
      if (this.tell.length < 11) {
        msg = "请填写正确的手机号";
      } else if (!this.interval) {
        msg = "请先获取验证码";
      } else if (this.code.length < 6) {
        msg = "请填写正确的验证码";
      } else {
        // 发送数据验证登陆
        let { tell, code } = this;

        let data = await login_get({ tell, code });

        msg = data.value;

        switch (data.type) {
          case "-1":
            //失败了
            //todu 不处理
            break;
          case 0:
            //成功 调用获取个人资料方法 并返回个人主页
            this.$store.dispatch('getUserData');
            this.$router.back();
            break;
          default:
            break;
        }
      }
      Toast({
        message: msg,
        position: "bottom",
        duration: 5000
      });
    },
    getCode() {
      // 获取验证码
      if (this.isCodeOk) {
        clearInterval(this.interval);
        this.isCodeOk = false;
        let time = 30;
        this.code_info = `已发送(${time--})`;
        this.interval = setInterval(() => {
          this.code_info = `已发送(${time--})`;
          if (time == 0) {
            this.isCodeOk = true;
            this.code_info = "重新获取";
            clearInterval(this.interval);
          }
        }, 1000);
      }
    }
  },
  watch: {
    tell() {
      if (this.tell.length == 11) {
        if (this.interval == 0) {
          this.isCodeOk = true;
        }
      } else {
        this.isCodeOk = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
  text-align: center;
  padding: 10px;
}
.logo {
  width: 200px;
  margin: 40px auto;

  img {
    width: 100%;
    height: 100%;
  }
}
.tabs {
  margin: 20px auto;

  a {
    font-size: 14px;
    line-height: 26px;
    display: inline-block;
    border-bottom: 2px solid transparent;
    margin: 0 20px;
    &.active {
      color: #2395ff;
      border-color: #2395ff;
      font-weight: 600;
    }
  }
}
.message {
  position: relative;
  input {
    width: 80%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 14px;
    margin-bottom: 18px;
    font-size: 14px;
    &::placeholder {
      color: #aaa;
    }
  }
  .get-code {
    position: absolute;
    height: 30px;
    width: 68px;
    right: 30px;
    top: 8px;
    font-size: 12px;
    a {
      display: block;
      line-height: 30px;
      color: #ccc;
      &.yes_click {
        color: #2395ff;
      }
    }
  }
  .info {
    text-align: left;
    padding: 0 20px;
    font-size: 12px;
    line-height: 20px;
    color: #888;
  }
  .login-btn {
    width: 88%;
    font-size: 16px;
    margin-top: 20px;
  }
}
</style>
