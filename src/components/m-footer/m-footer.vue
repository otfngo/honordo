<template>
  <footer class="footer">
    <div class="container">
      <div class="img text-center">
        <img src="../../common/image/qrcode_230.jpg" alt="二维码">
      </div>
      <div class="d-flex justify-content-start">
        <div class="desc">
          <p>版权所有&copy;深圳市荣和共兴科技有限公司 粤ICP备：00000000号 技术支持：荣和共兴</p>
        </div>
        <div class="ml-auto mr-5">
          <button class="btn btn-link btn-dark" v-if="lang!=='zh'" @click="handleLanguageClick('zh')">中文简体</button>
          <button class="btn btn-link btn-dark" v-else-if="lang!=='en'" @click="handleLanguageClick('en')">English
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
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
  }
</style>
