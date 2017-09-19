<template>
  <section class="contact">
    <article class="contact-wrapper">
      <div class="title">
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
                <p>{{contactInfo.phone.name}}：{{contactInfo.phone.value}}</p>
                <p>{{contactInfo.email.name}}：{{contactInfo.email.value}}</p>
                <p>{{contactInfo.fax.name}}：{{contactInfo.fax.value}}</p>
                <p>{{contactInfo.address.name}}：{{contactInfo.address.value}}</p>
              </div>
              <div class="contact-info3">
                <img src="../../common/image/qrcode_230.jpg" alt="二维码" width="80" height="80">
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
    </article>
  </section>
</template>

<script>
  import {contactMixin} from 'common/js/mixin'

  export default {
    mixins: [contactMixin]
  }
</script>

<style lang="stylus" scoped>
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
