<template>
    <div class="msite">
        <mt-header title="九江职业技术学院-十号楼 222">
            <router-link to="/" slot="left">
                <mt-button class="iconfont  icon-sousuo"></mt-button>
            </router-link>
            <mt-button slot="right">登陆 | 注册</mt-button>
        </mt-header>

        <Nav :navs="navs" />

        <div class="shoplist-title">推荐商家</div>
        <Shoplist :shoplist="shoplist" />
    </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Shoplist from "./components/Shoplist.vue";
export default {
  name: "msite",
  components: {
    Nav,
    Shoplist
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      navs: [
        [
          {
            img: require(".\\images\\6f2631288a44ec177204e05cbcb93jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          },
          {
            img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          },
          {
            img: require(".\\images\\0184f5b3fa72f295fc01864734218jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          },
          {
            img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          },
          {
            img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          },
          {
            img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          },
          {
            img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          },
          {
            img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          },
          {
            img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          },
          {
            img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          }
        ],
        [
          {
            img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
            title: "标题",
            alt: "图片介绍"
          }
        ]
      ],
      shoplist: [
        {
          img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
          title: "标题"
        },
        {
          img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
          title: "标题"
        },
        {
          img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
          title: "标题"
        },
        {
          img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
          title: "标题"
        },
        {
          img: require(".\\images\\60ac33f023d9074e13cd78f9b5964jpeg.jpeg"),
          title: "标题"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shoplist-title {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #333;
  margin: 8px 0;
  &:after {
    content: "";
    width: 20px;
    display: inline-block;
    height: 1px;
    margin-bottom: 4px;
    margin-left: 10px;
    background-color: #aaa;
  }
  &:before {
    content: "";
    width: 20px;
    display: inline-block;
    height: 1px;
    margin-bottom: 4px;
    margin-right: 10px;
    background-color: #aaa;
  }
}
</style>
