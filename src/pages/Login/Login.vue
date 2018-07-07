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
            <mt-tab-container-item id="message" class="message">
                <section><input name="tell" v-model="tell" type="number" placeholder="手机号"></section>
                <section class="get-code">
                    <a href="javascript:;">获取验证码</a>
                </section>
                <section><input name="code" v-model="code" type="number" placeholder="验证码"></section>
                <section class="info">
                    温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意 《用户服务协议》
                </section>
                <mt-button class="login-btn" type="primary" @click="login">登陆</mt-button>
            </mt-tab-container-item> 
            <mt-tab-container-item id="password"> 
                <section><input name="tell" v-model="tell" type="number" placeholder="手机号"></section>
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
export default {
  name: "profile",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      active: "message",
      tell: "",
      code: ""
    };
  },
  methods: {
    login() {}
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
