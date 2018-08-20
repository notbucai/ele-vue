<template>
  <section class="remind">
    <ul>
      <li v-for="(item, index) in search" :key="index">
        <RemindList :remindItem="item" />
      </li>
    </ul>
  </section>
</template>

<script>
import RemindList from "./components/RemindList.vue";
export default {
  props: {
    search: Array
  },
  components: {
    RemindList
  },
  data() {
    return {
      remindItem: {
        img_path: "",
        name: "测试"
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.remind {
}
</style>
