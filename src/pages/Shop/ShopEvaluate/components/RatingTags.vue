<template>
  <section class="rating-tags">
    <ul class="rating-tags-group">
        <li class="rating-tags-group-tag rating-tags-group-active">全部 2157</li>
        <li class="rating-tags-group-tag">满意 1654</li>
        <li class="rating-tags-group-tag rating-tags-group-bad  rating-tags-group-active"  >不满意 185</li>
        <li class="rating-tags-group-tag ">送货慢 157</li>
        <li class="rating-tags-group-tag">分量足 96</li>
        <li class="rating-tags-group-tag rating-tags-group-bad">不好吃 80</li>
        <li class="rating-tags-group-tag">味道好 55</li>
        <li class="rating-tags-group-tag">有图 24</li>
        <li class="rating-tags-group-tag">物美价廉 11</li>
        <li class="rating-tags-group-tag rating-tags-group-bad">分量一般 10</li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.rating-tags {
  &-group {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebf5ff;
    &-tag {
      padding: 6px;
      margin: 4px;
      font-size: 12px;
      border-radius: 2px;
      color: #6d7885;
      background-color: #ebf5ff;
    }
    &-bad {
      color: #aaa;
      background-color: #f5f5f5;
      &.rating-tags-group-active {
        color: #fff;
        background-color: #ccc;
      }
    }

    &-active {
      color: #fff;
      background-color: #0097ff;
    }
  }
}
</style>
