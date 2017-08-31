<template>
  <div class="music-small-item">
    <figure>
      <img :src="items.imgurl" width="46" height="46">
      <figcaption>
        <p class="name" v-html="items.dissname"></p>
        <p class="artist" v-html="items.creator.name"></p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    props: {
      items: Object
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped lang="scss">
  .music-small-item {
    float: left;
    /*margin-right: 10px;*/
    /*margin-bottom: 10px;*/
    /*padding-left: 10px;*/
    padding: 6px;
    width: 233px;
    figure {
      float: left;
      height: 46px;
      cursor: pointer;
    }
    figcaption {
      float: right;
      margin-left: 10px;
      padding-top: 5px;
      .name {
        height: 18px;
        width: 170px;
        font-size: 14px;
        line-height: 18px;
        overflow: hidden;
      }
      .artist {
        font-size: 12px;
        line-height: 16px;
        color: #666;
        cursor: pointer;
      }
    }
  }
</style>
