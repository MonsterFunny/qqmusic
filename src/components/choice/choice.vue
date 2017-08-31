<template>
  <div class="choice">
    <carousel :slider-list="sliderList"></carousel>
    <div class="hot">
      <h3>热门推荐</h3>
      <div class="hot-item" v-for="(item,index) in hotList" v-if="index < 5">
        <figure>
          <img v-lazy="item.imgurl" width="136" height="136" class="cover">
          <div class="mask"></div>
          <figcaption>
            <p class="desc" v-html="item.dissname"></p>
            <p class="artist" v-html="item.creator.name"></p>
          </figcaption>
        </figure>
      </div>
    </div>
    <tab :area-list="areaList" :slide-width="slideWidth" :left-disabled="leftDisabled" :right-disabled="rightDisabled" @transleft="_getLeft">
      <div class="wrap">
        <ul class="slide">
          <li class="slide-item" :style="{left: leftNum + 'px'}" ref="slide">
            <musicSmallItem v-for="(item,index) in hotList" :items="item" :key="index"
                            v-if="index < 27"></musicSmallItem>
          </li>
        </ul>
      </div>
    </tab>
    <!--
        <div class="newsong">
          <h3>新歌首发</h3>
          <ul class="tablist">
            <li v-for="item in areaList" @click="areaShow(item)" :class="{active:item.isShow}">{{item.name}}</li>
          </ul>
          <div class="list">
            <div class="btnbar">
              <a class="pull-left" href="javascript:;"><span class="glyphicon glyphicon-play-circle"></span>播放全部</a>
              <div class="pull-right">
                <a href="javascript:;"><span class="glyphicon glyphicon-circle-arrow-left"></span></a>
                <a href="javascript:;"><span class="glyphicon glyphicon-circle-arrow-right"></span></a>
              </div>
            </div>
          </div>
          <div class="tabbox" v-for="item in areaList" v-if="item.isShow">
            {{item.name}}
            <br>
            <musicSmallItem v-for="(item,index) in 9" :key="index"></musicSmallItem>
          </div>
        </div>
    -->
    <div class="singers">
      <h3>热门歌手</h3>
      <div class="item" v-for="item in singerList">
        <figure class="singerpic">
          <img :src="'//y.gtimg.cn/music/photo_new/T001R150x150M000'+item.Fsinger_mid+'.jpg?max_age=2592000'" width="136" height="136">
          <figcaption>
            <p v-html="item.Fsinger_name"></p>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
  import carousel from 'components/carousel/carousel'
  import tab from 'components/tab/tab'
  import musicItem from 'components/music-item/music-item'
  import musicSmallItem from 'components/music-small-item/music-small-item'
  import { getDiscList, getFirstList, getSingerList } from '@/api/recommend'
  import { ERR_OK } from '@/api/config'

  export default {
    data () {
      return {
        areaList: [
          {
            name: '内地',
            isShow: true
          },
          {
            name: '港台',
            isShow: false
          },
          {
            name: '欧美',
            isShow: false
          },
          {
            name: '韩国',
            isShow: false
          },
          {
            name: '日本',
            isShow: false
          }
        ],
        hotList: [],
        sliderList: [],
        singerList: [],
        slideWidth: 0,
        leftNum: 0,
        leftDisabled: true,
        rightDisabled: false
      }
    },
    components: {
      carousel,
      musicItem,
      tab,
      musicSmallItem
    },
    created () {
      this._getDiscList()
      this._getSliderList()
      this._getSingerList()
      this._getSlideWidth()
    },
    methods: {
      _getDiscList () {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.hotList = res.data.list
          }
        })
      },
      _getSliderList () {
        getFirstList().then(res => {
          if (res.code === ERR_OK) {
            this.sliderList = res.data.focus
          }
        })
      },
      _getSingerList () {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            const result = res.data.list
            let that = this
            for (let i = 0; i < 5; i++) {
              that.singerList.push(result[i])
            }
          }
        })
      },
      _getSlideWidth () {
        this.$nextTick(function () {
          this.slideWidth = this.$refs.slide.offsetWidth
        })
      },
      _getLeft (data) {
        this.leftNum += data
        if (this.leftNum === 0) {
          this.leftDisabled = true
        } else {
          this.leftDisabled = false
        }
        if (this.leftNum <= -(this.slideWidth) / 3 * 2) {
          this.rightDisabled = true
        } else {
          this.rightDisabled = false
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .choice {
    position: absolute;
    top: 62px;
    left: 250px;
    width: 801px;
    height: 640px;
    overflow-y: scroll;
    .hot {
      padding-left: 20px;
      margin-bottom: 30px;
      overflow: hidden;
      h3 {
        margin-bottom: 20px;
      }
      .hot-item {
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
    .singers {
      padding-left: 20px;
      margin-bottom: 30px;
      overflow: hidden;
      h3 {
        margin-bottom: 20px;
      }
      .item {
        float: left;
        margin-right: 15px;
        .singerpic {
          img {
            border-radius: 50%;
            cursor: pointer;
          }
          figcaption {
            p {
              height: 20px;
              font-size: 14px;
              line-height: 20px;
              color: #000;
              text-align: center;
              cursor: pointer;
              &:hover {
                color: #24c339;
              }
            }
          }
        }
      }
    }
  }

  .wrap {
    position: relative;
    .slide {
      position: relative;
      width: 100%;
      height: 174px;
      overflow: hidden;
      .slide-item {
        position: absolute;
        width: 300%;
        float: left;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
      }
    }
  }
</style>
