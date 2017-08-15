<template>
  <div id="home">
    <div class="about">
      <div class="about-wrapper">
        <div class="container">
          <div class="img">
            <img src="../common/image/img_abouts.png" alt="about">
          </div>
          <div class="text">
            <div class="en">about us</div>
            <div class="zh">关于我们</div>
            <div class="intro">
              Parallax scrolling is a web site trend where the background content is moved at a different speed than the
              foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere
              mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim.
              Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam
              aecenas ante augue etiam maecenas, porta porttitor placerat leo.
            </div>
            <div class="more">更多</div>
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
                <img class="img" src="../common/image/icon1_businessscope.jpg" alt="icon">
                <h2>IT服务</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="col"></div>
              <div class="col">
                <img class="img" src="../common/image/icon2_businessscope.jpg" alt="icon">
                <h2>项目管理</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="col"></div>
              <div class="col">
                <img class="img" src="../common/image/icon3_businessscope.jpg" alt="icon">
                <h2>软件开发</h2>
                <p>响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应式网站建设响应
                  式网站建设响应式网站建设响应</p>
              </div>
              <div class="col"></div>
              <div class="col">
                <img class="img" src="../common/image/icon4_businessscope.jpg" alt="icon">
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
            <div class="category">
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary">软件开发</button>
                <button type="button" class="btn btn-transparent">IT系统服务</button>
                <button type="button" class="btn btn-transparent">项目管理</button>
                <button type="button" class="btn btn-transparent">服务支持</button>
              </div>
            </div>
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
                <button type="submit" class="btn btn-primary btn-sm m-r-10">提交</button>
                <button type="reset" class="btn btn-secondary btn-sm">清空</button>
              </div>
            </form>
            <div class="contact-info">
              <div class="row">
                <div class="col">
                  <img class="img" src="../common/image/phone_contactus.png" alt="icon">
                  <p>电话</p>
                  <p>0755-2322-0387</p>
                </div>
                <div class="col">
                  <img class="img" src="../common/image/email_contactus.png" alt="icon">
                  <p>邮箱</p>
                  <p>info@honordo.com</p>
                </div>
                <div class="col">
                  <img class="img" src="../common/image/fax_contactus.png" alt="icon">
                  <p>传真</p>
                  <p>0755-2322-0387</p>
                </div>
                <div class="col">
                  <img class="img" src="../common/image/location_contactus.png" alt="icon">
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
    name: 'home',
    data(){
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .btn {
    outline: none;
    box-shadow: none;
    cursor: pointer;
  }

  .btn-transparent {
    background-color: transparent;
    border: 1px solid #222;
  }

  .about, .case {
    position: relative;
    background-attachment fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .about {
    background-image url("../common/image/bg_aboutus.png");
    min-height: 711px;
    .about-wrapper {
      margin-top: 50px;
      .text {
        padding: 0 0 20px 20px;
        .intro {
          text-align: justify;
        }
      }
    }
  }

  .case {
    background-image: url(../common/image/bg_successfulcase.jpg);
    min-height: 830px
  }

  .header, .text {
    text-align: center;
  }

  .en {
    font-size: 35px;
    text-transform: uppercase;
    padding-top: 50px;
  }

  .zh {
    display: inline-block;
    position: relative;
    font-size: 36px;
    padding-bottom: 5px;
    margin-bottom: 40px;
    &:after {
      position: absolute;
      left: 25%;
      bottom: 0;
      content: '';
      width: 50%;
      height: 3px;
      background-color: #1771f9;
    }
  }

  .about-wrapper {
    background-color: #2c354a;
    .img {
      display: inline-block;
      vertical-align: top;
    }
    .text {
      display: inline-block;
      width: 50%;
      color: #fff;
    }
  }

  .bussiness-wrapper {
    position: relative
    font-size: 0;
    padding: 20px 0;
    background-color: #1771f9;
    &:before {
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform: translate(-50%);
      content: '';
      border: 20px solid transparent;
      border-bottom-color: #1771f9;
    }
    .header {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translate(-50%);
      color: #000;
    }
    .content {
      font-size: 14px;
      text-align: center;
      color: #fff;
      .img {
        margin: 20px auto;
        border-radius: 50%;
      }
      p {
        text-align: justify;
      }
    }
  }

  .case-wrapper {
    .content {
      .category {
        text-align: center;
      }
    }
  }

  .contact-wrapper {
    .contact-info {
      margin-top: 60px;
      text-align: center;
      img {
        margin-bottom: 10px;
      }
      p {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
</style>
