<template>
  <div class="c-list">
    <div class="c-tourists">
      <div class="c-photo">
        <!-- http://q2.qlogo.cn/headimg_dl?dst_uin=576865892&spec=100 -->
        <img :src="icon" alt="">
      </div>
      <h3>{{list.name}}</h3>
      <p>{{list.date}}</p>
      <p class="c-ip-r">ip:{{list.ip}}</p>
    </div>
    <div class="c-content">
      <div class="c-n">
        {{list.content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CList",
  props: {
    list: Object
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    icon() {
      // console.log();
      let name = this.list.name;
      return /^[0-9]+$/.test(name)
        ? "http://q2.qlogo.cn/headimg_dl?dst_uin=" + name + "&spec=100"
        : "http://www.ncgame.cc/zxly/images/default.gif";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c-list {
  position: relative;
  padding: 0 20px 20px 100px;
  border-bottom: 1px solid #ddd;
}

.c-tourists {
  height: 64px;
  padding-top: 14px;
}

.c-tourists h3 {
  color: #2196f3;
  line-height: 34px;
}

.c-ip-r {
  position: absolute;
  top: 30px;
  right: 30px;
}

.c-photo {
  position: absolute;
  left: 20px;
  top: 10px;
}

.c-photo img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.c-content {
  line-height: 24px;
}
.c-n,
.c-z {
  margin-bottom: 10px;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
}
.c-z {
  padding: 20px;
  border-radius: 4px;
  background-color: #f1f1f1;
}

.c-z span {
  font-weight: bold;
  color: #2196f3;
}
</style>
