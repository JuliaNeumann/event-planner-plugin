(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,function(t,e,n){"use strict";n(14)},function(t,e,n){"use strict";n(15)},function(t,e,n){"use strict";n(16)},function(t,e,n){"use strict";n(17)},function(t,e,n){"use strict";n(18)},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(28)},function(t,e,n){"use strict";n(29)},function(t,e,n){"use strict";n(30)},function(t,e,n){"use strict";n(31)},function(t,e,n){"use strict";n(32)},function(t,e,n){"use strict";n(33)},function(t,e,n){"use strict";n(34)},function(t,e,n){"use strict";n(35)},function(t,e,n){"use strict";n(37)},function(t,e,n){"use strict";n(38)},function(t,e,n){"use strict";n(39)},function(t,e,n){"use strict";n(40)},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),i={name:"TableHead",props:{text:{type:String,default:""},description:{type:String,default:""},footnotes:{type:Array,default:()=>[]}}},s=(n(48),n(0)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{staticClass:"head"},[t._v("\n    "+t._s(t.text)+"\n    "),t.footnotes?n("sup",t._l(t.footnotes,(function(e){return n("a",{key:e.number,staticClass:"head__footnote",attrs:{href:"#footnote_"+e.number}},[t._v("\n            "+t._s(e.number)+"\n        ")])})),0):t._e(),t._v(" "),t.description?n("small",{staticClass:"head__tooltip"},[t._v("\n        "+t._s(t.description)+"\n    ")]):t._e()])}),[],!1,null,"fb77d4d4",null).exports,r=n(8),l=n(11),c=n(9),d=n.n(c);const u={props:["value"],data:function(){return{inputContent:""}},methods:{saveNewValue:function(){this.$emit("input",this.inputContent)}},created:function(){this.inputContent=this.value,this.focusOnStart&&this.$nextTick(()=>this.$el.focus())}};var h={name:"DateInput",components:{Datepicker:r.a},directives:{ClickOutside:d.a},mixins:[u],data:()=>({datepickerTranslations:l.a,firstClick:!0}),created:function(){this.inputContent=new Date(this.value)},methods:{saveNewValue:function(t){this.firstClick?this.firstClick=!1:(t&&"function"==typeof t.getTime&&(this.inputContent=t.getTime()),u.methods.saveNewValue.call(this))}}},p=Object(s.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("datepicker",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.saveNewValue,expression:"saveNewValue"}],attrs:{language:t.datepickerTranslations,inline:!0},on:{selected:t.saveNewValue},model:{value:t.inputContent,callback:function(e){t.inputContent=e},expression:"inputContent"}})}),[],!1,null,null,null).exports,f=n(5),v=n.n(f),m={name:"DateInput",components:{VueTimepicker:v.a},mixins:[u]},_=Object(s.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:function(t){t.stopPropagation()}}},[n("vue-timepicker",{attrs:{"minute-interval":5,"hide-clear-button":""},on:{close:t.saveNewValue},model:{value:t.inputContent,callback:function(e){t.inputContent=e},expression:"inputContent"}})],1)}),[],!1,null,null,null).exports,w={name:"SingleLineInput",mixins:[u],data:function(){return{focusOnStart:!0}}},g=(n(49),Object(s.a)(w,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.inputContent,expression:"inputContent"}],ref:"inputField",staticClass:"input",attrs:{type:"text"},domProps:{value:t.inputContent},on:{blur:t.saveNewValue,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:t.saveNewValue(e)},input:function(e){e.target.composing||(t.inputContent=e.target.value)}}})}),[],!1,null,"3e5e94fa",null).exports),y={name:"MultiLineInput",mixins:[u],data:function(){return{focusOnStart:!0}}},C=(n(50),Object(s.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputContent,expression:"inputContent"}],ref:"inputField",staticClass:"textarea",domProps:{value:t.inputContent},on:{blur:t.saveNewValue,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:t.saveNewValue(e)},input:function(e){e.target.composing||(t.inputContent=e.target.value)}}})}),[],!1,null,"03ef6fb7",null).exports),b={name:"IconInput",directives:{ClickOutside:d.a},mixins:[u],props:{additional:{type:String,default:"[]"}},data:()=>({firstClick:!0}),computed:{options(){return JSON.parse(this.additional)}},created:function(){this.inputContent=this.value?JSON.parse(this.value):[]},methods:{saveNewValue:function(){this.firstClick?this.firstClick=!1:(this.inputContent=this.inputContent&&this.inputContent.length>0?JSON.stringify(this.inputContent):"[]",u.methods.saveNewValue.call(this))}}},k=(n(51),Object(s.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.saveNewValue,expression:"saveNewValue"}],staticClass:"options"},t._l(t.options,(function(e){return n("div",{key:e.name,staticClass:"option"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputContent,expression:"inputContent"}],attrs:{id:e.icon,type:"checkbox"},domProps:{value:e.icon,checked:Array.isArray(t.inputContent)?t._i(t.inputContent,e.icon)>-1:t.inputContent},on:{change:function(n){var a=t.inputContent,i=n.target,s=!!i.checked;if(Array.isArray(a)){var o=e.icon,r=t._i(a,o);i.checked?r<0&&(t.inputContent=a.concat([o])):r>-1&&(t.inputContent=a.slice(0,r).concat(a.slice(r+1)))}else t.inputContent=s}}}),t._v(" "),n("label",{attrs:{for:e.icon}},[n("i",{staticClass:"fa",class:"fa-"+e.icon}),t._v("\n            "+t._s(e.name)+"\n        ")])])})),0)}),[],!1,null,"5d1280b8",null).exports);const x={date:p,time:_,text:g,longtext:C,icons:k};var O={name:"InputField",components:{DateInput:p,TimeInput:_,SingleLineInput:g,MultiLineInput:C,IconInput:k},props:{value:{type:String,default:""},type:{type:String,default:"text"},additional:{type:String,default:"[]"}},render:function(t){const e=this;return t(x[this.type],{props:{value:this.value,additional:this.additional},on:{input:function(t){e.$emit("input",t),e.$emit("stopEditMode")}},domProps:{value:e.value}})}},S=Object(s.a)(O,void 0,void 0,!1,null,null,null).exports,D={name:"IconList",props:{icons:{type:String,default:""},additional:{type:String,default:"[]"}},computed:{cleanIcons(){return(this.icons?JSON.parse(this.icons):[]).filter(t=>{let e=!1;return JSON.parse(this.additional).forEach(n=>{n.icon===t&&(e=!0)}),e})},descriptions(){const t={};return JSON.parse(this.icons).forEach(e=>{t[e]=!1,JSON.parse(this.additional).forEach(n=>{n.icon===e&&(t[e]=n.name)})}),t}}},H=(n(52),{name:"CellContent",components:{IconList:Object(s.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-list"},t._l(t.cleanIcons,(function(e){return n("i",{key:e,staticClass:"fa fa-fw",class:"fa-"+e,attrs:{title:t.descriptions[e]}})})),0)}),[],!1,null,"4f116bc7",null).exports},props:{head:{type:Object,default:()=>{}},content:{type:String,default:""}}}),T=Object(s.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",["date"===t.head.type?[t._v("\n        "+t._s(t._f("timestampToLocalString")(t.content))+"\n    ")]:"icons"===t.head.type?[n("IconList",{attrs:{additional:t.head.additional,icons:t.content}})]:[t._v("\n        "+t._s(t.content)+"\n    ")]],2)}),[],!1,null,"14cd3206",null).exports,A=n(6),E=n.n(A);const N=(window.eventPlannerApp?window.eventPlannerApp.rest_url:"http://127.0.0.1:8000/wp-json/")+"event-planner/v1/";async function $(){return await B({method:"get",url:N+"all"})}function I(t){if(!t.headers)return[];let e=1;return t.headers.sort((function(t,e){const n=parseInt(t.order_id),a=parseInt(e.order_id);return n<a?-1:n>a?1:0})).map(n=>(n.active=!0,n.footnotes=[],t.header_footnotes&&t.header_footnotes.forEach(t=>{t.header_id===n.id&&(n.footnotes.push({number:e,text:t.text}),e++)}),n))}function j(t){if(!t.events)return[];const e=new Date,n=new Date(e);n.setDate(e.getDate()-2);const a=new Date(e);return a.setDate(e.getDate()+130),t.events.filter(t=>t.fields&&t.fields[1]&&new Date(t.fields[1])>=n&&new Date(t.fields[1])<=a).sort((function(t,e){return new Date(t.fields[1])<new Date(e.fields[1])?-1:new Date(t.fields[1])>new Date(e.fields[1])?1:0}))}function V(t,e){if(!t.events)return[];const n=t.events.filter(t=>t.fields&&t.fields[1]&&new Date(t.fields[1]).getFullYear()===e).sort((function(t,e){return new Date(t.fields[1])<new Date(e.fields[1])?-1:new Date(t.fields[1])>new Date(e.fields[1])?1:0})),a=[[],[],[],[]];return n.forEach(t=>{const e=new Date(t.fields[1]).getMonth();a[Math.floor(e/3)].push(t)}),a}function F(t){"function"!=typeof t.getTime&&(t=new Date(t));const e=("0"+(t.getUTCMonth()+1)).slice(-2),n=("0"+t.getUTCDate()).slice(-2);return`${t.getUTCFullYear()}-${e}-${n}`}async function B(t){try{t.params=t.params||{},t.params.timestamp=Date.now(),t.params.pageId=window.eventPlannerApp.pageId;return(await E()(t)).data}catch(t){return console.error(t),alert("Bei der Verbindung zum Server ist ein Fehler aufgetreten! Stelle sicher, dass du eingeloggt bist und versuche es noch einmal."),!1}}E.a.defaults.headers.common["X-WP-Nonce"]=window.eventPlannerApp?window.eventPlannerApp.nonce:null;var P={name:"TableCell",components:{InputField:S,CellContent:T},props:{head:{type:Object,default:()=>{}},row:{type:Object,default:()=>{}},tag:{type:String,default:"td"}},data:function(){return{editMode:!1,currentHeight:!1,cellContent:""}},computed:{inlineStyles(){return this.currentHeight?{height:"icons"!==this.head.type?this.currentHeight+"px":"auto"}:{}}},created:function(){this.cellContent=this.row.fields[this.head.id]},methods:{startEdit:function(){this.editMode||(this.currentHeight=this.$el.clientHeight,this.editMode=!0)},stopEdit:async function(){this.editMode=!1,this.currentHeight=!1;const t=await async function(t,e,n,a){if(t&&e&&void 0!==n)return"date"===a&&(n=F(n)),await B({method:"post",url:N+"update-event",data:{event_id:t,header_id:e,content:n}})}(this.row.id,this.head.id,this.cellContent,this.head.type);t&&t.error&&alert("Beim Bearbeiten ist ein Fehler aufgetreten: "+t.error),this.$emit("cellUpdate",{rowId:this.row.id,headId:this.head.id,content:this.cellContent})}}},G=(n(71),Object(s.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"cell",style:t.inlineStyles,on:{click:t.startEdit,focus:t.startEdit}},[t.editMode?n("InputField",{attrs:{type:t.head.type,additional:t.head.additional},on:{stopEditMode:t.stopEdit},model:{value:t.cellContent,callback:function(e){t.cellContent=e},expression:"cellContent"}}):n("div",{staticClass:"cell__content",class:"cell__content--"+t.head.type},[n("CellContent",{attrs:{head:t.head,content:t.cellContent}})],1)],1)}),[],!1,null,"259eb402",null).exports),R={name:"ArrowToggle",props:{direction:{type:String,default:"right"}}},L=(n(72),Object(s.a)(R,(function(t,e){return(0,e._c)("i",{staticClass:"arrow",class:"arrow--"+e.props.direction})}),[],!0,null,"983edae8",null).exports),Q={name:"TableGroupHeader",components:{ArrowToggle:L},props:{text:{type:String,default:""},open:{type:Boolean,default:!1},cols:{type:Number,default:2}}},M=(n(73),Object(s.a)(Q,(function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"group-header",class:this.open?"group-header--open":"",attrs:{colspan:this.cols}},[e("ArrowToggle",{attrs:{direction:this.open?"down":"right"}}),this._v(" "),e("strong",[this._v(this._s(this.text))])],1)}),[],!1,null,"47fa85b4",null).exports),U=n(10),J=n.n(U);var z={name:"TableView",components:{TableHead:o,TableCell:G,TableGroupHeader:M},props:{heads:{type:Array,default:()=>[]},groups:{type:Object,default:()=>{}},rows:{type:Array,default:()=>[]},paginate:{type:Boolean,default:!1}},data:()=>({activeGroups:[],page:1,rowsPerPage:2,showActions:window.eventPlannerApp&&window.eventPlannerApp.admin}),computed:{rowsToShow:function(){if(this.paginate){const t=(this.page-1)*this.rowsPerPage,e=t+this.rowsPerPage;return this.rows.slice(t,e)}return this.rows},tableViewClass:function(){return{"table--view-small":this.rowsToShow.length<2}},activeHeads:function(){return this.heads.filter(t=>t.active)}},watch:{activeGroups:function(){localStorage.setItem("activeGroups",JSON.stringify(this.activeGroups))}},mounted:function(){localStorage.getItem("activeGroups")&&(this.activeGroups=JSON.parse(localStorage.getItem("activeGroups"))),this.calcColNum(),window.addEventListener("resize",J()(this.calcColNum,500))},methods:{startGroup:function(t){return this.activeHeads[t].group_id&&(0===t||!this.activeHeads[t-1].group_id)},toggleGroup:function(t){const e=this.activeGroups.indexOf(t);-1!==e?this.activeGroups.splice(e,1):this.activeGroups.push(t)},showRow:function(t){return!t.group_id||this.activeGroups.indexOf(t.group_id)>-1},rowClass:function(t){return{"row--group":t.group_id,"row--highlight":"1"===t.id}},calcColNum:function(){this.rowsPerPage=Math.floor((this.$el.clientWidth-197)/305)},deleteRow:function(t){this.$emit("deleteRow",t)},handleCellUpdate:function(t){this.$emit("cellUpdate",t)}}},q=(n(74),Object(s.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-view",class:t.tableViewClass},[n("table",{staticClass:"table"},[n("tbody",[t._l(t.activeHeads,(function(e,a){return[t.startGroup(a)?n("tr",{key:"group_head_"+a,staticClass:"row"},[n("TableGroupHeader",{attrs:{text:t.groups[e.group_id],open:t.activeGroups.indexOf(e.group_id)>-1,cols:t.paginate?t.rowsPerPage+1:2},nativeOn:{click:function(n){return t.toggleGroup(e.group_id)}}})],1):t._e(),t._v(" "),n("tr",{directives:[{name:"show",rawName:"v-show",value:t.showRow(e),expression:"showRow(head)"}],key:e.id,staticClass:"row",class:t.rowClass(e)},[n("TableHead",{attrs:{text:e.name,description:e.description,footnotes:e.footnotes}}),t._v(" "),t._l(t.rowsToShow,(function(a,i){return n("TableCell",{key:"row_"+a.id+"_"+i,attrs:{head:e,row:a},on:{cellUpdate:t.handleCellUpdate}})}))],2)]})),t._v(" "),t.showActions?n("tr",{staticClass:"row"},[n("TableHead",{attrs:{text:"Aktionen"}}),t._v(" "),t._l(t.rowsToShow,(function(e,a){return n("td",{key:e.id,staticClass:"table__cell"},[n("button",{key:"delete_"+e.id+"_"+a,on:{click:function(n){return t.deleteRow(e.id)}}},[t._v("\n                        Löschen\n                    ")])])}))],2):t._e()],2)]),t._v(" "),t.paginate?n("b-pagination",{attrs:{total:t.rows.length,current:t.page,simple:!1,rounded:!1,"per-page":t.rowsPerPage},on:{"update:current":function(e){t.page=e}}}):t._e()],1)}),[],!1,null,"028fd773",null).exports),W={name:"CardView",components:{TableView:q,ArrowToggle:L},props:{row:{type:Object,default:()=>{}},heads:{type:Array,default:()=>[]},groups:{type:Object,default:()=>{}},index:{type:Number,default:0}},data(){return{show:0===this.index}},methods:{toggleShow:function(){this.show=!this.show},deleteRow:function(t){this.$emit("deleteRow",t)},handleCellUpdate:function(t){this.$emit("cellUpdate",t)}}},Y=(n(75),Object(s.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"card"},[n("h2",{staticClass:"card__title",on:{click:t.toggleShow}},[n("ArrowToggle",{staticClass:"arrow--big",attrs:{direction:t.show?"down":"right"}}),t._v("\n        "+t._s(t._f("timestampToLocalString")(t.row.fields[1]))+"\n    ")],1),t._v(" "),n("TableView",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{paginate:!1,rows:[t.row],heads:t.heads.slice(1),groups:t.groups},on:{deleteRow:t.deleteRow,cellUpdate:t.handleCellUpdate}})],1)}),[],!1,null,"5d9684a0",null).exports),X={name:"FootnoteList",props:{heads:{type:Array,default:()=>[]}},computed:{footnotes:function(){let t=[];return this.heads.forEach(e=>{e.footnotes.forEach(e=>{t.push(e)})}),t}}},Z=(n(76),Object(s.a)(X,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.footnotes.length>0?n("div",{staticClass:"footnotes"},[n("h3",[t._v("Anmerkungen:")]),t._v(" "),n("ol",{staticClass:"footnote__list"},t._l(t.footnotes,(function(e){return n("li",{key:e.number,staticClass:"footnote__item",attrs:{id:"footnote_"+e.number}},[n("sup",[t._v("\n                "+t._s(e.number)+"\n            ")]),t._v("\n            "+t._s(e.text)+"\n        ")])})),0)]):t._e()}),[],!1,null,"25f278d8",null).exports),K={name:"AddButton",components:{Datepicker:r.a,VueTimepicker:v.a},data:function(){return{datepickerTranslations:l.a,showOverlay:!1,date:"",time:"",lastDate:new Date}},computed:{formatDate(){if(this.date){return new Date(this.date).toLocaleDateString()}return""}},methods:{addDate(){this.$emit("addDate",{date:this.date,time:this.time}),this.lastDate=this.date,this.date="",this.time=""},addDateAndClose(){this.addDate(),this.date="",this.time="",this.showOverlay=!1}}},tt=(n(77),Object(s.a)(K,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:function(e){t.showOverlay=!0}}},[t._v("\n        + Gottesdienst hinzufügen\n    ")]),t._v(" "),n("b-modal",{attrs:{active:t.showOverlay},on:{"update:active":function(e){t.showOverlay=e}}},[n("div",{staticClass:"add"},[t._v("\n            Bitte Datum auswählen:\n            "),n("datepicker",{staticClass:"add__datepicker",attrs:{language:t.datepickerTranslations,inline:!0,"open-date":t.lastDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),n("div",{staticClass:"add__date"},[t._v("\n                "+t._s(t.formatDate)+"\n            ")]),t._v("\n            Bitte Uhrzeit auswählen:\n            "),n("br"),t._v(" "),n("vue-timepicker",{attrs:{"minute-interval":5,"hide-clear-button":""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),t._v(" "),n("button",{staticClass:"add__button",attrs:{disabled:!t.date&&"disabled"},on:{click:t.addDate}},[t._v("\n                Hinzufügen\n            ")]),t._v(" "),n("button",{staticClass:"add__button",attrs:{disabled:!t.date&&"disabled"},on:{click:t.addDateAndClose}},[t._v("\n                Hinzufügen & schließen\n            ")])],1)])],1)}),[],!1,null,"9949f040",null).exports),et={name:"RowFilters",components:{ArrowToggle:L},props:{heads:{type:Array,required:!0},value:{type:Array,required:!0}},data:()=>({show:!1,actives:[]}),watch:{actives:function(){this.$emit("input",this.actives)},value:function(){this.actives=this.value}},mounted(){this.actives=this.value}},nt=(n(78),Object(s.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filters"},[n("div",{staticClass:"filters__title",on:{click:function(e){t.show=!t.show}}},[n("ArrowToggle",{attrs:{direction:t.show?"down":"right"}}),t._v(" "),n("strong",[t._v("Filter")])],1),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"filters__list"},t._l(t.heads,(function(e,a){return n("li",{key:a,staticClass:"filters__item"},[a>0?n("input",{directives:[{name:"model",rawName:"v-model",value:t.actives[a],expression:"actives[index]"}],attrs:{id:"filter_"+a,type:"checkbox",name:"filter"},domProps:{checked:Array.isArray(t.actives[a])?t._i(t.actives[a],null)>-1:t.actives[a]},on:{change:function(e){var n=t.actives[a],i=e.target,s=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&t.$set(t.actives,a,n.concat([null])):o>-1&&t.$set(t.actives,a,n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.actives,a,s)}}}):t._e(),t._v(" "),a>0?n("label",{attrs:{for:"filter_"+a}},[t._v("\n                "+t._s(e.name)+"\n            ")]):t._e()])})),0)])}),[],!1,null,"713feee0",null).exports);const at={data:()=>({mobile:!0}),async mounted(){this.setMobile(),window.addEventListener("resize",J()(this.setMobile,500))},methods:{setMobile:function(){void 0!==this.$el.clientWidth&&(this.mobile=this.$el.clientWidth<825)}}};var it={name:"EditTable",components:{TableView:q,CardView:Y,AddButton:tt,RowFilters:nt,FootnoteList:Z},mixins:[at],data:()=>({heads:[],groups:{},rows:[],activeHeads:[],loaded:!1}),computed:{getActiveHeads:function(){return this.heads.filter(t=>t.active)}},watch:{activeHeads:function(){localStorage.setItem("activeHeads",JSON.stringify(this.activeHeads)),this.heads.forEach((t,e)=>{t.active=this.activeHeads[e]})}},async mounted(){const t=await $();if(!1!==t){if(this.heads=I(t),this.groups=function(t){const e={};return t.header_groups?(t.header_groups.forEach(t=>{e[t.id]=t.name}),e):e}(t),this.rows=j(t),localStorage.getItem("activeHeads")){const t=JSON.parse(localStorage.getItem("activeHeads"));t.length===this.heads.length&&(this.activeHeads=t)}this.activeHeads.length!==this.heads.length&&(this.activeHeads=this.heads.map(()=>!0)),this.loaded=!0}},methods:{addRow:async function(t){const e=await async function(t){if(t){const e=F(t.date);return await B({method:"post",url:N+"add-event",data:{date:e,time:t.time}})}}(t);if(e&&e.success){const t=await $();return this.rows=await j(t),void(this.loaded=!0)}e&&e.error?alert("Beim Hinzufügen ist ein Fehler aufgetreten: "+e.error):alert("Beim Hinzufügen ist ein unbekannter Fehler aufgetreten")},deleteRow:async function(t){if(window.confirm("Diese Veranstaltung und alle ihre Daten werden endgültig gelöscht. Dies kann nicht rueckgängig gemacht werden. Bist du sicher?")){const e=await async function(t){if(t)return await B({method:"delete",url:N+"delete-event",data:{event_id:t}})}(t);if(e&&e.success){const t=await $();return void(this.rows=await j(t))}if(e&&e.error)return void alert("Beim Löschen ist ein Fehler aufgetreten: "+e.error);alert("Beim Löschen ist ein unbekannter Fehler aufgetreten")}},handleCellUpdate:function(t){let e;for(let n=0;n<this.rows.length;n++)if(this.rows[n].id===t.rowId){e=this.rows[n];break}e.fields[t.headId]=t.content}}},st=Object(s.a)(it,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("RowFilters",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],attrs:{heads:t.heads},model:{value:t.activeHeads,callback:function(e){t.activeHeads=e},expression:"activeHeads"}}),t._v(" "),t.loaded&&t.rows.length<1?n("div",[n("em",[t._v("Es gibt aktuell keine Veranstaltungen.")])]):t.mobile&&t.loaded?n("div",t._l(t.rows,(function(e,a){return n("CardView",{key:a,attrs:{row:e,heads:t.heads,groups:t.groups,index:a},on:{deleteRow:t.deleteRow,cellUpdate:t.handleCellUpdate}})})),1):t.loaded?n("TableView",{attrs:{paginate:!0,heads:t.heads,rows:t.rows,groups:t.groups},on:{deleteRow:t.deleteRow,cellUpdate:t.handleCellUpdate}}):t._e(),t._v(" "),t.loaded?n("AddButton",{on:{addDate:t.addRow}}):t._e(),t._v(" "),n("FootnoteList",{attrs:{heads:t.getActiveHeads}})],1)}),[],!1,null,null,null).exports,ot=(n(36),{name:"App",components:{EditTable:st}}),rt=(n(79),Object(s.a)(ot,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"epp_app"}},[e("EditTable")],1)}),[],!1,null,null,null).exports),lt={name:"EditButton",components:{TableCell:G},props:{row:{type:Object,default:()=>{}},heads:{type:Array,default:()=>[]}},data:function(){return{showOverlay:!1}},methods:{handleClose(){this.$emit("updated")},saveAndClose(){this.$refs.intro.click(),this.showOverlay=!1,this.handleClose()}}},ct=(n(80),{name:"StaticTable",components:{CellContent:T,EditButton:Object(s.a)(lt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:function(e){t.showOverlay=!0}}},[t._v("\n        Bearbeiten\n    ")]),t._v(" "),n("b-modal",{attrs:{active:t.showOverlay},on:{"update:active":function(e){t.showOverlay=e},close:t.handleClose}},[n("div",{staticClass:"edit"},[n("div",{ref:"intro",staticClass:"edit__intro"},[t._v("\n                Zum Bearbeiten auf die Felder klicken.\n            ")]),t._v(" "),t._l(t.heads,(function(e){return n("div",{key:e.id},[n("strong",[t._v(t._s(e.name)+":")]),n("br"),t._v(" "),n("TableCell",{staticClass:"edit__cell",attrs:{head:e,row:t.row,tag:"div"}})],1)})),t._v(" "),n("div",{staticClass:"edit__button-wrapper"},[n("button",{staticClass:"edit__button",on:{click:t.saveAndClose}},[t._v("\n                    Speichern & Schließen\n                ")])])],2)])],1)}),[],!1,null,"49efb666",null).exports,TableGroupHeader:M,RowFilters:nt},mixins:[at],data:()=>({heads:[],activeHeads:[],configStaticFields:[],yearData:[],mobile:!0,activeQuarters:[],years:[(new Date).getFullYear()],loaded:!1}),computed:{getActiveHeads:function(){return this.heads.filter(t=>t.active)}},watch:{activeHeads:function(){localStorage.setItem("activeHeadsStatic",JSON.stringify(this.activeHeads)),this.heads.forEach((t,e)=>{t.active=this.activeHeads[e]})}},async mounted(){const t=document.getElementById("epp_app_static_wrapper");t&&(this.years=t.dataset.years.split(",").map(t=>parseInt(t))),this.activeQuarters.push((new Date).getFullYear()+"_"+Math.floor((new Date).getMonth()/3)),await this.setData()},methods:{async setData(){const t=await $();for(this.configStaticFields=function(t){const e={};return t.config?(t.config.forEach(t=>{if(t.data)try{e[t.name]=JSON.parse(t.data)}catch(n){e[t.name]=t.data}}),e):e}(t).static_fields,this.heads=I(t);this.yearData.length;)this.yearData.pop();if(this.years.forEach(e=>{this.yearData.push({year:e,rowsByQuarter:V(t,e)})}),localStorage.getItem("activeHeadsStatic")){const t=JSON.parse(localStorage.getItem("activeHeadsStatic"));t.length===this.heads.length&&(this.activeHeads=t)}this.activeHeads.length!==this.heads.length&&(this.activeHeads=this.heads.map(t=>this.configStaticFields.indexOf(parseInt(t.id))>-1)),this.loaded=!0},showQuarter(t){return this.activeQuarters.indexOf(t)>-1},toggleQuarter(t){const e=this.activeQuarters.indexOf(t);-1!==e?this.activeQuarters.splice(e,1):this.activeQuarters.push(t)}}}),dt=(n(81),{name:"App",components:{StaticTable:Object(s.a)(ct,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("RowFilters",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],attrs:{heads:t.heads},model:{value:t.activeHeads,callback:function(e){t.activeHeads=e},expression:"activeHeads"}}),t._v(" "),t._l(t.yearData,(function(e){return[n("h2",{key:"header_"+e.year,staticClass:"header"},[t._v("\n            "+t._s(e.year)+"\n        ")]),t._v(" "),t.getActiveHeads.length>0?n("table",{key:"table_"+e.year,staticClass:"table"},[n("tbody",[t.mobile?[n("tr",[n("th",{staticClass:"cell"},[t._v("\n                            "+t._s(t.heads[0].name)+"\n                        ")]),t._v(" "),n("th",{staticClass:"cell"},[t._v("\n                            Information\n                        ")])]),t._v(" "),t._l(e.rowsByQuarter,(function(a,i){return[n("tr",{key:"quarter_"+i},[n("TableGroupHeader",{attrs:{text:"Quartal "+(i+1),cols:2,open:t.showQuarter(e.year+"_"+i)},nativeOn:{click:function(n){return t.toggleQuarter(e.year+"_"+i)}}})],1),t._v(" "),t.showQuarter(e.year+"_"+i)?t._l(a,(function(e){return n("tr",{key:e.fields[t.heads[0].id]},[n("td",{staticClass:"cell cell--date"},[n("CellContent",{attrs:{head:t.heads[0],content:e.fields[t.heads[0].id]}}),t._v(" "),n("EditButton",{attrs:{heads:t.getActiveHeads.slice(1),row:e},on:{updated:t.setData}})],1),t._v(" "),n("td",{staticClass:"cell"},[n("ul",{staticClass:"list"},t._l(t.getActiveHeads.slice(1),(function(a){return n("li",{key:a.id},[n("strong",[t._v(" "+t._s(a.name)+": ")]),t._v(" "),n("CellContent",{attrs:{head:a,content:e.fields[a.id]}})],1)})),0)])])})):t._e()]}))]:[n("tr",t._l(t.getActiveHeads,(function(e){return n("th",{key:e.id,staticClass:"cell cell--head"},[t._v("\n                            "+t._s(e.name)+"\n                        ")])})),0),t._v(" "),t._l(e.rowsByQuarter,(function(a,i){return[n("tr",{key:"quarter_"+i},[n("TableGroupHeader",{attrs:{text:"Quartal "+(i+1),cols:t.getActiveHeads.length,open:t.showQuarter(e.year+"_"+i)},nativeOn:{click:function(n){return t.toggleQuarter(e.year+"_"+i)}}})],1),t._v(" "),t.showQuarter(e.year+"_"+i)?t._l(a,(function(e){return n("tr",{key:e.fields[t.heads[0].id]},t._l(t.getActiveHeads,(function(a,i){return n("td",{key:a.id,staticClass:"cell",class:0===i?"cell--date":""},[n("CellContent",{attrs:{head:a,content:e.fields[a.id]}}),t._v(" "),0===i?n("EditButton",{attrs:{heads:t.getActiveHeads.slice(1),row:e},on:{updated:t.setData}}):t._e()],1)})),0)})):t._e()]}))]],2)]):t._e()]}))],2)}),[],!1,null,"8aaef89a",null).exports}}),ut=(n(82),Object(s.a)(dt,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"epp_app_static"}},[e("StaticTable")],1)}),[],!1,null,null,null).exports),ht=n(47);a.a.config.productionTip=!1,a.a.filter("timestampToLocalString",(function(t){return t?new Date(t).toLocaleDateString():""})),a.a.use(ht.a,{defaultIconPack:"fa"}),document.getElementById("epp_app")&&new a.a(rt).$mount("#epp_app"),document.getElementById("epp_app_static")&&new a.a(ut).$mount("#epp_app_static")}],[[101,0,1]]]);