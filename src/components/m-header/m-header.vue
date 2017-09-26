<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <span class="navbar-brand" @click="toHome">
          <img src="./logo_top.png" width="212" height="54" alt="logo" v-webp:src="">
        </span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav" :class="{'navbar-nav-row':lang === default_language}">
            <router-link tag="li" class="nav-item" v-for="(item,index) in curNavData.items" :key="index" :to="item.to">
              <span class="nav-link text-uppercase">{{item.name}}</span>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import {DEFAULT_LANGUAGE} from 'api/config'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        default_language: DEFAULT_LANGUAGE
      }
    },
    computed: {
      curNavData() {
        return this._getNavList().find(item => item.lang === this.lang)
      },
      ...mapGetters([
        'lang'
      ])
    },
    methods: {
      toHome() {
        this.$router.push({
          path: `/${this.lang}/home`
        })
      },
      _getNavList() {
        return [{
          lang: 'zh', items: [
            {name: '首页', to: '/zh/home'},
            {name: '关于我们', to: '/zh/about-us'},
            {name: '业务范围', to: '/zh/bussiness-scope'},
            {name: '案例展示', to: '/zh/successful-case'},
            {name: '联系我们', to: '/zh/contact-us'}
          ]
        }, {
          lang: 'en', items: [
            {name: 'home', to: '/en/home'},
            {name: 'about us', to: '/en/about-us'},
            {name: 'bussiness scope', to: '/en/bussiness-scope'},
            {name: 'successful case', to: '/en/successful-case'},
            {name: 'contact us', to: '/en/contact-us'}
          ]
        }]
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"

  .navbar-brand:hover{
    cursor pointer
  }

  .navbar-nav {
    &.navbar-nav-row {
      flex-direction: row;
    }
    .nav-item {
      text-align: left;
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
