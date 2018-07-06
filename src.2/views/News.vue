<template>
  <div class="hello">
    {{newsss}}
  </div>
</template>

<script>
export default {

  name: "news",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  computed: {
    newsss(){
      return [this.$route.params]
    }
  },
  
  watch:{
    '$route' (to, from) {
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
