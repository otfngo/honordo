<template>
  <div id="app">
    <m-header></m-header>
    <carousel></carousel>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
    <toolbar></toolbar>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import Carousel from 'components/carousel/carousel'
  import MFooter from 'components/m-footer/m-footer'
  import Toolbar from 'components/toolbar/toolbar'
  import {mapMutations} from 'vuex'
  import {DEFAULT_LANGUAGE, LANGUAGE_LIST} from 'api/config'

  export default {
    created() {
      this.fetchLang()
    },
    watch: {
      '$route': 'fetchLang'
    },
    methods: {
      fetchLang() {
        let language = this.$route.params.lang
        language = language && language.toLowerCase()

        let exist_language = LANGUAGE_LIST.find(item => item.lang === language)
        if (!exist_language) {
          language = DEFAULT_LANGUAGE
        }

        if (this.lang !== language) {
          this.lang = language
          this.setLang(language)
        }
      },
      ...mapMutations({
        setLang: 'SET_LANG'
      })
    },
    components: {
      MHeader,
      Carousel,
      MFooter,
      Toolbar
    }
  }
</script>

<style lang="stylus">
</style>
