<template>
  <div class="footer">
    <div class="img">
      <img src="./qrcode_230px.jpg" alt="二维码">
    </div>
    <div class="desc">
      <p>版权所有&copy;深圳市荣和共兴科技有限公司 粤ICP备：00000000号 技术支持：荣和共兴</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable";

  .footer {
    background-color: #2c354a;
    color: $text-color-white;
    text-align: center;
    margin-top: 20px;
    .img {
      padding: 40px 0;
    }
    .desc {
      color: $text-color-light;
      padding-bottom: 1px;
    }
  }
</style>
