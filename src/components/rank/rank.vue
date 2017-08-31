<template>
  <div class="rank">
    <div class="title">
      <h1>{{topRankList.GroupName}}</h1>
    </div>
    <div class="rank-item" v-for="item in topRankList.List">
      <div class="image">
        <a href="javascript:;">
          <img :src="item.pic_v12" width="126" height="126">
        </a>
        <div class="mask"></div>
      </div>
      <div class="content">
        <ol class="songlist">
          <li v-for="(song, index) in item.songlist" v-if="index < 3">{{index+1}}&nbsp;{{song.songname}} - {{song.singername}}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  import { getRankList } from '@/api/recommend'

  export default {
    data () {
      return {
        topRankList: [],
        worldRankList: []
      }
    },
    created () {
      this._getRankList()
    },
    methods: {
      _getRankList () {
        getRankList().then(res => {
          this.topRankList = res[0]
          this.worldRankList = res[1]
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .rank {
    position: absolute;
    top: 62px;
    left: 250px;
    width: 801px;
    height: 640px;
    overflow-y: scroll;
    .title {
      padding-top: 10px;
      padding-left: 10px;
      height: 50px;
      border-bottom: 1px solid #eee;
      h1 {
        font-size: 30px;
        line-height: 50px;
      }
    }
    .rank-item {
      display: inline-block;
      padding-top: 10px;
      padding-left: 10px;
      width: 48%;
      overflow: hidden;
      .image {
        float: left;
        position: relative;
        .mask {
          position: absolute;
          display: none;
          top: 0;
          width: 126px;
          height: 126px;
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
      }
      .content {
        float: left;
        padding: 20px;
        width: 55%;
        font-size: 12px;
        line-height: 30px;
        background: #fafafa;
        .songlist {
          li {
            width: 100%;
            height: 30px;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
