<template>
  <div class="v-popover">
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .v-popover {
    position: absolute;
    width: 600px;
    padding: 10px;
    margin-top: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    box-shadow: 0 1px 6px rgba(99, 99, 99, .2);
    background: #fff;
    z-index: 999;
    &:before {
      content: '';
      position: absolute;
      top: -8px;
      left: 23.5px;
      margin-left: -4px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 8px solid #d9d9d9;
    }
    &:after {
      content: '';
      position: absolute;
      top: -12px;
      left: 23.5px;
      margin-left: -4px;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-bottom-color: #fff;
    }
  }
</style>
