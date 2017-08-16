<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
        <span class="navbar-brand">
          <img src="./logo_top.png" width="212" height="54" alt="logo">
        </span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
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
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .navbar-nav {
    .nav-item {
      .nav-link {
        font-size: $font-size-large-x;
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
  }
</style>
