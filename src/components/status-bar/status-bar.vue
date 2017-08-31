<template>
  <div class="status-bar">
    <ul class="btn-bar-left">
      <li><span class="glyphicon glyphicon-chevron-left"></span></li>
      <li><span class="glyphicon glyphicon-chevron-right"></span></li>
      <li><span class="glyphicon glyphicon-repeat"></span></li>
    </ul>
    <label>
      <input type="search" placeholder="搜索">
      <span class="glyphicon glyphicon-search search"></span>
    </label>
    <ul class="btn-bar-right">
      <li><span class="glyphicon glyphicon-cog"></span></li>
      <li><span class="glyphicon glyphicon-resize-small"></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'statusBar'
}
</script>

<style scoped lang="scss">
  .status-bar {
    position: absolute;
    top: 10px;
    left: 250px;
    width: 800px;
    height: 50px;
    border: 1px solid #eee;
    border-left: none;
    border-top-right-radius: 3px;
    .btn-bar-left {
      position: absolute;
      top: 50%;
      margin-top: -10px;
      left: 20px;
      height: 20px;
      line-height: 20px;
      li {
        float: left;
        margin-right: 10px;
        text-align: center;
      }
    }
    label {
      position: absolute;
      top: 50%;
      margin-top: -10px;
      left:100px;
      -webkit-transition: all 0.6s;
      -moz-transition: all 0.6s;
      -ms-transition: all 0.6s;
      -o-transition: all 0.6s;
      transition: all 0.6s;
      input {
        width: 180px;
        height: 18px;
        border: none;
        border-radius: 12px;
        text-align: center;
        background: #e7e7e7;
        outline: none;
      }
      span {
        position: absolute;
        left: 60px;
        color: #666;
        font-size: 14px;
        line-height: 18px;
        font-weight: lighter;
      }
    }
    .btn-bar-right {
      float: right;
      li {
        float: left;
        margin-top: 15px;
        margin-right: 10px;
        height: 20px;
        line-height: 20px;
      }
    }
    /*&:after {*/
      /*display: block;*/
      /*content: '';*/
      /*position: absolute;*/
      /*width: 100%;*/
      /*height: 1px;*/
      /*bottom: 0;*/
      /*background: #eee;*/
    /*}*/
  }
</style>
