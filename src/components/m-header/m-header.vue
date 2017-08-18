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

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .navbar-nav {
    .nav-item {
      text-align: center;
      cursor: pointer;
      .nav-link {
        position: relative;
        font-size: $font-size-large-x;
        padding-left: 2rem;
        padding-right: 2rem;
        display: inline-block;
        &:after {
          position: absolute;
          left: 50%;
          bottom: 0;
          content: '';
          width: 0;
          height: 0.3rem;
          margin-bottom: -0.5rem;
          background-color: $background-color-base;
        }
        &:hover {
          color: $background-color-base;
        }
      }
      &.router-link-active {
        .nav-link {
          color: $background-color-base;
          &:after {
            transition: all .4s;
            left: 10%;
            width: 80%;
          }
        }
      }
    }
  }
</style>
