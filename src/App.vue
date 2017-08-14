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
            <li class="nav-item active">
              <a class="nav-link" href="#">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">关于我们</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">业务范围</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">案例展示</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">联系我们</a>
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
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Microsoft YaHei UI', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .navbar-nav .nav-item .nav-link{
    padding-left: 2rem;
    padding-right: 2rem;
  }
</style>
