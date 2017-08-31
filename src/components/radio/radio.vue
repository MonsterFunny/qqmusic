<template>
  <div class="radio">
    <div class="menu-bar">
      <ul class="menu-list">
        <li class="list-item" v-for="(item,index) in radioList" v-html="item.name" @click="[_getIndex(index),_getLeft(getIndex)]" :class="[index === getIndex ? 'active' : '']"></li>
      </ul>
      <div class="slide" :style="{left: getLeft}"></div>
    </div>
    <div class="items" v-for="(item,index) in radioList" :class="[index === getIndex ? 'show' : 'hide']">
      <figure class="item" v-for="subitem in item.radioList">
        <img v-lazy="subitem.radioImg" width="136" height="136">
        <figcaption v-html="subitem.radioName"></figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
  import { ERR_OK } from '@/api/config'
  import { getRadioList } from '@/api/recommend'

  export default {
    data () {
      return {
        radioList: [],
        getIndex: 0,
        getLeft: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
      })
    },
    created () {
      this._getRadioList()
    },
    methods: {
      _getRadioList () {
        getRadioList().then(res => {
          if (res.code === ERR_OK) {
            this.radioList = res.data.data.groupList
          }
        })
      },
      _getIndex (index) {
        this.getIndex = index
      },
      _getLeft(index) {
        this.getLeft = index * 52 + 'px'
      }
    }
  }
</script>

<style scoped lang="scss">
  .radio {
    position: absolute;
    top: 62px;
    left: 250px;
    width: 801px;
    height: 640px;
    overflow-y: scroll;
    .menu-bar {
      position: relative;
      height: 50px;
      margin-left: 40px;
      &:after {
        display: block;
        content: '';
        position: absolute;
        bottom: 6px;
        width: 100%;
        height: 1px;
        background: #eee;
      }
      .slide {
        position: absolute;
        bottom: 5px;
        width: 28px;
        height: 3px;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        background: #2bba71;
        z-index: 1;
      }
      .menu-list {
        .list-item {
          float: left;
          margin-right: 24px;
          /*padding-left: 4px;*/
          height: 50px;
          text-align: center;
          font-size: 14px;
          line-height: 50px;
          color: #666;
          cursor: pointer;
          &:hover {
            color: #24c339 !important;
          }
          &.active {
            color: #000;
          }
        }
      }
    }
    .items {
      position: relative;
      float: left;
      margin: 10px;
      padding-left: 14px;
      font-size: 13px;
      font-weight: normal;
      &.show {
        display: block;
      }
      &.hide {
        display: none;
      }
      .item {
        position: relative;
        float: left;
        width: 136px;
        margin: 6px;
        font-size: 13px;
        font-weight: normal;
        &:last-child {
          margin-right: 0;
        }
        figcaption {
          margin-top: 4px;
          line-height: 16px;
          cursor: pointer;
          &:hover {
            color: #24c339;
          }
        }
      }
    }
  }
</style>
