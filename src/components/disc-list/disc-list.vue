<template>
  <div class="disc-list">
    <div class="filter-bar">
      <button class="btn" @click="pop($event)">
        {{menuTitle}}
        <span :class="['caret', show ? 'up' : 'down']"></span>
      </button>
      <v-popover v-show="show" ref="popover">
        <ul class="menu">
          <li class="title">全部</li>
          <li class="item" v-for="item in menuList">
            <p class="sub-title">{{item.categoryGroupName}}</p>
            <ul class="sub-menu">
              <li class="sub-item" v-for="subitem in item.items" v-html="subitem.categoryName" @click="_getMenuTitle($event)"></li>
            </ul>
          </li>
        </ul>
      </v-popover>
      <ul class="hot-list">
        <li><h3>热门标签:</h3></li>
        <li>英语</li>
        <li>ACG</li>
        <li>民谣</li>
        <li>电子</li>
        <li>爵士</li>
      </ul>
      <div class="dropmenu">
        <select>
          <option value="recommend" selected>推荐</option>
          <option value="hot">热门</option>
        </select>
      </div>
    </div>
    <div class="disc-item" v-for="item in discList">
      <figure>
        <img v-lazy="item.imgurl" width="136" height="136">
        <div class="mask"></div>
        <figcaption>
          <p class="desc" v-html="item.dissname"></p>
          <p class="artist" v-html="item.creator.name"></p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
  import { ERR_OK } from '@/api/config'
  import { getDiscList, getMenuList } from '@/api/recommend'
  import vPopover from 'components/v-popover/v-popover'

  export default {
    data () {
      return {
        popPlacement: 'bottom',
        discList: [],
        menuList: [],
        show: false,
        menuTitle: '全部'
      }
    },
    components: {
      vPopover
    },
    mounted () {
      this.$nextTick(() => {
        let that = this
        this.$refs.popover.$el.addEventListener('click', function (e) {
          e.stopPropagation()
        })
        document.body.addEventListener('click', function () {
          that.show = false
        })
      })
    },
    created () {
      this._getDiscList()
      this._getMenuList()
    },
    methods: {
      _getDiscList () {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      },
      pop (e) {
        console.log(e)
        e.stopPropagation()
        this.show = !this.show
      },
      _getMenuList () {
        getMenuList().then(res => {
          if (res.code === ERR_OK) {
            const result = res.data.categories
            let that = this
            for (let i = 1; i < result.length; i++) {
              that.menuList.push(result[i])
            }
          }
        })
      },
      _getMenuTitle(e) {
        this.menuTitle = e.target.innerText
        this.show = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .disc-list {
    position: absolute;
    top: 62px;
    left: 250px;
    width: 801px;
    height: 640px;
    overflow-y: scroll;
    .filter-bar {
      position: relative;
      height: 50px;
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 98%;
        height: 1px;
        left: 1%;
        bottom: 0;
        background: #eee;
      }
      .btn {
        float: left;
        height: 30px;
        margin-top: 10px;
        margin-left: 10px;
        padding: 0;
        border: none;
        outline: none;
        font-size: 16px;
        line-height: 30px;
        background: #fff;
        .caret {
          display: inline-block;
          width: 0;
          height: 0;
        }
        .up {
          border-left: 5px solid transparent;
          border-bottom: 10px solid #000;
          border-right: 5px solid transparent;
        }
        .down {
          border-left: 5px solid transparent;
          border-top: 10px solid #000;
          border-right: 5px solid transparent;
        }
      }
      .menu {
        .title {
          width: 40px;
          font-size: 16px;
          line-height: 16px;
          cursor: pointer;
        }
        .item {
          margin-top: 10px;
          .sub-title {
            margin-top: 5px;
            color: #666;
            font-size: 12px;
            line-height: 16px;
          }
          .sub-menu {
            display: inline-block;
            .sub-item {
              float: left;
              font-size: 14px;
              width: 65px;
              margin: 5px;
              cursor: pointer;
            }
          }
        }
      }
      .hot-list {
        height: 30px;
        margin-top: 15px;
        margin-left: 20px;
        float: left;
        li {
          float: left;
          height: 20px;
          margin-right: 10px;
          padding: 0 8px;
          font-size: 12px;
          line-height: 20px;
          border-radius: 10px;
          background: #f6f6f6;
          cursor: pointer;
          &:hover {
            color: #fff;
            background: #199f59;
          }
          &:first-child {
            font-size: 14px;
            background: #fff;
            cursor: default;
            &:hover {
              color: #000;
              background: #fff;
            }
          }
        }
      }
      .dropmenu {
        float: right;
        height: 30px;
        margin-top: 10px;
        margin-right: 5px;
        select {
          border: none;
          outline: none;
          font-size: 14px;
          line-height: 30px;
          background: #fff;
          &:hover {
            color: #24c339;
          }
        }
      }
    }
    .disc-item {
      position: relative;
      float: left;
      width: 136px;
      margin: 10px;
      font-size: 13px;
      font-weight: normal;
      &:last-child {
        margin-right: 0;
      }
      figure {
        cursor: pointer;
        .mask {
          position: absolute;
          display: none;
          top: 0;
          width: 136px;
          height: 136px;
          background: rgba(0, 0, 0, .5);
          cursor: pointer;
          &:before {
            display: block;
            position: absolute;
            content: '';
            width: 50px;
            height: 50px;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            border-radius: 50%;
            background: #2bba71;
          }
          &:after {
            display: block;
            position: absolute;
            content: '';
            width: 0;
            height: 0;
            left: 5px;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            border-top: 10px solid transparent;
            border-left: 20px solid #fff;
            border-bottom: 10px solid transparent;
          }
        }
        &:hover {
          .mask {
            display: block;
          }
        }
        figcaption {
          height: 54px;
          margin-top: 4px;
          cursor: pointer;
          .desc {
            overflow: hidden;
            height: 32px;
            font-size: 13px;
            line-height: 16px;
          }
          .artist {
            height: 16px;
            overflow: hidden;
            font-size: 12px;
            line-height: 16px;
            color: #666;
          }
          .desc:hover,
          .artist:hover {
            color: #24c339;
          }
        }
      }
    }
  }
</style>
