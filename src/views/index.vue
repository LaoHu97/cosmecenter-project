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
          <span>{{card.level}}</span>
        </div>
      </div>
    </div>
    <div class="center_cen">
      <card>
        <div slot="content" class="card-demo-flex card-demo-content01">
         <div class="vux-1px-r">
           <span>&nbsp;{{card.level}}</span>
           <br/>
           等级
         </div>
         <!-- <div class="vux-1px-r">
           <span>{{card.bouns}}</span>
           <br/>
           积分
         </div> -->
         <div @click="dividendClick">
           <span>￥{{card.pkgInviter.dividend}}</span>
           <br/>
           分红
         </div>
        </div>
      </card>
    </div>
    <div class="center_bottom">
      <grid :cols="2">
        <!-- <grid-item label="套餐列表" link="/table02" >
          <i slot="icon" class="iconfont">&#xe6de;</i>
        </grid-item> -->
        <grid-item label="我的套餐" link="/table02" >
          <i slot="icon" class="iconfont">&#xe6e2;</i>
        </grid-item>
        <!-- <grid-item label="积分记录" link="/table03" >
          <i slot="icon" class="iconfont">&#xe6a4;</i>
        </grid-item> -->
        <grid-item label="我的邀请码" @on-item-click="onItemClick">
          <i slot="icon" class="iconfont">&#xe71c;</i>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { queryShopMem, queryOnePkgInviterByCondition, getOtherMpOpenid } from '../api.js'
import {
  Divider,
  Card,
  Grid,
  GridItem
} from 'vux'
import { log } from 'util';
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
        level:'',
        bouns:'',
        pkgInviter:{
          dividend:''
        }
      }
    }
  },
  methods: {
    dividendClick(){
      // 显示
      this.$vux.alert.show({
        title: '亲爱的LADY联盟会员',
        content: '非常感谢您的加入，我们会全力以赴用所有的真诚服务于您，在您悄悄变美的同时，希望您把这份美丽计划分享给身边的朋友，让更多的人加入我们吧！在您成功分享两位年卡会员的时候，您已经为联盟做出了卓越的贡献，将正式成为LADY联盟的"盟友"，享受盟友特有的店面运营分红，届时分红将以红包形式发放到您个人账户。LADY联盟将成为我们事业的另一个起点!'
      })
    },
    onItemClick(){
      let isOtherMpSendRed = JSON.parse(sessionStorage.getItem('isOtherMpSendRed'))
      if (isOtherMpSendRed) {
        let para = {
          mid:JSON.parse(sessionStorage.getItem('mid')),
          openid:JSON.parse(sessionStorage.getItem('openId')),
          cardNum:JSON.parse(sessionStorage.getItem('cardNum')),
          cardCode:JSON.parse(sessionStorage.getItem('cardCode')),
          memId:JSON.parse(sessionStorage.getItem('memId')),
          ivr:JSON.parse(sessionStorage.getItem('id')),
          inviter_code:JSON.parse(sessionStorage.getItem('inviter_code'))
        }
        window.location.href = process.env.API_ROOT+'/pay/activity/getOtherMpOpenid?mid='+para.mid+'&inviter_code='+para.inviter_code+'&openid='+para.openid+'&cardNum='+para.cardNum+'&cardCode='+para.cardCode+'&memId='+para.memId+'&ivr='+para.ivr
      }else {
        this.$router.push({
          path: '/table05'
        })
      }
    }
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
    var entType=GetQueryString("entType");
    if(entType==0){
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
            that.card.level = res.data.level;
            that.card.bouns = res.data.bouns;
            let para={
              mid:res.data.mid,
              openid:res.data.cardOpenId,
              card_num:res.data.cardno,
              card_id:res.data.card_id
            }
            queryOnePkgInviterByCondition(para).then((res)=>{
              this.card.pkgInviter.dividend=res.data.pkgInviter.dividend
              sessionStorage.setItem('id', JSON.stringify(res.data.pkgInviter.id));
              sessionStorage.setItem('inviter_code', JSON.stringify(res.data.pkgInviter.inviter_code));
              sessionStorage.setItem('isOtherMpSendRed', JSON.stringify(res.data.isOtherMpSendRed));
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
    }else if(entType==1){
      var mid = GetQueryString("mid");
      var code = GetQueryString("code");
      var open_Id=sessionStorage.getItem('openId');
      if (open_Id=="undefined") {
        open_Id="";
      }
      var that = this;
      let para = {
        mid: mid,
        openCode: code,
        entType:'1',
        cardOpenId:JSON.parse(open_Id)
      }
      queryShopMem(para).then((res)=>{
          if (res.status == 200&&!res.data.noMember) {
            sessionStorage.setItem('card_id', JSON.stringify(res.data.card_id));
            sessionStorage.setItem('openId', JSON.stringify(res.data.cardOpenId));
            sessionStorage.setItem('mid', JSON.stringify(res.data.mid));
            sessionStorage.setItem('cardNum', JSON.stringify(res.data.cardno));
            sessionStorage.setItem('cardCode', JSON.stringify(res.data.cardCode));
            sessionStorage.setItem('memId', JSON.stringify(res.data.memId));
            that.card.title = res.data.title;
            that.card.logo = res.data.logo;
            that.card.cardno = res.data.cardno;
            that.card.level = res.data.level;
            that.card.bouns = res.data.bouns;
            let para={
              mid:res.data.mid,
              openid:res.data.cardOpenId,
              card_num:res.data.cardno,
              card_id:res.data.card_id
            }
            queryOnePkgInviterByCondition(para).then((res)=>{
              this.card.pkgInviter.dividend=res.data.pkgInviter.dividend
              sessionStorage.setItem('id', JSON.stringify(res.data.pkgInviter.id));
              sessionStorage.setItem('inviter_code', JSON.stringify(res.data.pkgInviter.inviter_code));
              sessionStorage.setItem('isOtherMpSendRed', JSON.stringify(res.data.isOtherMpSendRed));
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
          }else{
            this.$router.push({
              path: '/table06'
            })
          }
      })
    }
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
