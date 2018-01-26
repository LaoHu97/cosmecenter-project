<template lang="html">
  <div class="table04_box">
    <h5>长按二维码分享</h5>
    <div class="table04_box_qrcode">
      <img :src="srcImg" alt="qrcode">
    </div>
    <div class="table04_box_list">
      <button-tab>
        <button-tab-item selected @on-item-click="consoleIndex(true)">邀请成功</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex(false)">已邀请</button-tab-item>
      </button-tab>
    </div>
    <div class="table04_item"  v-for="item in list">
      <flexbox>
        <flexbox-item :span='4'>
          <div>姓名：<span>{{item.name}}</span></div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <i slot="icon" class="iconfont">&#xe6ed;</i>
            <span>时间：{{gmt_create(item.gmt_create)}}</span>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <infinite-loading @infinite="onInfinite" spinner="waveDots" ref="infiniteLoading">
      <span slot="no-results">
        您还没有邀请过好友 :(
      </span>
      <span slot="no-more">
        没有记录了 :(
      </span>
    </infinite-loading>
  </div>
</template>

<script>
import { queryPkgInviteeByCondition, inviterCode } from '../api.js'
import InfiniteLoading from 'vue-infinite-loading'
import { XHeader, ButtonTab, ButtonTabItem, Flexbox,  FlexboxItem, dateFormat } from 'vux'
export default {
  components: {
    XHeader,
    ButtonTab,
    ButtonTabItem,
    Flexbox,
    FlexboxItem,
    InfiniteLoading
  },
  data() {
    return {
      list:[],
      srcImg:'',
      status:'2'
    }
  },
  created() {
    this.inviterERCode()
  },
  methods: {
    gmt_create(date){
      return dateFormat(date, 'YYYY-MM-DD HH:mm:ss')
    },
    consoleIndex(data){
      this.list=[]
      this.$nextTick(() => {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
      });
      if (data) {
        this.status='2'
      }else {
        this.status='1'
      }
    },
    inviterERCode(){
      let para = {
        mid:JSON.parse(sessionStorage.getItem('mid')),
        memId:JSON.parse(sessionStorage.getItem('memId')),
        entType:'1',
        encrypt_code:'1',
        code:JSON.parse(sessionStorage.getItem('cardCode')),
        openid:JSON.parse(sessionStorage.getItem('openId'))
      }
      this.srcImg = process.env.API_ROOT+'/pay/activity/inviterCode?mid='+para.mid+'&memId='+para.memId+'&entType='+para.entType+'&encrypt_code='+para.encrypt_code+'&code='+para.code+'&openid='+para.openid
    },
    onInfinite($state){
      let para = {
        pagNum: String(this.list.length / 10 + 1),
        mid:JSON.parse(sessionStorage.getItem('mid')),
        card_num:JSON.parse(sessionStorage.getItem('cardNum')),
        memid:JSON.parse(sessionStorage.getItem('memId')),
        numPerPage:'10',
        status:this.status
      }
      queryPkgInviteeByCondition(para).then((res)=>{
        setTimeout(() => {
          if (res.data.pkgInviteeList.length) {
            this.list = this.list.concat(res.data.pkgInviteeList);
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
