<template>
  <div id="c-ope">
    <h2>留下想说的</h2>
    <form action="#" class="c-form" @submit.prevent="add">
      <input class="c-f-n block" type="text" v-model="name" name="name" placeholder="请输入昵称或QQ号" />
      <textarea class="c-f-t block" v-model="content" name="content" placeholder="说两句吧..."></textarea>
      <button class="c-f-b  block">提交</button>
      <div class="c-prompt">
        <!--管理回复-->
      </div>
    </form>
  </div>
</template>

<script>
import Pubsub from "pubsub-js";

export default {
  name: "COpe",
  // props: {
  //   addList: {
  //     type: Function,
  //     required: true
  //   }
  // },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      name: "",
      content: ""
    };
  },
  methods: {
    add() {
      let { name, content } = this;
      if (!name || !content) {
        console.log("提示");

        return;
      }
      let list = {
        name,
        content,
        date: Date.now(),
        ip: "127.0.0.1"
      };

      // this.addList(list); //第一种方法，通过自定义属性
      // this.$emit("addList", list);  //第二种通过触发自定义事件
      Pubsub.publish("addList", list); //第三种,利用第三方库 发布消息
      this.name = "";
      this.content = "";
      /*
        {
          "c-photo": "",
          content: "我不是楼上",
          date: "2018-04-28 09:31:15",
          ip: "106.*.*.151",
          name: "我是楼下"
        }
        */
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#c-ope {
  position: relative;
}

.block {
  display: block;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 6px;
  border: 0;
  line-height: 20px;
}

.block:focus {
  outline: 0;
}

.c-form {
  padding: 20px;
}

.c-f-n {
  width: 160px;
}

.c-f-t {
  width: 100%;
  height: 100px;
}

.c-f-b {
  padding: 10px 18px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  background-color: #2196f3;
}

.c-f-b:hover {
  background-color: #1384de;
}

.c-prompt {
  position: absolute;
  display: none;
  bottom: 0;
  left: 100px;
  padding: 10px;
  color: #8a6d3b;
  border-radius: 4px;
  border: 1px solid #faebcc;
  background-color: #fcf8e3;
}

.c-form textarea {
  resize: none;
}
</style>
