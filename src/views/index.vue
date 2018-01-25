<template lang="html">
  <div>
    <div class="center_top">
      <div class="card" v-bind:style="{ background: activeColor + ' 0% 0% / 100% 100% no-repeat' }">
        <div class="card_title">
          <img :src="card.logo" alt="">
          <p>{{card.title}}</p>
          <!-- <p style="font-size:14px;">匹克商贸会员卡</p> -->
        </div>
        <div class="card_bottom">
            NO：{{card.cardno}}
        </div>
        <div class="card_code">
          <i class="iconfont">&#xe642;</i>
        </div>
      </div>
    </div>
    <div class="center_cen">
      <card>
        <div slot="content" class="card-demo-flex card-demo-content01">
         <div class="vux-1px-r">
           <span>{{card.balance}}</span>
           <br/>
           等级
         </div>
         <div class="vux-1px-r">
           <span>{{card.bouns}}</span>
           <br/>
           积分
         </div>
         <div>
           <span>￥{{card.dividend}}</span>
           <br/>
           分红
         </div>
        </div>
      </card>
    </div>
    <div class="center_bottom">
      <grid :cols="3">
        <!-- <grid-item label="套餐列表" link="/table02" >
          <i slot="icon" class="iconfont">&#xe6de;</i>
        </grid-item> -->
        <grid-item label="我的套餐" link="/table02" >
          <i slot="icon" class="iconfont">&#xe6e2;</i>
        </grid-item>
        <grid-item label="积分记录" link="/table03" >
          <i slot="icon" class="iconfont">&#xe6a4;</i>
        </grid-item>
        <grid-item label="我的邀请码" link="/table04" >
          <i slot="icon" class="iconfont">&#xe71c;</i>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { queryShopMem, queryOnePkgInviterByCondition } from '../api.js'
import {
  Divider,
  Card,
  Grid,
  GridItem
} from 'vux'
export default {
  components: {
    Card,
    Divider,
    Grid,
    GridItem
  },
  data() {
    return {
      activeColor:'',
      card:{
        title:'',
        logo:'',
        cardno:'',
        balance:'',
        bouns:'',
        dividend:''
      }
    }
  },
  methods: {

  },
  mounted() {
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
        var context = "";
        if (r != null)
             context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    }
    var mid=GetQueryString("mid");
    var card_id=GetQueryString("card_id");
    var openid=GetQueryString("openid");
    var encrypt_code=JSON.parse(sessionStorage.getItem('cardCode'));
    var card_Code='';
    if (encrypt_code==null) {
      encrypt_code=GetQueryString("encrypt_code");
      card_Code=null;
    }else {
      card_Code='1';
    }
    sessionStorage.setItem('card_id', JSON.stringify(card_id));
    sessionStorage.setItem('openId', JSON.stringify(openid));
    sessionStorage.setItem('mid', JSON.stringify(mid));
    var that = this;
    let para = {
      mid: mid,
      cardId: card_id,
      cardCode:encrypt_code,
      cardOpenId:openid,
      entType:'0',
      isInitCode:card_Code
    }
    queryShopMem(para).then((res)=>{
      sessionStorage.setItem('cardNum', JSON.stringify(res.data.cardno));
      sessionStorage.setItem('cardCode', JSON.stringify(res.data.cardCode));
      sessionStorage.setItem('memId', JSON.stringify(res.data.memId));
        if (res.status == 200) {
          that.card.title = res.data.title;
          that.card.logo = res.data.logo;
          that.card.cardno = res.data.cardno;
          that.card.balance = res.data.balance;
          that.card.bouns = res.data.bouns;
          let para={
            mid:res.data.mid,
            openid:res.data.cardOpenId,
            card_num:res.data.cardno,
            card_id:res.data.card_id
          }
          queryOnePkgInviterByCondition(para).then((res)=>{
            this.card.dividend=res.data.dividend
          })
          if (res.data.bac_url) {
            that.activeColor = "url("+res.data.bac_url+")";
          }else {
            switch (res.data.color) {
              case 'Color010':
                that.activeColor = '#63b359';
              break;
              case 'Color020':
                that.activeColor = '#2c9f67';
              break;
              case 'Color030':
                that.activeColor = '#509fc9';
              break;
              case 'Color040':
                that.activeColor = '#5885cf';
              break;
              case 'Color050':
                that.activeColor = '#9062c0';
              break;
              case 'Color060':
                that.activeColor = '#d09a45';
              break;
              case 'Color070':
                that.activeColor = '#e4b138';
              break;
              case 'Color080':
                that.activeColor = '#ee903c';
              break;
              case 'Color081':
                that.activeColor = '#f08500';
              break;
              case 'Color082':
                that.activeColor = '#a9d92d';
              break;
              case 'Color090':
                that.activeColor = '#dd6549';
              break;
              case 'Color100':
                that.activeColor = '#cc463d';
              break;
              case 'Color101':
                that.activeColor = '#cf3e36';
              break;
              case 'Color102':
                that.activeColor = '#5E6671';
              break;
              default:that.activeColor = '#63b359';
            }
          }
        }
    })
  }
}
</script>
<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.center_top {
    height: 225px;
    padding: 25px 15px 15px;
}
.card {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    box-shadow: 0 0 25px #999;
}
.card-demo-flex {
    display: flex;
}
.card-demo-content01 {
    padding: 10px 0;
}
.card-demo-content01 span{
  font-size: 14px;
}
.card-padding {
    padding: 15px;
}
.card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #666;
}
.card-demo-flex span {
    color: #f74c31;
}
.card_title {
    padding: 20px;
    height: 50px;
}
.card_title p {
    line-height: 50px;
    color: #fff;
}
.card_title img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    float: left;
    margin-right: 15px;
}
.card_bottom {
    position: absolute;
    bottom: 22px;
    padding: 0 20px;
    color: #fff;
    font-size: 14px;
    // font-weight: 200;
}
.card_code {
    position: absolute;
    bottom: 22px;
    padding: 0 20px;
    right: 0;
    color: #fff;
}
.center_bottom{
  background-color: #fff;
}
</style>
