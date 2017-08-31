<template>
  <div class="tab">
    <h3>新歌首发</h3>
    <ul class="tablist">
      <li v-for="item in areaList" @click="areaShow(item)" :class="{active:item.isShow}">{{item.name}}</li>
    </ul>
    <div class="list">
      <div class="btnbar">
        <a class="pull-left" href="javascript:;"><span class="glyphicon glyphicon-play-circle"></span>播放全部</a>
        <div class="pull-right">
          <a href="javascript:;" @click="_changeLeft('next')" :style="{pointerEvents: leftDisabled?'none':'auto'}">
            <span class="glyphicon glyphicon-circle-arrow-left"></span>
          </a>
          <a href="javascript:;" @click="_changeLeft('prev')" :style="{pointerEvents: rightDisabled?'none':'auto'}">
            <span class="glyphicon glyphicon-circle-arrow-right"></span>
          </a>
        </div>
      </div>
    </div>
    <div class="tabbox" v-for="item in areaList" v-if="item.isShow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      areaList: Array,
      slideWidth: Number,
      leftDisabled: Boolean,
      rightDisabled: Boolean
    },
    created() {
    },
    methods: {
      areaShow (item) {
        for (let i = 0; i < this.areaList.length; i++) {
          this.areaList[i].isShow = false
        }
        item.isShow = true
      },
      _changeLeft (tag) {
        let index = 1
        tag === 'prev' ? index = -index : index
        let left = index * this.slideWidth / 3
        this.$emit('transleft', left)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab {
    position: relative;
    padding-left: 20px;
    margin-bottom: 30px;
    h3 {
      margin-bottom: 20px;
    }
    .tablist {
      position: absolute;
      top: 2px;
      left: 95px;
      overflow: hidden;
      li {
        float: left;
        width: 50px;
        height: 16px;
        font-size: 14px;
        line-height: 16px;
        color: #666;
        text-align: center;
        cursor: pointer;
        &.active {
          color: #000;
        }
      }
    }
    .list {
      height: 50px;
      margin-right: 10px;
      background: #f9f9f9;
      .btnbar {
        height: 20px;
        font-size: 16px;
        line-height: 20px;
        padding: 15px;
        overflow: hidden;
        a {
          color: #666;
          &:hover {
            color: #000;
          }
        }
        .pull-left {
          float: left;
          margin-left: -5px;
        }
        .pull-right {
          float: right;
          margin-right: -5px;
        }
      }
      &:after {
        display: block;
        position: absolute;
        content: '';
        width: 755px;
        height: 1px;
        background: #eee;
      }
    }
    .tabbox {
      padding: 10px;
      margin-right: 10px;
      /*width: 736px;*/
      height: 174px;
      background-color: #f9f9f9;
    }
  }
</style>
