<template>
  <div class="bussiness">
    <div class="bussiness-wrapper">
      <div class="container">
        <div class="header">
          <div class="en">bussiness scope</div>
          <div class="zh">业务范围</div>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-3">
              <ul class="list-group" ref="listGroup">
                <li class="list-group-item active" @click="handleListClick($event)">软件开发</li>
                <li class="list-group-item" @click="handleListClick($event)">IT系统服务</li>
                <li class="list-group-item" @click="handleListClick($event)">项目管理</li>
                <li class="list-group-item" @click="handleListClick($event)">服务支持</li>
              </ul>
            </div>
            <div class="col">
              <p>响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站响应式
                响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站
                响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站响应式网站
                响应式网站</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bussiness',
    mounted(){
      this.children = this.$refs.listGroup.children;
      for(let i = 0; i < this.children.length; i++) {
        this.children[i].classList.remove('active');
      }
      this.children[0].classList.add('active');
    },
    methods: {
      handleListClick(event){
        for(let i = 0; i < this.children.length; i++) {
          this.children[i].classList.remove('active');
        }
        event.currentTarget.classList.add('active');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable";

  .bussiness-wrapper {
    .list-group {
      .list-group-item {
        cursor: pointer;
        &.active {
          position: relative;
          &:after {
            position: absolute;
            content: '';
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 10px solid transparent;
            border-left-color: $border-color-base;
          }
        }
        &:not(.active):hover {
          background-color: $background-color-gray;
        }
      }
    }
  }
</style>
