<template>
  <div class="bussiness">
    <div class="bussiness-wrapper">
      <div class="title">
        <div class="en">bussiness scope</div>
        <div class="zh">业务范围</div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <ul class="list-group">
                <li class="list-group-item" v-for="(item,index) in bussinessList" :data-index="index"
                    :class="{active:currentIndex==index}"
                    @click="handleListClick($event)">
                  {{item.name}}
                </li>
              </ul>
            </div>
            <div class="col">
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
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bussiness',
    data(){
      return {
        currentIndex: 0,
        bussinessList: []
      }
    },
    created(){
      this.bussinessList = this._getBussinessList();
    },
    methods: {
      handleListClick(event){
        this.currentIndex = event.currentTarget.dataset["index"];
      },
      _getBussinessList(){
        let list = [
          {id: 0, name: '软件开发'},
          {id: 1, name: 'IT系统服务'},
          {id: 2, name: '项目管理'},
          {id: 3, name: '服务支持'}
        ];

        return list;
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
            transform: translateY(-50%) translateZ(0);
            border: 1rem solid transparent;
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
