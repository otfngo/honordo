<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="img">
            <img style="width: 100%;" src="../common/image/img_abouts.png" alt="about">
          </div>
        </div>
        <div class="col">
          <div class="intro">
            <div class="en text-uppercase">about us</div>
            <div class="zh">关于我们</div>
            <div class="summary">概述</div>
            <div class="more">更多>></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data(){
      return {
        msg: 'Welcome to honordo.com'
      }
    }
  }
</script>

<style scoped>
  #about {
    max-height: 700px;
    background-image: url(../common/image/bg_aboutus.png);
    background-repeat: no-repeat;
    background-size: 70%;
  }

  .col {
    padding-left: 0;
    padding-right: 0;
  }

  .img {
    margin-top: 50px;
  }

  .intro {
    margin-top: 30px;
  }

  .intro:before {

  }

  .en {
    font-size: 35px;
  }

  .zh {
    font-size: 36px;
  }

</style>
