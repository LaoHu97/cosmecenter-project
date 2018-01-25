<template lang="html">
  <div>
    <div class="hacker-news-list">
      <div class="hacker-news-item" v-for="item in list">
        <flexbox>
          <flexbox-item :span='8'>
            <div class="flex-demo">套餐名称：<span>{{item.pkg_name}}</span></div>
            <div class="flex-demo">购买时间：<span>{{reverseNumber(item.gmt_create)}}</span></div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo" style="text-align:right">
              <x-button mini type="primary" @click.native="activationSubmit(item.id)" :disabled="item.pkgStatus!==1">{{item.pkgStatus == 1 ? '激活' : item.pkgStatus == 2 ? '已激活' : '已到期'}}</x-button>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <infinite-loading @infinite="onInfinite" spinner="waveDots">
        <span slot="no-results">
          您还没有购买套餐 :(
        </span>
        <span slot="no-more">
          没有套餐了 :(
        </span>
      </infinite-loading>
      <div v-transfer-dom>
        <popup v-model="popupShow" height="100%">
          <popup-header
          left-text="取消"
          right-text="确定"
          title="请选择门店"
          :show-bottom-border="false"
          @on-click-left="popupShow = false"
          @on-click-right="clickRight"></popup-header>
          <search
          v-model="searchValue"
          position="fixed"
          auto-scroll-to-top top="46px"
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-change="onChange"
          ref="search"></search>
          <group :gutter="searchSubmitGutter">
            <radio v-model="radioValue" :options="groupOptions"></radio>
          </group>
        </popup>
      </div>
    </div>
  </div>
</template>
<script>
import { queryPkgPurchaseByCondition, selectStoreListByPhone, activeRelTime } from '../api.js'
import InfiniteLoading from 'vue-infinite-loading';
import {Divider, Flexbox,  FlexboxItem,  XHeader, XButton, Group, Radio, Search, PopupHeader, Popup, TransferDom, dateFormat } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Divider,
    Flexbox,
    FlexboxItem,
    XHeader,
    InfiniteLoading,
    XButton,
    Radio,
    PopupHeader,
    Popup,
    Group,
    Search
  },
  data() {
    return {
      list:[],
      searchSubmitGutter:0,
      popupShow:false,
      radioValue:'',
      activationId:'',
      groupOptions:[]
    }
  },
  methods: {
    reverseNumber(x){
      return dateFormat(x, 'YYYY-MM-DD HH:mm:ss')
    },
    selectStore(sname){
      let para = {
        mid:JSON.parse(sessionStorage.getItem('mid')),
        numPerPage:'10',
        sname:sname
      }
      selectStoreListByPhone(para).then((res)=>{
        this.groupOptions=res.data.storeList
      })
    },
    activationSubmit(activationId){
      this.popupShow=true
      this.activationId = activationId
      this.selectStore()
    },
    onFocus(){
      this.searchSubmitGutter=44
    },
    onCancel(){
      this.searchSubmitGutter=0
    },
    clickRight(){
      console.log(this.radioValue+'-'+this.activationId);
      let para = {
        mid:JSON.parse(sessionStorage.getItem('mid')),
        sid:String(this.radioValue),
        purchaseId:String(this.activationId),
        cardCode:JSON.parse(sessionStorage.getItem('cardCode')),
        cardNum:JSON.parse(sessionStorage.getItem('cardNum')),
        memId:JSON.parse(sessionStorage.getItem('memId')),
        cardid:JSON.parse(sessionStorage.getItem('card_id')),
        openid:JSON.parse(sessionStorage.getItem('openId')),
      }
      activeRelTime(para).then((res)=>{

      })
    },
    onChange(val){
      this.selectStore(val)
    },
    onInfinite($state){
      let para = {
        pagNum: String(this.list.length / 10 + 1),
        mid:JSON.parse(sessionStorage.getItem('mid')),
        openid:JSON.parse(sessionStorage.getItem('openId')),
        numPerPage:'10'
      }
      queryPkgPurchaseByCondition(para).then((res)=>{
        setTimeout(() => {
          if (res.data.pkgPurchaseList.length) {
            this.list = this.list.concat(res.data.pkgPurchaseList);
            $state.loaded();
            if (this.list.length == res.data.totalCount) {
              $state.complete();
            }
          } else {
            $state.complete();
          }
        },300);
      })
    }
  },
  mounted() {

  }
}
</script>
<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.flex-demo {
  text-align: left;
  color: #000;
  background-clip: padding-box;
  line-height: 30px;
  color: #999;
}
.flex-demo span{
  color: #333;
}
.hacker-news-item{
  border: 1px solid #999;
  background-color: #F9FAFC;
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
  font-size: 14px;
}
</style>
