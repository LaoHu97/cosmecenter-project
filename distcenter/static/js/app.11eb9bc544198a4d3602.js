webpackJsonp([7],{"14gb":function(t,e,n){"use strict";var i=n("VCXJ");e.a=new i.a},"4gp0":function(t,e){},"6pD/":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("VCXJ"),a=n("14gb"),s=n("M6xF"),o={mounted:function(){},name:"tabbar",mixins:[s.b],props:{iconClass:String}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-tabbar"},[this._t("default")],2)},staticRenderFns:[]};var u=n("X4nt")(o,r,!1,function(t){n("4gp0")},null,null).exports,l={name:"badge",props:{text:[String,Number]}},c={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-dot":void 0===t.text,"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},staticRenderFns:[]};var d={name:"tabbar-item",components:{Badge:n("X4nt")(l,c,!1,function(t){n("6pD/")},null,null).exports},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[s.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():n("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?n("sup",[n("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),n("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]},p=n("X4nt")(d,h,!1,null,null,null).exports,v=n("YRZa"),f=n("iyxf"),m={name:"alert",components:{XDialog:n("aFyp").a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var _=n("X4nt")(m,w,!1,function(t){n("tNir")},null,null).exports,x=n("Yp6B"),g={name:"app",directives:{TransferDom:n.n(x).a},components:{Tabbar:u,TabbarItem:p,Loading:v.a,XHeader:f.a,Alert:_},data:function(){return{show:!1,alertShow:!1,alertText:""}},created:function(){var t=this;a.a.$on("loadingState",function(e){t.show=e}),a.a.$on("alertState",function(e){console.log(e),t.alertShow=e.boolean,t.alertText=e.message})},methods:{onHide:function(){}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"/"!==t.$route.path,expression:"$route.path!=='/'"}],staticClass:"hacker"},[n("x-header",[t._v(t._s(t.$route.name))])],1),t._v(" "),n("router-view"),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("loading",{attrs:{show:t.show,text:"请稍后"}}),t._v(" "),n("alert",{attrs:{title:"提示"},on:{"on-hide":t.onHide},model:{value:t.alertShow,callback:function(e){t.alertShow=e},expression:"alertShow"}},[t._v(t._s(t.alertText))])],1)],1)},staticRenderFns:[]};var y=n("X4nt")(g,b,!1,function(t){n("PTaP")},null,null).exports,k=n("zO6J");i.a.use(k.a);var C=new k.a({routes:[{path:"/",name:"首页",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("8hXn")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/table01",name:"充值记录",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("o8BR")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/table02",name:"套餐列表",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("LO0g")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/table03",name:"积分记录",component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){var e=[n("uok+")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/table04",name:"分享",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("Sz3M")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}),S=(n("n5Qe"),n("oaaA")),$=n("rO0M"),T=n("MLNV"),O=n("KezN");i.a.use(O.a),i.a.use(T.a),i.a.use($.a),i.a.use(S.a),n("iDdd").attach(document.body),i.a.config.productionTip=!1,new i.a({el:"#app",router:C,template:"<App/>",components:{App:y}})},PTaP:function(t,e){},XIDp:function(t,e){},YRZa:function(t,e,n){"use strict";var i={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]};var s=n("X4nt")(i,a,!1,function(t){n("XIDp")},null,null);e.a=s.exports},aFyp:function(t,e,n){"use strict";var i={mixins:[n("69ss").a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var s=n("X4nt")(i,a,!1,function(t){n("c5ce")},null,null);e.a=s.exports},c5ce:function(t,e){},iyxf:function(t,e,n){"use strict";var i=n("+Up5"),a=n.n(i),s={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return a()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-header"},[n("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[n("transition",{attrs:{name:t.transition}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():n("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[n("transition",{attrs:{name:t.transition}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?n("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),n("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?n("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]};var r=n("X4nt")(s,o,!1,function(t){n("zPlM")},null,null);e.a=r.exports},n5Qe:function(t,e,n){"use strict";n.d(e,"f",function(){return l}),n.d(e,"d",function(){return c}),n.d(e,"b",function(){return d}),n.d(e,"e",function(){return h}),n.d(e,"g",function(){return p}),n.d(e,"a",function(){return v}),n.d(e,"c",function(){return f});var i=n("rVsN"),a=n.n(i),s=n("6sKG"),o=n.n(s),r=n("14gb");o.a.defaults.timeout=5e3,o.a.interceptors.request.use(function(t){return r.a.$emit("loadingState",!0),t},function(t){return a.a.reject(t)}),o.a.interceptors.response.use(function(t){var e={boolean:!0,message:t.data.message};return setTimeout(function(){r.a.$emit("loadingState",!1)},200),200!==t.data.status&&r.a.$emit("alertState",e),t},function(t){return r.a.$emit("loadingState",!1),r.a.$emit("alertState",{boolean:!0,message:"网络错误，请稍后再试"}),a.a.reject(t)});o.a;var u="http://test.weupay.com",l=function(t){return o.a.post(u+"/pay/cashier/queryShopMem",t).then(function(t){return t.data})},c=function(t){return o.a.post(u+"/pay/weixin/activity/queryOnePkgInviterByCondition",t).then(function(t){return t.data})},d=function(t){return o.a.post(u+"/pay/person/queryBounsToPhone",t).then(function(t){return t.data})},h=function(t){return o.a.post(u+"/pay/weixin/activity/queryPkgPurchaseByCondition",t).then(function(t){return t.data})},p=function(t){return o.a.post(u+"/pay/comm/selectStoreListByPhone",t).then(function(t){return t.data})},v=function(t){return o.a.post(u+"/pay/activity/activeRelTime",t).then(function(t){return t.data})},f=function(t){return o.a.post(u+"/pay/weixin/activity/queryIntention",t).then(function(t){return t.data})}},oLTd:function(t,e){},pGEE:function(t,e,n){"use strict";var i={name:"toast",mixins:[n("TdWN").a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var s=n("X4nt")(i,a,!1,function(t){n("oLTd")},null,null);e.a=s.exports},tNir:function(t,e){},zPlM:function(t,e){}},["NHnr"]);