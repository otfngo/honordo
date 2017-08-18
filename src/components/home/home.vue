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
        <div class="container">
          <div class="header">
            <div class="en">bussiness scope</div>
            <div class="zh">业务范围</div>
          </div>
          <div class="content">
            <div class="row">
              <div class="col">
                <img class="img" src="./icon1_businessscope.jpg" alt="icon">
                <h2>IT服务</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="col">
                <img class="img" src="./icon2_businessscope.jpg" alt="icon">
                <h2>项目管理</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="col">
                <img class="img" src="./icon3_businessscope.jpg" alt="icon">
                <h2>软件开发</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="col">
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
        <div class="container">
          <div class="header">
            <div class="en">successful case</div>
            <div class="zh">成功案例</div>
          </div>
          <div class="content">
            <ul class="list">
              <li class="list-item active">软件开发</li>
              <li class="list-item">IT系统服务</li>
              <li class="list-item">项目管理</li>
              <li class="list-item">服务支持</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact-wrapper">
        <div class="container">
          <div class="header">
            <div class="en">contact us</div>
            <div class="zh">联系我们</div>
          </div>
          <div class="content">
            <form>
              <div class="form-group">
                <label for="msg-title">留言标题</label>
                <input type="text" class="form-control" id="msg-title">
              </div>
              <div class="form-group">
                <label for="msg-content">留言内容</label>
                <textarea class="form-control" id="msg-content" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="msg-email">联系邮箱</label>
                <input type="email" class="form-control" id="msg-email">
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary btn-sm mr-2">提交</button>
                <button type="reset" class="btn btn-secondary btn-sm">清空</button>
              </div>
            </form>
            <div class="contact-info">
              <div class="row">
                <div class="col">
                  <img class="img" src="./phone_contactus.png" alt="icon">
                  <p>电话</p>
                  <p>0755-2322-0387</p>
                </div>
                <div class="col">
                  <img class="img" src="./email_contactus.png" alt="icon">
                  <p>邮箱</p>
                  <p>info@honordo.com</p>
                </div>
                <div class="col">
                  <img class="img" src="./fax_contactus.png" alt="icon">
                  <p>传真</p>
                  <p>0755-2322-0387</p>
                </div>
                <div class="col">
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
  export default {
    name: 'home'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
    margin-bottom: 5rem;
    bg-opacity(0.8);
    .img {
      max-width: 100%;
      min-width: 16rem;
      padding-top: 5rem;
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
    position: relative
    font-size: 0;
    padding: 2rem 0;
    margin-top: 20rem;
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
    .header {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translate(-50%);
      color: $text-color-black;
    }
    .content {
      font-size: $font-size-medium;
      text-align: center;
      color: $text-color-white;
      .img {
        margin: 2rem auto;
        border-radius: 50%;
        max-width: 100%;
        min-width: 100px;
      }
      p {
        text-align: justify;
      }
    }
  }

  .case-wrapper {
    padding-bottom: 50px;
    .content {
      .category {
        text-align: center;
      }
      .list {
        list-style: none;
        text-align: center;
        font-size: 0;
        margin: 0;
        .list-item {
          display: inline-block;
          padding: 0.5rem 1rem;
          margin-bottom: 0.5rem;
          border: 0.1rem solid #555;
          margin-right: -0.1rem;
          bg-opacity(0.5);
          cursor: pointer;
          &.active {
            color: $text-color-white;
            border-color: $background-color-base
            background-color: $background-color-base;
          }
          &:first-child {
            border-radius: 0.4rem 0 0 0.4rem;
          }
          &:last-child {
            border-radius: 0 0.4rem 0.4rem 0;
          }
        }
      }
    }
  }

  .contact-wrapper {
    .contact-info {
      margin-top: 6rem;
      text-align: center;
      .img {
        margin: 2rem auto;
        border-radius: 50%;
        max-width: 100%;
        min-width: 100px;
      }
      p {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
</style>
