<template>
  <div id="app">
    <div class="hacker" v-show="$route.path!=='/'">
      <x-header>{{$route.name}}</x-header>
    </div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <div v-transfer-dom>
      <loading :show="show" text="请稍后"></loading>
      <alert v-model="alertShow" title="提示" @on-hide="onHide">{{alertText}}</alert>
    </div>
  </div>
</template>

<script>
import Bus from './bus.js'
import { Tabbar, TabbarItem, Loading, XHeader, Alert, TransferDomDirective as TransferDom } from 'vux'
export default {
  name: 'app',
  directives: {
    TransferDom
  },
  components: {
    Tabbar,
    TabbarItem,
    Loading,
    XHeader,
    Alert
  },
  data () {
    return {
      show: false,
      alertShow: false,
      alertText: ''
    }
  },
  created () {
    Bus.$on('loadingState', boolean => {
      this.show = boolean
    })
    Bus.$on('alertState', alertStateMap => {
      console.log(alertStateMap)
      this.alertShow = alertStateMap.boolean
      this.alertText = alertStateMap.message
    })
  },
  methods: {
    onHide () {

    }
  }
}
</script>
<style media="screen">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 302321 */
    src: url('//at.alicdn.com/t/font_302321_jtyely7tkzlivn29.eot');
    src: url('//at.alicdn.com/t/font_302321_jtyely7tkzlivn29.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_302321_jtyely7tkzlivn29.woff') format('woff'),
    url('//at.alicdn.com/t/font_302321_jtyely7tkzlivn29.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_302321_jtyely7tkzlivn29.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:28px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  p{
    margin: 0;
  }
  a{
    text-decoration: none;
    color: #999;
  }
  .weui-grid__icon{
    text-align: center;
  }
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }
</style>
