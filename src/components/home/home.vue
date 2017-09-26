<template>
  <section id="home">
    <section class="about">
      <article class="about-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img class="img" src="./img_abouts.png" alt="about" v-webp:src="">
            </div>
            <div class="col-sm">
              <div class="title">
                <div class="en">about us</div>
                <div class="zh">关于我们</div>
              </div>
              <div class="content">
                <div class="intro">
                  <p>
                    深圳市荣和共兴科技有限公司，成立于深圳龙华新区，荣和共兴科技有限公司前身为荣和共建工程科技有限公司，主要服务范围包括：软件开发，项目管理，IT系统规划，技术支持等领域；主要服务内容包括：网站、商城、微信、APP以及CRM，OA，ERP等定制软件开发，以及大数据画像分析等先进技术评估构建等。</p>
                  <p>
                    公司本着“客户至上、以人为本”的原则，致力于帮助企业通过互联网持续创造企业的价值最大化！公司感谢新老客户一直以来的大力支持和信任，我们将再接再厉，与全球企业一起共同成长，相融共生，共创美好未来。</p>
                </div>
                <div class="more">
                  <a :href="aboutLink" @click.prevent="toAbout">更多</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="bussiness">
      <article class="bussiness-wrapper">
        <div class="title">
          <div class="en">bussiness scope</div>
          <div class="zh">业务范围</div>
        </div>
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-6 col-sm-3">
                <i class="ty-icon-icon1_businessscope"></i>
                <h2>IT服务</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="col-6 col-sm-3">
                <i class="ty-icon-icon2_businessscope"></i>
                <h2>项目管理</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="clearfix d-none d-sm-block"></div>
              <div class="col-6 col-sm-3">
                <i class="ty-icon-icon3_businessscope"></i>
                <h2>软件开发</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="col-6 col-sm-3">
                <i class="ty-icon-icon4_businessscope"></i>
                <h2>服务支持</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="case">
      <article class="case-wrapper">
        <div class="title">
          <div class="en">successful case</div>
          <div class="zh">成功案例</div>
        </div>
        <div class="content">
          <div class="container p-0">
            <ul class="list">
              <li class="list-item" v-for="(item,index) in caseList" :key="index" :data-index="index"
                  :class="{active:currentIndex==index}"
                  @click="handleListClick($event)">
                {{item.name}}
              </li>
            </ul>
          </div>
          <div class="container">
            <div class="item" v-if="currentIndex==0">
              <p>软件开发</p>
              <p>软件开发</p>
              <p>软件开发</p>
              <p>软件开发</p>
            </div>
            <div class="item" v-if="currentIndex==1">
              <p>IT系统服务</p>
              <p>IT系统服务</p>
              <p>IT系统服务</p>
              <p>IT系统服务</p>
            </div>
            <div class="item" v-if="currentIndex==2">
              <p>项目管理</p>
              <p>项目管理</p>
              <p>项目管理</p>
              <p>项目管理</p>
            </div>
            <div class="item" v-if="currentIndex==3">
              <p>服务支持</p>
              <p>服务支持</p>
              <p>服务支持</p>
              <p>服务支持</p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="contact">
      <article class="contact-wrapper">
        <div class="title">
          <div class="en">contact us</div>
          <div class="zh">联系我们</div>
        </div>
        <div class="content">
          <div class="contact-info">
            <div class="container">
              <div class="row">
                <div class="col-6 col-sm-3">
                  <i class="ty-icon-phone_contactus"></i>
                  <p>{{contactInfo.phone.name}}</p>
                  <p>{{contactInfo.phone.value}}</p>
                </div>
                <div class="col-6 col-sm-3">
                  <i class="ty-icon-email_contactus"></i>
                  <p>{{contactInfo.email.name}}</p>
                  <p>{{contactInfo.email.value}}</p>
                </div>
                <div class="clearfix d-none d-sm-block"></div>
                <div class="col-6 col-sm-3">
                  <i class="ty-icon-fax_contactus"></i>
                  <p>{{contactInfo.fax.name}}</p>
                  <p>{{contactInfo.fax.value}}</p>
                </div>
                <div class="col-6 col-sm-3">
                  <i class="ty-icon-location_contactus"></i>
                  <p>{{contactInfo.address.name}}</p>
                  <p>{{contactInfo.address.value}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {ABOUT_LINK_LIST} from 'api/config'
  import {caseMixin, contactMixin} from 'common/js/mixin'

  export default {
    mixins: [caseMixin, contactMixin],
    computed: {
      aboutLink() {
        let aboutLink = this._getAboutLink()
        if (aboutLink) {
          return `/${aboutLink.link}`
        }
        return ''
      },
      ...mapGetters([
        'lang'
      ])
    },
    methods: {
      toAbout() {
        let aboutLink = this._getAboutLink()
        if (aboutLink) {
          this.$router.push({
            path: `/${aboutLink.link}`
          })
        }
      },
      _getAboutLink() {
        return ABOUT_LINK_LIST.find(item => item.lang === this.lang)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable";
  @import "~common/stylus/mixin";

  [class^="ty-icon-"], [class*=" ty-icon-"] {
    font-size: 10rem;
    color: $text-color-base;
  }

  .ty-icon-email_contactus
    &:before
      content $ty-icon-email_contactus

  .ty-icon-fax_contactus
    &:before
      content $ty-icon-fax_contactus

  .ty-icon-icon1_businessscope
    icon_businessscope()
    &:before
      content $ty-icon-icon1_businessscope

  .ty-icon-icon2_businessscope
    icon_businessscope()
    &:before
      content $ty-icon-icon2_businessscope

  .ty-icon-icon3_businessscope
    icon_businessscope()
    &:before
      content $ty-icon-icon3_businessscope

  .ty-icon-icon4_businessscope
    icon_businessscope()
    &:before
      content $ty-icon-icon4_businessscope

  .ty-icon-location_contactus
    &:before
      content $ty-icon-location_contactus

  .ty-icon-phone_contactus
    &:before
      content $ty-icon-phone_contactus

  .ty-icon-wechat
    &:before
      content $ty-icon-wechat

  .ty-icon-arrow-up2
    &:before
      content $ty-icon-arrow-up2

  .about, .case {
    position: relative;
    background-attachment fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .about {
    background-image: url("./bg_aboutus.png");
  }

  .case {
    background-image: url(./bg_successfulcase.jpg);
  }

  .about-wrapper {
    padding-top: 3rem;
    bg-opacity(0.8);
    .img {
      max-width: 100%;
      vertical-align: top;
    }
    .content {
      font-size: $font-size-base;
      .intro {
        text-align: justify;
      }
      .more {
        font-weight: normal;
        text-align: right;
        margin-top: 2rem;
        &:after {
          content: '>>'
        }
        a {
          color: $text-color-black;
        }
      }
    }
  }

  .bussiness-wrapper {
    .header {
      background-color: transparent;
    }
    .content {
      position: relative;
      font-size: $font-size-base;
      text-align: center;
      color: $text-color-white;
      padding: 2rem 0;
      background-color: $background-color-base;
      &:before {
        position: absolute;
        left: 50%;
        bottom: 100%;
        transform: translateX(-50%) translateZ(0);
        content: '';
        border: 2rem solid transparent;
        border-bottom-color: $background-color-base;
      }
      .img {
        margin-bottom: 2rem;
        rounded-circle();
        max-width: 100%;
      }
      p {
        text-align: justify;
      }
    }
  }

  .case-wrapper {
    padding-bottom: 3rem;
    .content {
      .list {
        list-style: none;
        text-align: center;
        font-size: 0;
        margin-bottom: 1rem;
        .list-item {
          display: inline-block;
          padding: 0.5rem 1rem;
          margin-bottom: 0.5rem;
          font-size: $font-size-base;
          border: 0.1rem solid $border-color-gray;
          margin-right: -0.1rem;
          bg-opacity(0.4);
          cursor: pointer;
          &.active {
            color: $text-color-white;
            border-color: $background-color-base
            background-color: $background-color-base;
          }
          &:first-child {
            border-radius: $border-radius-base 0 0 $border-radius-base;
          }
          &:last-child {
            border-radius: 0 $border-radius-base $border-radius-base 0;
          }
          &:not(.active):hover {
            background-color: $background-color-gray;
          }
        }
      }
      .item {
        color: $text-color-black;
        padding: 1rem;
        border-radius: $border-radius-base;
        bg-opacity(0.6);
      }
    }
  }

  .contact-wrapper {
    .contact-info {
      margin-top: -1rem;
      text-align: center;
      .img {
        margin-top: 1rem;
        margin-bottom: .5rem;
        rounded-circle();
        max-width: 100%;
      }
      p {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
</style>
