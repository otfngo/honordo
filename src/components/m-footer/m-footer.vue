<template>
  <footer class="footer">
    <div class="container">
      <div class="img text-center">
        <img src="../../common/image/qrcode_230.jpg" alt="二维码">
      </div>
      <div class="d-flex justify-content-start">
        <div class="desc">
          <p v-html="copyrightData.content"></p>
        </div>
        <div class="ml-auto mr-5">
          <div class="lang-wrapper">
            <span class="current" @click="handleCurLangClick">{{currentLanguage}}</span>
            <div class="list" v-show="showLanguageList">
              <div class="list-item" v-for="(item, index) in languageList" :key="index" @click="handleLanguageClick(item.lang)">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {LANGUAGE_LIST} from 'api/config'

  export default {
    data(){
      return {
        showLanguageList: false
      }
    },
    computed: {
      copyrightData(){
        return this._getCopyrightData().find(value => value.lang === this.lang).items
      },
      currentLanguage(){
        return LANGUAGE_LIST.find(value => value.lang === this.lang).name
      },
      languageList(){
        return LANGUAGE_LIST.filter(value => value.lang !== this.lang)
      },
      ...mapGetters([
        'lang'
      ])
    },
    methods: {
      handleLanguageClick(lang){
        if(lang === 'zh') {
          this.$router.push('/home')
        } else if(lang === 'en') {
          this.$router.push('/en/home')
        }
        this.showLanguageList = false
      },
      handleCurLangClick(){
        this.showLanguageList = !this.showLanguageList
      },
      _getCopyrightData(){
        let list = [
          {
            lang: 'zh',
            items: {
              content: '版权所有&copy;深圳市荣和共兴科技有限公司 粤ICP备：00000000号 技术支持：荣和共兴'
            }
          },
          {
            lang: 'en',
            items: {
              content: 'Copyright&copy;Shenzhen Ronghe Gongxing Technology Co.,Ltd ICP:00000000 Technical Support：Ronghe Gongxing'
            }
          }
        ]

        return list
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable";

  .footer {
    background-color: $footer-bg-color;
    color: $text-color-light;
    padding-top: 2rem;
    margin-top: 2rem;
    .img {
      margin-bottom: 2rem;
    }

    .btn-link {
      color: $text-color-light;
      cursor: pointer;
      &:hover {
        text-decoration underline
      }
    }

    .lang-wrapper {
      position: relative
      text-align right
      min-width: 10rem
      cursor: default;
      .current {
        padding: 0.2rem 0.5rem
        border: 0.1rem solid $border-color-gray
      }
      .list {
        position: absolute
        right: 0;
        bottom: 2rem;
      }
    }
  }
</style>
