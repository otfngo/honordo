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
          <router-link tag="li" class="nav-item" to="/home">
            <span class="nav-link">首页</span>
          </router-link>
          <router-link tag="li" class="nav-item" to="/about">
            <span class="nav-link">关于我们</span>
          </router-link>
          <router-link tag="li" class="nav-item" to="/bussiness">
            <span class="nav-link">业务范围</span>
          </router-link>
          <router-link tag="li" class="nav-item" to="/case">
            <span class="nav-link">案例展示</span>
          </router-link>
          <router-link tag="li" class="nav-item" to="/contact">
            <span class="nav-link">联系我们</span>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"

  .navbar-nav {
    flex-direction: row;
    .nav-item {
      text-align: center;
      cursor: pointer;
      margin-left: 0;
      margin-right: 2rem;
      .nav-link {
        position: relative;
        font-size: $font-size-large-x;
        padding-left: 0;
        padding-right: 0;
        display: inline-block;
        &:hover {
          color: $text-color-base;
        }
      }
      &.router-link-active {
        .nav-link {
          color: $text-color-base;
          &:after {
            position: absolute;
            left: 0;
            bottom: 0;
            content: '';
            width: 100%;
            height: 0.2rem;
            background-color: $background-color-base;
          }
        }
      }
    }
  }
</style>
