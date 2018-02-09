<template lang="html">
  <div class="box_view">
    <icon type="safe_warn" is-msg></icon>
    <h4>抱歉，您还不是会员</h4>
    <p>购买套餐即可成为会员，不但可以享受会员优惠，还可以获取丰厚会员奖励。点击购买套餐成为会员！</p>
    <div>
      <x-button type="primary" @click.native="submit">购买套餐</x-button>
    </div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import { XButton, Icon, querystring } from 'vux'
export default {
  components: {
    XButton,
    Icon
  },
  created () {
  },
  methods: {
    submit () {
      // 显示
      this.$vux.loading.show({
        text: '请稍候'
      })
      let mid = querystring.parse().mid
      window.location.href = process.env.API_ROOT+"/pay/activity/choose?mid="+mid+"&sid=49&eid=66&sc=MP"
      // 隐藏
      this.$vux.loading.hide()
    }
  }
}
</script>

<style lang="css">
.box_view{
  text-align: center;
  margin-top: 50px;
}
.box_view div{
  margin-top: 50px;
  padding: 20px;
}
.box_view p{
  font-size: 14px;
  color: #999;
  padding: 0 15px;
  text-align: left
}
</style>
