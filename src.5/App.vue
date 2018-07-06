<template>
  <div id="app">
    <h1>todos</h1>
    <mt-field placeholder="todo content" v-model="content" @keyup.enter.native="add"></mt-field>
    <ListView/>
    <Foot/>
  </div>

</template>

<script>
import Pubsub from "pubsub-js";
import axios from "axios";
import ListView from "./components/ListView.vue";
import Foot from "./components/Foot.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: { ListView, Foot },
  mounted() {
    this.$store.state.lists = JSON.parse(
      window.localStorage.getItem("todos") || "[]"
    );
  },
  data() {
    return {
      content: ""
    };
  },
  computed: {
    ...mapState(["lists"])
  },
  methods: {
    add() {
      this.$store.dispatch("add", this.content);
      this.content = "";
    }
  },
  watch: {
    lists() {
      window.localStorage.setItem("todos", JSON.stringify(this.lists));
    }
  }
};
</script>

<style lang="scss">
h1 {
  text-align: center;
  font-size: 60px;
  margin: 0;
  color: #cca;
  margin: 20px 0;
}
</style>
