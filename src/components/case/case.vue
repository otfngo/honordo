<template>
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
</template>

<script>
  import {caseMixin} from 'common/js/mixin'

  export default {
    mixins: [caseMixin]
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable";

  .case-wrapper {
    .content {
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
          &:not(.active):hover {
            background-color: $background-color-gray;
          }
        }
      }
    }
  }
</style>
