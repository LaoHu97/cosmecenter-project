<template lang="html">
  <div class="table04_box">
    <h5>长按二维码分享</h5>
    <div class="table04_box_qrcode">
      <img src="../assets/images/qr.png" alt="qrcode">
    </div>
    <div class="table04_box_list">
      <button-tab>
        <button-tab-item selected @on-item-click="consoleIndex(true)">邀请成功</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex(false)">已邀请</button-tab-item>
      </button-tab>
    </div>
    <div class="table04_item">
      <flexbox>
        <flexbox-item>
          <div>姓名：<span>张三</span></div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <i slot="icon" class="iconfont">&#xe6ed;</i>
            <span>时间：2018-01-15</span>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { XHeader, ButtonTab, ButtonTabItem, Flexbox,  FlexboxItem } from 'vux'
export default {
  components: {
    XHeader,
    ButtonTab,
    ButtonTabItem,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      list:[]
    }
  },
  methods: {
    consoleIndex(data){
      console.log(data)
    }
  }
}
</script>

<style lang="less">
.table04_box{
  text-align: center;
  .table04_box_qrcode{
    width: 200px;
    height: 200px;
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
  .table04_box_list{
    padding: 15px;
    margin-top: 10px;
  }
  .table04_item{
    font-size: 14px;
    margin: 15px;
    height: 25px;
    line-height: 25px;
    padding: 5px;
    border-bottom: 1px solid #999;
    .iconfont{
      font-size: 14px;
    }
  }
}
</style>
