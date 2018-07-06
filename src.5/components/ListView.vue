<template>
  <div class="list">
    <span class="mint-checklist-title">未完成： {{remaining}}</span>
    <Item v-for="(item) in showList" :key="item.key" :item="item" :i="item.key" />
  </div>
</template>

<script>
import Item from "./Item.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "list",
  components: {
    Item
  },
  mounted() {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["remaining", "showList"])
  },
  methods: {
    remove(key) {
      this.showList.splice(key, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  margin-top: 20px;
}
.over {
  color: #ccc;
  text-decoration: line-through;
}
</style>
