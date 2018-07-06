<template>
  <div class="hello">
    {{msg}}
    <template v-for="item in news">

      <router-link :to="`/h/news/${item.id}`" :key="item.id">{{item.title}}</router-link><!-- es6写法 -->
      <!-- <router-link :to="'/h/news/'+item.id" :key="item.id">{{item.title}}</router-link> es5写法 -->
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
//引入路由器

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "HHHHHHHHHHHHHH",
      news: [
        {
          title: "news no 1",
          id: 1
        },
        {
          title: "news no 2",
          id: 2
        },
        {
          title: "news no 3",
          id: 3
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
