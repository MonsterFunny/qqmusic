<template>
  <div class="carousel">
    <div class="carousel-inner" role="listbox">
      <div class="item" v-for="(item,index) in sliderList"
           :class="[index === activeIndex ? 'active':'', index === prevIndex? 'item-prev':'', index === nextIndex ? 'item-next':'', index === leftIndex ?'item-ll':'',index===rightIndex ?'item-rr':'']">
        <img :src="item.pic">
      </div>
    </div>
    <a id="" class="btn btn-left" href="javascript:;" @click="_getIndex('prev')"><span
      class="glyphicon glyphicon-chevron-left"></span></a>
    <a class="btn btn-right" href="javascript:;" @click="_getIndex('next')"><span
      class="glyphicon glyphicon-chevron-right"></span></a>
    <ul class="dotlist"
        :style="{ marginLeft: -(sliderList.length * 18 -10)/2 + 'px'}">
      <li v-for="(item,index) in sliderList" class="dot" :class="index === activeIndex ? 'active':''" @click=""></li>
    </ul>
  </div>
</template>

<script>
  // sliderList.length
  const len = 9

  export default {
    name: 'carousel',
    props: {
      sliderList: Array
    },
    data () {
      return {
        activeIndex: 0,
        prevIndex: 1,
        nextIndex: 8,
        leftIndex: 2,
        rightIndex: 7
      }
    },
    methods: {
      _getActiveIndexPrev () {
        if (this.activeIndex === len - 1) {
          this.activeIndex = 0
        } else {
          this.activeIndex += 1
        }
      },
      _getActiveIndexNext () {
        if (this.activeIndex === 0) {
          this.activeIndex = len - 1
        } else {
          this.activeIndex -= 1
        }
      },
      _getPrevIndex () {
        if (this.activeIndex === len - 1) {
          this.prevIndex = 0
        } else {
          this.prevIndex = this.activeIndex + 1
        }
      },
      _getNextIndex () {
        if (this.activeIndex === 0) {
          this.nextIndex = len - 1
        } else {
          this.nextIndex = this.activeIndex - 1
        }
      },
      _getLeftIndex () {
        if (this.prevIndex === len - 1) {
          this.leftIndex = 0
        } else {
          this.leftIndex = this.prevIndex + 1
        }
      },
      _getRightIndex () {
        if (this.nextIndex === 0) {
          this.rightIndex = len - 1
        } else {
          this.rightIndex = this.nextIndex - 1
        }
      },
      _getIndex(tag) {
        if (tag === 'prev') {
          this._getActiveIndexPrev()
        } else {
          this._getActiveIndexNext()
        }
        this._getPrevIndex()
        this._getNextIndex()
        this._getLeftIndex()
        this._getRightIndex()
      }
    }
  }
</script>

<style scoped lang="scss">
  .carousel {
    position: relative;
    margin: 30px 20px 30px 30px;
    width: 735px;
    height: 210px;
    cursor: pointer;
    overflow: hidden;
    .carousel-inner {
      width: 735px;
      height: 210px;
      .item {
        position: absolute;
        top: 21px;
        width: 420px;
        height: 168px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
        &.active {
          width: 525px;
          height: 210px;
          top: 0;
          left: 105px;
          z-index: 3;
        }
        &.item-prev {
          left: 0;
          z-index: 2;
        }
        &.item-next {
          left: 315px;
          z-index: 2;
        }
        &.item-ll {
          left: -105px;
          z-index: 1;
        }
        &.item-rr {
          left: 420px;
          z-index: 1;
        }
      }
    }
    .btn {
      position: absolute;
      display: block;
      top: 50%;
      margin-top: -25px;
      color: #fff;
      background: #000;
      opacity: 0;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      z-index: 3;
      span {
        height: 50px;
        font-size: 36px;
        line-height: 50px;
      }
    }
    &:hover {
      .btn {
        opacity: 0.3;
      }
    }
    .btn-left {
      left: 0;
    }
    .btn-right {
      right: 0;
    }
    .dotlist {
      position: absolute;
      bottom: 10px;
      left: 50%;
      margin-left: -45px;
      z-index: 4;
      .dot {
        float: left;
        margin-right: 10px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid #fff;
        background: #000;
        opacity: 0.2;
        &:last-child {
          margin-right: 0;
        }
        &.active {
          background: #fff;
          opacity: 0.8;
        }
      }
    }
  }
</style>

