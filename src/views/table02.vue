<template lang="html">
  <div>
    <div class="hacker-news-list">
      <div class="hacker-news-header">
        <x-header>套餐列表</x-header>
      </div>
      <div class="hacker-news-item">
        <flexbox>
          <flexbox-item :span='8'>
            <div class="flex-demo">套餐名称：<span>A套餐</span></div>
            <div class="flex-demo">购买时间：<span>2018-01-15</span></div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo">
              <x-button mini type="primary">激活</x-button>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <!-- <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="spiral">
        <span slot="no-results">
          暂无消费记录 :(
        </span>
        <span slot="no-more">
          没有记录了 :(
        </span>
      </infinite-loading> -->
    </div>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import {Divider, Flexbox,  FlexboxItem,  XHeader, XButton } from 'vux'

export default {
  components: {
    Divider,
    Flexbox,
    FlexboxItem,
    XHeader,
    InfiniteLoading,
    XButton
  },
  data() {
    return {
      list:[]
    }
  },
  methods: {
    // onInfinite() {
    //   this.$http.post(COURSES+'/person/queryTransRecord', {
    //       pagNum: String(this.list.length / 10 + 1),
    //       mid:JSON.parse(sessionStorage.getItem('mid')),
    //       card_id:JSON.parse(sessionStorage.getItem('card_id')),
    //       openId:JSON.parse(sessionStorage.getItem('openId')),
    //       numPerPage:'10',
    //       type:'W'
    //   }).then((res) => {
    //     setTimeout(() => {
    //       if (res.data.data.accTransList.length) {
    //         this.list = this.list.concat(res.data.data.accTransList);
    //         this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
    //         if (this.list.length == res.data.data.total) {
    //           this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
    //         }
    //       } else {
    //         this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
    //       }
    //     },300);
    //   });
    // },
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
  margin: 5px;
  border-radius: 5px;
  font-size: 14px;
}
</style>
