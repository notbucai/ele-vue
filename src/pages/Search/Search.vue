<template>
  <div class="search">
    <header class="search-header">
      <router-link to="/" class="back">
        <i class="iconfont icon-fanhui1"></i>
      </router-link>
      <i class="iconfont icon-sousuo position"></i>
      <input class="search-input" type="text" placeholder="输入商家、商品名称">
      <button class="search-btn">搜索</button>
    </header>
    
    <Tags title="历史搜索" icon="1" :list="lists">
      
    </Tags>
    <Tags title="推荐搜索" icon="" >
      
    </Tags>
  </div>
</template>

<script>
import Tags from './Tags.vue'
export default {
  name: "search",
  components:{Tags},
  data() {
    return {
      lists:["冒菜","辣椒炒肉","鱼香肉丝","香辣鸡排饭","醉心巧克力","糖醋排骨"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search-header {
  padding: 10px 0;
  line-height: 26px;
  height: 26px;
  display: flex;
  position: relative;
  .back {
    padding: 0 6px;
    box-sizing: border-box;
    i {
      font-size: 18px;
    }
  }
  .position {
    position: absolute;
    left: 32px;
    font-size: 12px;
    padding-left: 6px;
  }
  .search-input {
    box-sizing: border-box;
    height: 100%;
    border: none;
    flex-grow: 1;
    background-color: #f6f6f6;
    padding: 4px;
    padding-left: 26px;
    font-size: 12px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #aaa;
    }
  }
  .search-btn {
    box-sizing: border-box;
    font-weight: bold;
    font-size: 14px;
    padding: 4px 10px;
    background: transparent;
    border: none;
    &:focus {
      outline: none;
    }
  }
}

</style>
