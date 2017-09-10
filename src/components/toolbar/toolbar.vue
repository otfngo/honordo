<template>
  <div class="d-none d-sm-block">
    <div class="toolbar">
      <a class="toolbar-item">
        <span class="toolbar-btn">
          <i class="toolbar-icon ty-icon-wechat"></i>
          <span class="toolbar-text">公众<br/>账号</span>
        </span>
        <span class="toolbar-layer toolbar-layer-weixin"></span>
      </a>
      <a v-show="backtopShow==true" class="toolbar-item" @click="handleBacktopClick">
        <span class="toolbar-btn">
          <i class="toolbar-icon ty-icon-arrow-up2"></i>
          <span class="toolbar-text">返回<br/>顶部</span>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        backtopShow: false
      }
    },
    mounted(){
      window.addEventListener("scroll", () =>{
        this._handleBacktopBtnShowHide();
      }, false);
      window.addEventListener("load", () =>{
        this._handleBacktopBtnShowHide();
      }, false);
    },
    methods: {
      handleBacktopClick(){
        // let timer = setInterval(() =>{
        //   if(document.body.scrollTop <= 0 && document.documentElement.scrollTop <= 0) {
        //     clearInterval(timer);
        //   }
        //   document.body.scrollTop = Math.floor(document.body.scrollTop / 2);
        //   document.documentElement.scrollTop = Math.floor(document.documentElement.scrollTop / 2);
        // }, 10)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      },
      _handleBacktopBtnShowHide(){
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop > 200) {
          this.backtopShow = true;
        } else {
          this.backtopShow = false;
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable";

  .ty-icon-wechat {
    &:before {
      content: $ty-icon-wechat;
    }
  }

  .ty-icon-arrow-up2 {
    &:before {
      content: $ty-icon-arrow-up2;
    }
  }

  .toolbar {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    background-color: rgba(136, 136, 136, .2);
    transition: background-color 0.4s;
    &:hover {
      background-color: rgba(136, 136, 136, 1);
    }

    .toolbar-item, .toolbar-btn, .toolbar-icon, .toolbar-text {
      width: $toolbar-size;
      height: $toolbar-size;
    }

    .toolbar-item {
      position: relative;
      display: block;
      &:not(:first-child) {
        border-top: 0.1rem solid $border-color-gray;
      }
      &:hover {
        .toolbar-btn {
          .toolbar-icon {
            top: - $toolbar-size;
          }
          .toolbar-text {
            top: 0;
          }
        }
        .toolbar-layer {
          opacity: 1;
          transform: scale(1) translateZ(0);
        }
      }
      .toolbar-btn {
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        .toolbar-icon, .toolbar-text {
          position: absolute;
          left: 0;
          color: $text-color-white;
          text-align: center;
          transition: top 1s;
          /*background-color: $backgrouond-color-darkgray;*/
        }
        .toolbar-icon {
          top: 0;
          font-size: $font-size-large-x;
          line-height: $toolbar-size;
        }
        .toolbar-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          top: $toolbar-size;
          font-size: $font-size-medium;
        }
      }
      .toolbar-layer {
        position: absolute;
        right: $toolbar-size - 0.6;
        bottom: -1rem;
        width: 240px;
        height: 240px;
        opacity: 0;
        transform-origin: 95% 95%;
        transform: scale(0) translateZ(0);
        transition: opacity 1s, transform 1s;
        &.toolbar-layer-weixin {
          background-image: url(../../common/image/qrcode_230.jpg);
          background-repeat: no-repeat;
          background-position: 0 0;
        }
      }
    }
  }
</style>
