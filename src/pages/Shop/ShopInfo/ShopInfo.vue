<template>
  <section class="shopinfo">
    <InfoHeader/>
    <ServeActivit/>
    <ShopInfoDetail/>
  </section>
</template>

<script>
import { mapState } from "vuex";
import InfoHeader from "./components/InfoHeader.vue";
import ServeActivit from "./components/ServeActivit.vue";
import ShopInfoDetail from "./components/ShopInfoDetail.vue";

export default {
  components: {
    InfoHeader,
    ServeActivit,
    ShopInfoDetail
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shopinfo {
  overflow: hidden;
  background-color: #f4f4f4;
}
</style>
