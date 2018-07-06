<template>
    <div class="item">
        <mt-cell>
            <label class="mint-checklist-label" slot="icon">
                <span class="mint-checkbox">
                    <input type="checkbox" class="mint-checkbox-input" v-model="item.isOver">
                    <span class="mint-checkbox-core"></span>
                </span>
                <span class="mint-checkbox-label" :class="{over:item.isOver}">{{item.content}}</span>
            </label>
            <div @click.stop="remove(i)" class="mint-field-clear" style="">
                <i class="mintui mintui-field-error"></i>
            </div>
        </mt-cell>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "list",

  props: {
    item: Object,
    i: Number
  },
  mounted() {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["lists"])
  },
  methods: {
    ...mapActions(["remove"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.over {
  color: #ccc;
  text-decoration: line-through;
}
</style>
