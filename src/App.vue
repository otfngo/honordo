<template>
  <div id="app">
    <m-header></m-header>
    <carousel></carousel>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
    <toolbar></toolbar>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header';
  import Carousel from 'components/carousel/carousel';
  import MFooter from 'components/m-footer/m-footer';
  import Toolbar from 'components/toolbar/toolbar';

  export default {
    components: {
      MHeader,
      Carousel,
      MFooter,
      Toolbar
    }
  }
</script>

<style lang="stylus">
</style>
