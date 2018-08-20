<template>
    <section class="comment">
        <ul class="comment-list">
            <CommentItem v-for="(item, index) in 10" :key="index"/>
        </ul>
    </section>
</template>

<script>
import { mapState } from "vuex";
import CommentItem from "./CommentItem.vue";

export default {
  props: {},
  components: {
    CommentItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
