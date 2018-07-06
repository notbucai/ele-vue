<template>
  <div id="c-see">
    <h2>全部留言</h2>
    <Item v-for="(list,i) in lists" :key="i" :list="list" />
  </div>
</template>

<script>
import Item from "./Item.vue";
import { mapState } from "vuex";

export default {
  name: "CSee",
  components: {
    Item
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    ...mapState(["lists"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#c-see {
  position: relative;
  background-color: #fff;
  border-top: 4px solid #2196f3;
}
</style>
