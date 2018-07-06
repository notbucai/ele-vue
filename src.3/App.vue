<template>
  <div id="app">
    <p>当前：{{$store.state.count}} 是 {{oddEven}}</p>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="evenAdd">偶数+</button>
    <button @click="aynsAdd">一秒后加</button>
  </div>

</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["oddEven"])
    //原本操作
    // oddEven() {
    //   return this.$store.getters.oddEven;
    // },
  },
  watch: {},
  methods: {
    a() {
      this.$toast("2134234");
    },
    //新的操作
    ...mapActions(["add", "minus", "evenAdd", "aynsAdd"])
    //原本操作
    // add() {
    //   this.$store.dispatch("add");
    // },
    // minus() {
    //   this.$store.dispatch("minus");
    // },
    // evenAdd() {
    //   this.$store.dispatch("evenAdd");
    // },
    // aynsAdd() {
    //   this.$store.dispatch("aynsAdd");
    // }
  }
};
</script>

<style>
</style>
