<template>
  <div id="app">
    <!-- <Add :addList="addList" /> 第一种方法 -->

    <!-- <Add @addList="addList" /> 第二种方式通过监听触发的自定义事件 -->
    <Add />
    <!-- <div id="loading">
            <img src="images/loading.gif" alt="">
        </div> -->
    <lists :lists="lists" />

  </div>

</template>

<script>
import Pubsub from "pubsub-js";
import axios from "axios";
import HelloWorld from "./components/HelloWorld";
import Add from "./components/Add.vue";
import Lists from "./components/Lists.vue";


export default {
  name: "App",
  components: {
    HelloWorld,
    Add,
    Lists
  },
  data() {
    return {
      lists: []
    };
  },
  mounted() {
    //初始化数据
    this.lists = JSON.parse(window.localStorage.getItem("list_key") || "[]");
    //获取服务器数据http://www.ncgame.cc/zxly/data/data.json?1530011409853
    // this.$http.get("http://localhost/data.json").then(
    //   data => {
    //     console.log(data);
    //     this.lists = JSON.parse(data.bodyText || "[]");
    //   },
    //   () => {
    //     console.log("失败");
    //   }
    // );
    axios.get("http://localhost/data.json").then(
      data => {
        console.log(data);
        this.lists = data.data;
      },
      () => {
        console.log("失败");
      }
    );
    //订阅消息
    Pubsub.subscribe("addList", (msg, data) => {
      console.log(msg, data);

      this.addList(data);
    });
  },
  watch: {
    lists() {
      window.localStorage.setItem("list_key", JSON.stringify(this.lists));
    }
  },
  methods: {
    addList(list) {
      this.lists.unshift(list);
    }
  }
};
</script>

<style>
body,
form,
input,
h2,
h3,
textarea,
p {
  margin: 0;
  padding: 0;
}
body {
  color: #333;
  background-color: #f7f8fa;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
#app {
  width: 980px;
  margin: 0 auto;
}
#app h2 {
  padding: 16px 20px;
  border-bottom: 1px solid #ddd;
}
@media screen and (max-device-width: 980px) {
  #app {
    width: auto;
  }
}
</style>
