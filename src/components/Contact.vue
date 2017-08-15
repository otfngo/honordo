<template>
  <div class="contact">
    <div class="contact-wrapper">
      <div class="container">
        <div class="header">
          <div class="en">contact us</div>
          <div class="zh">联系我们</div>
        </div>
        <div class="content">
          <div class="row">
            <div class="col">
              <div class="contact-info1">
                <h5>找到我们很容易！</h5>
                <p>您可以通过以下方式联系我们，或给我们留言</p>
              </div>
              <div class="contact-info2">
                <h5>深圳市荣和共兴科技有限公司</h5>
                <p>电话：0755-23220387</p>
                <p>地址：深圳市龙华新区金龙路华富锦大厦14F</p>
                <p>网址：http://www.honordo.com</p>
                <p>邮箱：info@honordo.com</p>
              </div>
              <div class="contact-info3">
                <img src="../common/image/qrcode_230px.jpg" alt="二维码" width="80" height="80">
              </div>
            </div>
            <div class="col">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header {
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
      background-color: #007bff;
    }
  }

  .contact-wrapper {
    h5 {
      font-size: 16px;
    }
    p {
      line-height: 1;
      font-size: 12px;
      margin: 5px 0;
    }

    .contact-info1 {
      margin-bottom: 20px;
    }

    .contact-info2 {
      position: relative;
      margin-bottom: 10px;
      h5 {
        margin-bottom: 20px;
      }
      padding-bottom: 10px;
      &:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 50%;
        height: 1px;
        background-color: #eee;
      }
    }
  }
</style>
