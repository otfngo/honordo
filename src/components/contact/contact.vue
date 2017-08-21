<template>
  <div class="contact">
    <div class="contact-wrapper">
      <div class="header">
        <div class="en">contact us</div>
        <div class="zh">联系我们</div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="contact-info1">
                <h5>找到我们很容易！</h5>
                <p>您可以通过以下方式联系我们</p>
              </div>
              <div class="contact-info2">
                <h5>深圳市荣和共兴科技有限公司</h5>
                <p>电话：0755-23220387</p>
                <p>地址：深圳市龙华新区金龙路华富锦大厦14F</p>
                <p>网址：http://www.honordo.com</p>
                <p>邮箱：info@honordo.com</p>
              </div>
              <div class="contact-info3">
                <img src="./qrcode_230px.jpg" alt="二维码" width="80" height="80">
              </div>
            </div>
            <div class="col-sm">

            </div>
          </div>
          <div class="row">
            <div class="col">
              <img class="img-fluid" src="./map.png" alt="map">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ContactForm from 'components/contact-form/contact-form';

  export default {
    name: 'contact',
    components:{
      ContactForm
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/variable";

  .contact-wrapper {
    h5 {
      font-size: $font-size-large;
    }
    p {
      line-height: 1;
      font-size: $font-size-base;
      margin: 0.5rem 0;
    }

    .contact-info1 {
      margin-bottom: 2rem;
    }

    .contact-info2 {
      position: relative;
      margin-bottom: 1rem;
      h5 {
        margin-bottom: 2rem;
      }
      padding-bottom: 1rem;
      &:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 50%;
        height: 0.1rem;
        background-color: $background-color-gray;
      }
    }

    .contact-info3 {
      margin-bottom: 2rem;
    }
  }
</style>
