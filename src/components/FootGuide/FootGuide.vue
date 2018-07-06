<template>
    <div class="footGuide">
        <span href="javascript:;" class="guide_item" :class="{no:'/msite'===$route.path}" @click="goTo('/')">
            <span>
                <i class="iconfont icon-waimai-"></i>
            </span>
            <span>外卖</span>
        </span>
        <span href="javascript:;" class="guide_item" :class="{no:'/search'===$route.path}" @click="goTo('/search')">
            <span>
                <i class="iconfont  icon-sousuo"></i>
            </span>
            <span>搜索</span>
        </span>
        <span href="javascript:;" class="guide_item" :class="{no:'/order'===$route.path}" @click="goTo('/order')">
            <span>
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </span>
        <span href="javascript:;" class="guide_item" :class="{no:'/profile'===$route.path}" @click="goTo('/profile')">
            <span>
                <i class="iconfont icon-wode"></i>
            </span>
            <span>我的</span>
        </span>
    </div>
</template>

<script>
export default {
  name: "footGuide",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
      goTo(path){
          this.$router.replace(path);
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footGuide {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 100;
  box-shadow: 0px 0px 1px 1px #eee;
  background-color: #fff;
  display: flex;
  .guide_item {
    flex: 1;
    box-sizing: border-box;
    padding: 6px;
    height: 50px;
    text-align: center;
    color: #666;
    font-size: 12px;
    span {
      display: block;
      line-height: 20px;
    }
  }
  .no {
    color: #08f;
  }
}
</style>
