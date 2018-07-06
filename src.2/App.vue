<template>
  <div id="app">
    <mt-button @click="a">111</mt-button>
    <router-link to="/f">fffffffffff</router-link>
    <router-link to="/h">hhhhhhhhhhhhh</router-link>
    <keep-alive>
      <!-- keep-alive缓存路由 -->
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  watch: {},
  methods: {
    a(){
      this.$toast('2134234');
    }
  },
};
</script>

<style>
</style>
