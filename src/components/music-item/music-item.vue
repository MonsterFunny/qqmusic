<template>
  <div class="music-item">
    <div class="sub-item" v-for="item in discList">
      <figure>
        <img :src="item.imgurl" width="136" height="136">
        <div class="mask" ref="mask"></div>
        <figcaption>
          <p>
            【负能量慎点】每天这么丧不如喝碗毒鸡汤
          </p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
  import {ERR_OK} from '@/api/config'
  import {getDiscList} from '@/api/recommend'

  export default {
    data() {
      return {
        discList: []
      }
    },
    props: [
      'item'
    ],
    created() {
      this._getDiscList()
/*
      this.$http.get('/api/data').then(response => {
        if (response.data.errno === ERR_OK) {
          this.songList = response.data.data
          console.log(this.songList.song01)
        }
      })
*/
    },
    methods: {
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      }
    }
  }
</script>data

<style scoped lang="scss">
  .music-item {
    .sub-item {
      position: relative;
      float: left;
      width: 136px;
      margin-right: 15px;
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
          margin-top: 4px;
          line-height: 16px;
          cursor: pointer;
          p:hover {
            color: #24c339;
          }
        }
      }
    }
  }
</style>
