(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,5],{356:function(t,e,r){var content=r(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1930a9a0",content,!0,{sourceMap:!1})},357:function(t,e,r){var content=r(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("445c8038",content,!0,{sourceMap:!1})},360:function(t,e,r){"use strict";r(356)},361:function(t,e,r){var o=r(17)(!1);o.push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=o},362:function(t,e,r){"use strict";r(357)},363:function(t,e,r){var o=r(17)(!1);o.push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=o},364:function(t,e,r){"use strict";r.r(e);r(360);var o=r(81),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"VueToNuxtLogo"},[r("div",{staticClass:"Triangle Triangle--two"}),t._v(" "),r("div",{staticClass:"Triangle Triangle--one"}),t._v(" "),r("div",{staticClass:"Triangle Triangle--three"}),t._v(" "),r("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.default=component.exports},365:function(t,e,r){"use strict";r.r(e);r(362);var o=r(81),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"/vuetify-logo.svg"}})}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,r){"use strict";r.r(e);var o=r(364),l=r(365),n={components:{Logo:o.default,VuetifyLogo:l.default},data:function(){return{colors:["green","secondary","yellow darken-4","red lighten-2","orange darken-1"],cycle:!1,slides:["First","Second","Third","Fourth","Fifth"]}}},c=r(81),v=r(112),d=r.n(v),m=r(173),f=r(366),h=r(358),y=r(424),_=r(425),T=r(414),w=r(170),x=r(107),C=r(171),k=r(172),V=r(73),L=r(415),S=r(40),H=r(419),B=r(418),I=r(416),E=r(417),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("div",{staticClass:"text-xs-center"},[r("img",{staticStyle:{"margin-left":"10%","border-radius":"25px",width:"80%",height:"80%"},attrs:{src:"/hotjoon.png",alt:"Vuetify.js"}})]),t._v(" "),r("v-card",{staticClass:"mx-auto",attrs:{elevation:"24","max-width":"444"}},[r("v-system-bar",{attrs:{"lights-out":""}}),t._v(" "),r("v-carousel",{attrs:{continuous:!1,cycle:t.cycle,"show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":"mdi-minus",height:"300"}},t._l(t.slides,(function(e,i){return r("v-carousel-item",{key:i},[r("v-sheet",{attrs:{color:t.colors[i],height:"100%",tile:""}},[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"text-h2"},[t._v("\n                "+t._s(e)+" Slide\n              ")])])],1)],1)})),1),t._v(" "),r("v-list",{attrs:{"two-line":""}},[r("v-list-item",[r("v-list-item-avatar",[r("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Pale"}})]),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Nam Young Kim")]),t._v(" "),r("v-list-item-subtitle",[t._v("Author")])],1),t._v(" "),r("v-list-item-action",[r("v-switch",{attrs:{label:"Cycle Slides",inset:""},model:{value:t.cycle,callback:function(e){t.cycle=e},expression:"cycle"}})],1)],1)],1)],1),t._v(" "),r("v-card",[r("v-card-text",{staticClass:"py-0"},[r("p",[t._v("BIRTH: 1994.04.29 "),r("br"),t._v("\n        PHONE:"),r("a",{attrs:{href:"tel:010-9511-6250"}},[t._v("010 2706 5592")]),r("br"),t._v("\n        EMAIL: huhuhaha1233@naver.com")]),t._v(" "),r("v-timeline",{attrs:{"align-top":"",dense:""}},[r("v-timeline-item",{attrs:{color:"pink",small:""}},[r("v-row",{staticClass:"pt-1"},[r("v-col",{attrs:{cols:"3"}},[r("strong",[t._v("WORK")])]),t._v(" "),r("v-col",[r("strong",[t._v("2020.01 ~ 2021.03")]),t._v(" "),r("div",{staticClass:"text-caption"},[t._v("\n                  THE CHDㅣBM 사원\n                ")])])],1),t._v(" "),r("v-row",{staticClass:"pt-1"},[r("v-col",{attrs:{cols:"3"}},[r("strong")]),t._v(" "),r("v-col",[r("strong",[t._v("2019.06 ~ 2019.12")]),t._v(" "),r("div",{staticClass:"text-caption"},[t._v("\n                  드림인사이트ㅣAE 계약직\n                ")])])],1)],1),t._v(" "),r("v-timeline-item",{attrs:{color:"teal lighten-3",small:""}},[r("v-row",{staticClass:"pt-1"},[r("v-col",{attrs:{cols:"4"}},[r("strong",[t._v("ACTIVITES")])]),t._v(" "),r("v-col",[r("strong",[t._v("2021.07 ~ 2021.08")]),t._v(" "),r("div",{staticClass:"text-caption"},[t._v("\n                  스위츠랩 프로젝트 마케팅 인턴\n                ")])])],1),t._v(" "),r("v-row",{staticClass:"pt-1"},[r("v-col",{attrs:{cols:"3"}},[r("strong")]),t._v(" "),r("v-col",[r("strong",[t._v("2018.07 ~ 2018.08")]),t._v(" "),r("div",{staticClass:"text-caption"},[t._v("\n                  창업 프로젝트 ‘한식의 재발견’\n                ")])])],1),t._v(" "),r("v-row",{staticClass:"pt-1"},[r("v-col",{attrs:{cols:"3"}},[r("strong")]),t._v(" "),r("v-col",[r("strong",[t._v("2017.01 ~ 2017.12")]),t._v(" "),r("div",{staticClass:"text-caption"},[t._v("\n                  충남경제진흥원 ‘청년CEO 500’ 프로젝트\n                ")])])],1)],1),t._v(" "),r("v-timeline-item",{attrs:{color:"teal lighten-3",small:""}},[r("v-row",{staticClass:"pt-1"},[r("v-col",{attrs:{cols:"3"}},[r("strong",[t._v("3-4pm")])]),t._v(" "),r("v-col",[r("strong",[t._v("Design Stand Up")]),t._v(" "),r("div",{staticClass:"text-caption mb-2"},[t._v("\n                  Hangouts\n                ")]),t._v(" "),r("v-avatar",[r("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Blue02&eyeType=Default&eyebrowType=Default&mouthType=Grimace&skinColor=Pale"}}),t._v(" "),r("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Pale"}})]),t._v(" "),r("v-avatar",[r("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Vomit&skinColor=Light"}})])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAvatar:m.a,VCard:f.a,VCardText:h.b,VCarousel:y.a,VCarouselItem:_.a,VCol:T.a,VList:w.a,VListItem:x.a,VListItemAction:C.a,VListItemAvatar:k.a,VListItemContent:V.a,VListItemSubtitle:V.b,VListItemTitle:V.c,VRow:L.a,VSheet:S.a,VSwitch:H.a,VSystemBar:B.a,VTimeline:I.a,VTimelineItem:E.a})}}]);