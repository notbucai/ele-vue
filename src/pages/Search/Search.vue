<template>
  <div class="search">
    <header class="search-header">
      <router-link to="/" class="back">
        <!--TODO 这里还需要监听一下，用于清空已输入的数据  -->
        <i class="iconfont icon-fanhui1"></i>
      </router-link>
      <i class="iconfont icon-sousuo position"></i>
      <input class="search-input" type="text" placeholder="输入商家、商品名称" v-model="searchVal">
      <button class="search-btn">搜索</button>
    </header>
    <main v-show="!searchVal">
      <Tags title="历史搜索" icon="1" :list="lists">

      </Tags>
      <Tags title="推荐搜索" icon="">

      </Tags>
    </main>
    <div class="mask" v-show="searchVal">
      <RemindList v-if="isResult" :remindItem="remind" />
      <Remind v-else :search="search" />
    </div>
  </div>
</template>

<script>
import Tags from "./Tags.vue";
import Remind from "./Remind.vue";
import RemindList from "./components/RemindList.vue";

import { mapActions, mapState } from "vuex";
export default {
  name: "search",
  components: { Tags, Remind, RemindList },
  data() {
    return {
      lists: [
        "冒菜",
        "辣椒炒肉",
        "鱼香肉丝",
        "香辣鸡排饭",
        "醉心巧克力",
        "糖醋排骨"
      ],
      searchVal: "",
      isSearch: 0,
      isResult: false
    };
  },
  computed: {
    ...mapState(["search"]),
    remind() {
      return {
        name: `查找"${this.searchVal}"`,
        img_path: ""
      };
    }
  },
  watch: {
    // 玄学，，，，
    search() {
      this.isResult = false;
    },
    searchVal() {
      if (!this.searchVal) {
        // 如果没有数据就直接跳出
        clearTimeout(this.isSearch);
        return;
      }
      if (this.isSearch) {
        clearTimeout(this.isSearch);
      }
      this.isResult = true;
      this.isSearch = setTimeout(() => {
        // TODO 处理搜索联想
        // console.log(this.search);
        this.$store.dispatch("getSearch", this.searchVal);
      }, 300);
    }
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

.mask {
  position: absolute;
  top: 50px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
}
</style>
