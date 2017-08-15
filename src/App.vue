<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <span class="navbar-brand">
          <img src="./common/image/logo_top.png" width="212" height="54" alt="logo">
        </span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#/">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/about">关于我们</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/bussiness">业务范围</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/case">案例展示</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/contact">联系我们</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="./common/image/banner2.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="./common/image/banner1.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="./common/image/banner3.jpg" alt="Third slide">
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="img">
        <img src="./common/image/qrcode_230px.jpg" alt="二维码">
      </div>
      <div class="desc">
        <p>版权所有&copy;深圳市荣和共兴科技有限公司 粤ICP备：00000000号 技术支持：荣和共兴</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  * {
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .m-r-10 {
    margin-right: 10px;
  }

  #app {
    font-family: 'Microsoft YaHei UI', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .navbar-nav {
    .nav-item {
      .nav-link {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
  }

  .footer {
    background-color: #2c354a;
    color: #fff;
    text-align: center;
    margin-top:20px;
    .img {
      padding: 40px 0;
    }
    .desc {
      color: #aaa;
      padding-bottom: 1px;
    }
  }
</style>
