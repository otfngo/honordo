<template>
  <div class="case">
    <div class="case-wrapper">
      <div class="header">
        <div class="en">successful case</div>
        <div class="zh">成功案例</div>
      </div>
      <div class="content">
        <div class="container p-0">
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
  @import "~common/stylus/variable";

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
          padding: 0.5rem 1rem;
          margin-bottom: 0.5rem;
          font-size: $font-size-base;
          border: 0.1rem solid $border-color-gray;
          margin-right: -0.1rem;
          cursor: pointer;
          &.active {
            color: $text-color-white;
            border-color: $border-color-base;
            background-color: $background-color-base;
          }
          &:first-child {
            border-radius: $border-radius-base 0 0 $border-radius-base;
          }
          &:last-child {
            border-radius: 0 $border-radius-base $border-radius-base 0;
          }
        }
      }
    }
  }
</style>
