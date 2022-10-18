<template>
  <div>
    <div class="title">Waylon's Blog</div>
    <router-view class="banner"></router-view>
  </div>
</template>

<script>
export default {
  name: 'BackGround',
  data() {
    return {};
  },
};
</script>

<style>
body {
  background: url(../assets/BackGroudImg.png) no-repeat;
  background-size: cover;
}

.title {
  margin: 130px 0 auto;
  color: rgba(255, 255, 255, 1);
  font-size: 36px;
}

.banner {
  width: 440px;
  margin: 0 auto;
}
</style>