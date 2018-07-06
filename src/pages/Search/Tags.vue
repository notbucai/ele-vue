<template>
  <section class="search-tag">
    <header>
      <h2 class="title">{{title}}</h2>
      <span class="clear" v-if="icon">{{icon}}</span>
    </header>
    <section>
      <span class="item" v-for="(val,index) in list" :key="index">{{val}}</span>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    "title":{
      type:String
    },
    "icon":{
      type:String
    },
    list:Array
    
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search-tag {
  color: #666;
  padding: 10px;
  margin-top: 6px;
  > header {
    position: relative;
    .title {
      font-size: 15px;
      font-weight: 700;
    }
    .clear {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 12px;
    }
  }
  > section {
    padding: 10px 0;
    .item {
      overflow: hidden;
      display: inline-block;
      margin: 10px 10px 0 0;
      padding: 6px 8px;
      font-size: 14px;
      border-radius: 2px;
      background-color: #f4f4f4;
    }
  }
}
</style>
