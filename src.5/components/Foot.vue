<template>
    <div class="foot">
        <mt-cell>
            <mt-button size="small" type="primary" @click.native="all">all</mt-button>
            <mt-button size="small" type="primary" @click.native="remainder">remainder</mt-button>
            <mt-button size="small" type="primary" @click.native="over">over</mt-button>
            <mt-button size="small" type="danger" @click.native="removeOver">clear</mt-button>
        </mt-cell>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "foot",

  props: {},
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions(["all", "remainder", "over", "removeOver"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot {
  margin-top: 20px;
}
</style>
