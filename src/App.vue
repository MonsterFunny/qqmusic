<template>
  <div id="app">
    <navBar></navBar>
    <statusBar></statusBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navBar from 'components/nav-bar/nav-bar'
  import statusBar from 'components/status-bar/status-bar'
  import choice from 'components/choice/choice'

  export default {
    name: 'app',
    components: {
      navBar,
      statusBar,
      choice
    }
  }
</script>

<style scoped lang="scss">
  #app {
    position: relative;
    padding: 10px;
  }
</style>
