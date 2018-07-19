<template>
  <section class="shopselect" :style="{height:`${clientHeight}px`}">
    <div class="container">
      <main>
        <div class="menucategory">
          <ul>
            <li>
              <span class="menucategory-name">热销</span>
            </li>
            <li>
              <span class="menucategory-name">优惠</span>
            </li>
            <li>
              <span class="menucategory-name">米饭区、加饭区，需要的的请点</span>
              <span class="menucategory-quantity">3</span>
            </li>
            <li>
              <span class="menucategory-name">蔬菜区</span>
            </li>
            <li>
              <span class="menucategory-name">荤菜区</span>
            </li>
            <li>
              <span class="menucategory-name">饮料</span>
            </li>
            <li>
              <span class="menucategory-name">炒粉，炒饭</span>
              <span class="menucategory-quantity">10</span>
            </li>
            <li>
              <span class="menucategory-name">家常小炒类</span>
            </li>
            <li>
              <span class="menucategory-name">8元盖浇饭</span>
              <span class="menucategory-quantity">1</span>
            </li>
            <li>
              <span class="menucategory-name">10元盖浇饭</span>
            </li>
            <li>
              <span class="menucategory-name">混沌</span>
            </li>
            <li>
              <span class="menucategory-name">12元盖浇饭</span>
              <span class="menucategory-quantity">3</span>
            </li>
          </ul>
        </div>
        <section class="menuview" @scroll="scrollUp($event)">

          <dl v-for="(item, index) in ['热销','优惠','米饭区、加饭区，需要的的请点','蔬菜区','荤菜区','饮料','炒粉，炒饭','家常小炒类','8元盖浇饭','10元盖浇饭','混沌','12元盖浇饭']" :key="index">
            <dt>{{item}}</dt>
            <dd v-for="(item, index) in Math.Ran" :key="index">
              <div class="fooddetails">
                <span class="fooddetails-logo">
                  <img src="//fuss10.elemecdn.com/5/f4/77a3a6972f64b0ed551fecf853ee9jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" alt="">
                </span>
                <section class="fooddetails-info">
                  <h6 class="info-title">米饭一元化每份</h6>
                  <p class="info-introduce">介绍一下这个米饭</p>
                  <p class="info-sales">
                    <span>月销855份</span>
                    <span>好评率84%</span>
                  </p>
                  <span class="info-money">￥25</span>
                  <div class="fooddetails-button"></div>
                </section>
              </div>
            </dd>
          </dl>


        </section>
      </main>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    tabRefElement: Object
  },
  data() {
    return {
      scrollTop: 0,
      clientHeight: 600
    };
  },
  mounted() {
    this.getClient();
    window.onresize = this.getClient;
  },
  computed: {},
  methods: {
    getClient() {
      this.clientHeight =
        (document.documentElement.clientHeight || document.body.clientHeight) -
        this.tabRefElement.tabRef.offsetHeight;
      
      console.log(this.tabRefElement.tabRef.offsetHeight);

      console.log(this, this.clientHeight);

      // alert(this.scrollHeight);
    },
    scrollUp(event) {
      let { scrollTop } = event.target;
      // console.log("位置",scrollTop);
      // alert(document.body.scrollTop);
      if (scrollTop > this.scrollTop) {
        document.body.scrollTop = Math.floor(scrollTop * 0.8);
        document.documentElement.scrollTop = Math.floor(scrollTop * 0.8);
      }
      this.scrollTop = scrollTop;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shopselect {
}
.container {
  height: 100%;
  width: 100%;
  main {
    display: flex;
    height: 100%;
  }
}
.menucategory {
  width: 80px;
  box-sizing: border-box;
  background-color: #f8f8f8;
  height: 100%;
  overflow-y: auto;
  position: relative;
  ul > li {
    box-sizing: initial;
    padding: 16px 8px;
    font-size: 12px;
  }
}
.menuview {
  overflow-y: auto;
  position: relative;
  height: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  dl {
    dt {
      font-size: 12px;
      font-weight: 700;
      padding: 8px 6px;
      color: #666;
    }
    dd {
      .fooddetails {
        display: flex;
        flex-flow: row;
        padding: 8px;
        &-logo {
          width: 88px;
          height: 88px;
          img {
            width: 100%;
          }
        }
        &-info {
          padding-left: 10px;
          .info-title {
            font-size: 14px;
            font-weight: 700;
            line-height: 30px;
          }
          .info-introduce,
          .info-sales {
            font-size: 10px;
            color:#666;
          }

        }
      }
    }
  }
}
</style>
