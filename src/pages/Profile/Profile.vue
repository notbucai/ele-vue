<template>
  <div class="profile">
    <mt-header title="我的">
      <mt-button slot="left" class="iconfont icon-fanhui1"></mt-button>
    </mt-header>

    <router-link to="/login">
      <section class="profile-info">
        <div class="profile-info-img">
          <img v-if="userData.img_path" :src="userData.img_path" alt="">
          <img v-else src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="profile-info-main">
          <p class="name">{{userData.name || "登录/注册"}}</p>
          <p class="phone">
            <i>图标</i>
            <span>{{userData.tell||"登录后享受更多特权"}}</span>
          </p>
        </div>
        <span class="profile-info-open iconfont icon-youjiantou"></span>
      </section>
    </router-link>
    <div class="profile-nav">
      <a href="javascript:;" class="nav-item">
        <p class="icon">
          <i v-if="!userData.code" class="iconfont icon-qian"></i>
          <i v-else>{{userData.my_money}}</i>
        </p>
        <p class="text">钱包</p>
      </a>
      <a href="javascript:;" class="nav-item">
        <p class="icon">
          <i v-if="!userData.code" class="iconfont icon-hongbao"></i>
          <i v-else>{{userData.my_money}}</i>
        </p>
        <p class="text">红包</p>
      </a>
      <a href="javascript:;" class="nav-item">
        <p class="icon">
          <i v-if="!userData.code" class="iconfont icon-hongbao"></i>
          <i v-else>{{userData.gold_coin}}</i>
        </p>
        <p class="text">金币</p>
      </a>
    </div>
    <section class="container">
      <mt-cell title="标题文字" to="/" is-link>
        <i slot="icon" style="color: #0af;" class="iconfont icon-dizhi"></i>
      </mt-cell>
    </section>
    <section class="container">
      <mt-cell title="金币商城" to="/" is-link>
        <i slot="icon" style="color: #94d94a;" class="iconfont icon-shangcheng2"></i>
      </mt-cell>
      <mt-cell title="分享活动拿现金" to="/" is-link>
        <i slot="icon" style="color: #fc7b53;" class="iconfont icon-liwu"></i>
      </mt-cell>
    </section>
    <section class="container">
      <mt-cell title="我的客服" to="/" is-link>
        <i slot="icon" style="color: #0af;" class="iconfont icon-linedesign-20"></i>
      </mt-cell>
      <mt-cell title="下载APP" to="/" is-link>
        <i slot="icon" style="color: #0af;" class="iconfont icon-xiazai"></i>
      </mt-cell>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "profile",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    ...mapState(["userData"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.profile {
  background-color: #f6f6f6;
  position: absolute;
  width: 100%;
  height: 100%;
}
.profile-info {
  display: flex;
  flex-direction: row;
  padding: 20px 16px;
  background-image: linear-gradient(370deg, #0af, #0085ff);
  .profile-info-img {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .profile-info-main {
    flex-grow: 1;
    padding: 6px 0 0 20px;
    p {
      color: #fff;
      &.name {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 6px;
      }
      &.phone {
        font-size: 12px;
        line-height: 30px;
      }
    }
  }
  .profile-info-open {
    color: #fff;
    font-size: 12px;
    margin-top: 24px;
  }
}
.profile-nav {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
  .nav-item {
    flex: 1;
    text-align: center;
    color: #ff5f3e;
    padding: 24px;

    &:first-child {
      color: #f90;
    }
    &:last-child {
      color: #6ac20b;
    }
    &:not(:last-child) {
      border-right: 1px solid #f1f1f1;
    }
    p {
      &.icon {
        i {
          font-size: 26px;
        }
      }
      &.text {
        color: #666;
        font-size: 12px;
        font-weight: bold;
        line-height: 24px;
      }
    }
  }
}

.container {
  margin-top: 10px;
  .mint-cell {
    min-height: 40px;
    color: #555;

    background: #fff;
    .iconfont {
      font-size: 16px;
      padding-right: 4px;
    }
  }
}
</style>
