<template>
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
</template>

<script>
  export default {
    name: 'case'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .case-wrapper {
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
          padding: 5px 10px;
          margin-bottom: 5px;
          border: 1px solid #555;
          margin-right: -1px;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          &.active {
            color: #fff;
            border-color: #1771f9
            background-color: #1771f9;
          }
          &:first-child {
            border-radius: 4px 0 0 4px;
          }
          &:last-child {
            border-radius: 0 4px 4px 0;
          }
        }
      }
    }
  }
</style>
