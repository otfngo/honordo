<template>
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
</template>

<script>
  export default {
    name: 'case'
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

  .case-wrapper {
    .content {
      .category {
        text-align: center;
      }
    }
  }
</style>
