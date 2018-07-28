<template>
    <div class="skeleton">

     <div class="skeleton-top"></div>
        <div class="skeleton-main">
            <div class="skeleton-main-img"></div>
            <div class="skeleton-main-title"></div>
            <div class="skeleton-main-info"></div>
            <div class="skeleton-main-msg"></div>
            <div class="skeleton-main-sale"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.skeleton {
  width: 100%;
  position: relative;
  background-color: #fff;
  &-top {
    height: 76px;
    width: 100%;
    background-color: #b5a9bd;
  }
  &-main {
    text-align: center;
    width: 60%;
    margin: 0 auto;
    height: 140px;
    position: relative;
    z-index: 2;

    &-img {
      display: inline-block;
      width: 80px;
      height: 80px;
      margin-top: -40px;
      background-color: #cc908caa;
    }
    &-title,
    &-info,
    &-msg,
    &-sale {
      margin: 4px auto;
      background-color: #f8f8f8;
    }
    &-title {
      width: 50%;
      height: 24px;
      background-color: #f2f2f2;
    }
    &-info {
      width: 80%;
      height: 16px;
    }
    &-msg {
      width: 85%;
      height: 16px;
    }
    &-sale {
      width: 100%;
      height: 16px;
    }
  }
}
</style>
