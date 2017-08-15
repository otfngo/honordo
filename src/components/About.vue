<template>
  <div class="about">
    <div class="about-wrapper">
      <div class="container">
        <div class="header">
          <div class="en">about us</div>
          <div class="zh">关于我们</div>
        </div>
        <div class="content">
          <div class="row">
            <div class="col">
              <img src="../common/image/img_abouts.png" alt="about">
            </div>
            <div class="col">
              <h5>公司理念</h5>
              <div class="content-item">
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
              </div>
              <h5>公司文化</h5>
              <div class="content-item">
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
              </div>
              <h5>公司准则</h5>
              <div class="content-item">
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
              </div>
              <h5>公司核心</h5>
              <div class="content-item">
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
              </div>
              <h5>公司优势</h5>
              <div class="content-item">
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
                <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header {
    text-align: center;
  }

  .en {
    font-size: 35px;
    text-transform: uppercase;
    padding-top: 50px;
  }

  .zh {
    display: inline-block;
    position: relative;
    font-size: 36px;
    padding-bottom: 5px;
    margin-bottom: 40px;
    &:after {
      position: absolute;
      left: 25%;
      bottom: 0;
      content: '';
      width: 50%;
      height: 3px;
      background-color: #1771f9;
    }
  }

  .about {
    background-image: url(../common/image/bg_aboutus.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .about-wrapper {
      background: rgba(255, 255, 255, 0.8);

      h5 {
        color: #1771f9;
      }
      .content-item {
        margin-bottom: 20px;
        p {
          line-height: 1;
          font-size: 12px;
          margin: 5px 0;
        }
      }
    }
  }
</style>
