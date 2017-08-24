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
          <router-link tag="li" class="nav-item" v-for="(item,index) in navList" :key="index" :to="item.to">
            <span class="nav-link">{{item.name}}</span>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data(){
      return {
        navList: []
      }
    },
    created(){
      this.navList = this._getNavList();
    },
    methods: {
      _getNavList(){
        let list = [
          {name: '首页', to: '/home'},
          {name: '关于我们', to: '/about'},
          {name: '业务范围', to: '/bussiness'},
          {name: '案例展示', to: '/case'},
          {name: '联系我们', to: '/contact'}
        ];

        return list;
      }
    }
  }
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
