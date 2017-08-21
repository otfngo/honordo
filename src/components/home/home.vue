<template>
  <div id="home">
    <div class="about">
      <div class="about-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img class="img" src="./img_abouts.png" alt="about">
            </div>
            <div class="col-sm">
              <div class="header">
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
                  <a href="#/about">更多</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bussiness">
      <div class="bussiness-wrapper">
        <div class="header">
          <div class="en">bussiness scope</div>
          <div class="zh">业务范围</div>
        </div>
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-6 col-sm-3">
                <img class="img" src="./icon1_businessscope.jpg" alt="icon">
                <h2>IT服务</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="col-6 col-sm-3">
                <img class="img" src="./icon2_businessscope.jpg" alt="icon">
                <h2>项目管理</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="clearfix d-none d-sm-block"></div>
              <div class="col-6 col-sm-3">
                <img class="img" src="./icon3_businessscope.jpg" alt="icon">
                <h2>软件开发</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="col-6 col-sm-3">
                <img class="img" src="./icon4_businessscope.jpg" alt="icon">
                <h2>服务支持</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="case">
      <div class="case-wrapper">
        <div class="header">
          <div class="en">successful case</div>
          <div class="zh">成功案例</div>
        </div>
        <div class="content">
          <div class="container p-0">
            <ul class="list">
              <li class="list-item" v-for="(item,index) in caseList" :data-index="index"
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
      </div>
    </div>
    <div class="contact">
      <div class="contact-wrapper">
        <div class="header">
          <div class="en">contact us</div>
          <div class="zh">联系我们</div>
        </div>
        <div class="content">
          <div class="container">
            <div class="contact-info">
              <div class="row">
                <div class="col-6 col-sm-3">
                  <img class="img" src="./phone_contactus.png" alt="icon">
                  <p>电话</p>
                  <p>0755-2322-0387</p>
                </div>
                <div class="col-6 col-sm-3">
                  <img class="img" src="./email_contactus.png" alt="icon">
                  <p>邮箱</p>
                  <p>info@honordo.com</p>
                </div>
                <div class="clearfix d-none d-sm-block"></div>
                <div class="col-6 col-sm-3">
                  <img class="img" src="./fax_contactus.png" alt="icon">
                  <p>传真</p>
                  <p>0755-2322-0387</p>
                </div>
                <div class="col-6 col-sm-3">
                  <img class="img" src="./location_contactus.png" alt="icon">
                  <p>地址</p>
                  <p>深圳市龙华新区金龙路华富锦大厦</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ContactForm from 'components/contact-form/contact-form';

  export default {
    name: 'home',
    components: {
      ContactForm
    },
    data(){
      return {
        currentIndex: 0,
        caseList: []
      }
    },
    created(){
      this.caseList = this._getCaseList();
    },
    methods: {
      _getCaseList(){
        let list = [
          {id: 0, name: '软件开发'},
          {id: 1, name: 'IT系统服务'},
          {id: 2, name: '项目管理'},
          {id: 3, name: '服务支持'}
        ];

        return list;
      },
      handleListClick(event){
        this.currentIndex = event.currentTarget.dataset["index"];
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable";
  @import "~common/stylus/mixin";

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
        transform: translate(-50%);
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
