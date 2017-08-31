<template>
  <nav class="nav-bar">
    <div class="btn-group">
      <a href="javascript:;" v-for="(btn, index) in btns" class="btn-default" :class="'btn-'+index">{{btn}}</a>
    </div>
    <div class="login">
      <img src="./default_user_156@2x.png" width="96" height="96">
      <h3>登录QQ音乐</h3>
      <p>听我想听的歌</p>
    </div>
    <ul class="nav-menu">
      <router-link tag="li" v-for="(item, index) in musicMenu" :class="[item.type?'sub-1':'sub-0','sub','sub-'+item.type]" :to="item.link" :key="index">{{item.name}}
      </router-link>
    </ul>
    <ul class="mymusic">
      <li v-for="(item, index) in myMusic" :class="[item.type?'sub-1':'sub-0','sub']" :key="index">{{item.name}}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      btns: {
        'close': 'x',
        'min': '-',
        'max': '+'
      },
      musicMenu: [
        {
          name: '音乐馆',
          type: '',
          link: ''
        },
        {
          name: '精选',
          type: 'choice',
          link: '/choice'
        },
        {
          name: '排行',
          type: 'rank',
          link: '/rank'
        },
        {
          name: '歌单',
          type: 'list',
          link: '/disc-list'
        },
        {
          name: '电台',
          type: 'radio',
          link: '/radio'
        },
        {
          name: 'MV',
          type: 'mv',
          link: '/mv'
        }
      ],
      myMusic: [
        {
          name: '我的音乐',
          type: ''
        },
        {
          name: '我喜欢',
          type: 'favor'
        },
        {
          name: '本地歌曲',
          type: 'local'
        },
        {
          name: '下载歌曲',
          type: 'download'
        },
        {
          name: '播放历史',
          type: 'history'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.nav-bar {
  position: relative;
  width: 240px;
  border-radius: 4px 0 0 4px;
  background: #eeedee;
  .btn-group {
    position: absolute;
    top: 4px;
    left: 8px;
    .btn-close,
    .btn-min,
    .btn-max {
      display: inline-block;
      width: 12px;
      height: 12px;
      font-size: 12px;
      font-weight: 700;
      color: #000;
      line-height: 12px;
      text-align: center;
      border: 1px solid;
      border-radius: 50%;
      margin-right: 4px;
    }
    .btn-close {
      background: #ff544d;
      border-color: #de403b;
    }
    .btn-min {
      background: #ffb82a;
      border-color: #dd9819;
    }
    .btn-max {
      background: #24c339;
      border-color: #15a429;
    }
  }
  .login {
    width: 220px;
    padding-top: 50px;
    padding-bottom: 30px;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
    h3 {
      margin-top: 6px;
    }
    p {
      margin-top: 4px;
      font-size: 14px;
    }
    &:after {
      content: ' ';
      display: block;
      position: absolute;
      width: 200px;
      height: 1px;
      left: 10px;
      margin-top: 30px;
      background: #e5e5e5;
    }
  }
  .nav-menu {
    width: 180px;
    padding: 30px;
    .sub {
      display: block;
      height: 22px;
      margin-bottom: 8px;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .sub-0 {
      font-size: 14px;
      font-weight: normal;
      opacity: 0.5;
    }
    .sub-1 {
      text-indent: 20px;
      line-height: 22px;
      font-size: 16px;
      font-weight: 200;
      border-radius: 4px;
      &:hover,
      &.router-link-active {
        color: #fff;
        background: #2bba71;
      }
    }
  }
  .mymusic {
    width: 180px;
    padding: 0 30px 100px;
    .sub {
      display: block;
      height: 22px;
      margin-bottom: 8px;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .sub-0 {
      font-size: 14px;
      font-weight: normal;
      opacity: 0.5;
    }
    .sub-1 {
      text-indent: 20px;
      line-height: 22px;
      font-size: 16px;
      font-weight: 200;
      border-radius: 4px;
      &:hover,
      &.router-link-active {
        color: #fff;
        background: #2bba71;
      }
    }
  }
}
</style>
