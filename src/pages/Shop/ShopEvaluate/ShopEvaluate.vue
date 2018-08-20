<template>
  <section class="shopevaluate">
    <Overview/>
    <main class="main">
      <RatingTags/>
      <TypeOption/>
      <CommentList/>
    </main>

  </section>
</template>

<script>
import { mapState } from "vuex";
import Overview from "./components/Overview.vue";
import RatingTags from "./components/RatingTags.vue";
import TypeOption from "./components/TypeOption.vue";
import CommentList from "./components/CommentList.vue";
export default {
  props: {
    scrollHeight: Number
  },
  components: {
    Overview,
    RatingTags,
    TypeOption,
    CommentList
  },
  methods: {
    //子scroll向下拉时改变html的scroll
    scrollUp(event) {
      let { scrollTop } = event.target;
      let { body, documentElement } = document;

      if (scrollTop > this.scrollTop) {
        let top = Math.floor(scrollTop - this.scrollTop);
        body.scrollTop += top;
        documentElement.scrollTop += top;
      }
      this.scrollTop = scrollTop;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shopevaluate {
  // overflow-y: auto;
  .main {
    padding: 10px;
  }
}
</style>
