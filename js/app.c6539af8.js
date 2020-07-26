(function(e){function t(t){for(var n,i,a=t[0],l=t[1],c=t[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,a=1;a<o.length;a++){var l=o[a];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"079d":function(e,t,o){"use strict";var n=o("820d"),s=o.n(n);s.a},"230e":function(e,t,o){"use strict";var n=o("2315"),s=o.n(n);s.a},2315:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=(o("fa6d"),o("5903"),o("5c96")),r=o.n(s),i=(o("0fae"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",[e._v("Awtrix Simulator")]),o("div",{staticClass:"debug-panel"},[o("div",{staticClass:"debug-item"},[o("label",[e._v("SELECT")]),o("span",[e._v(e._s(e.selectAreaText))])]),o("div",{staticClass:"debug-item"},[o("label",[e._v("FCOLOR")]),o("span",[e._v(e._s(e.bgColorText))])])]),o("ToolsPanel",{attrs:{tools:e.tools,active:e.currentMode},on:{click:e.setCurrentMode,bgColorChange:e.handleBgColorChange}}),o("div",{staticClass:"led-wrapper"},[o("LEDMatrix",{ref:"matrix",attrs:{size:e.size,selectMode:e.selectMode},on:{select:e.handleSelect,drag:e.handleDrag}})],1)],1)}),a=[],l=(o("99af"),o("07ac"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tools-panel"},[o("div",{staticClass:"tools-group"},e._l(e.tools,(function(t){return o("div",{key:t,staticClass:"tools-item",class:{active:e.active===t},on:{click:function(o){return o.stopPropagation(),e.$emit("click",t)}}},[o("i",{staticClass:"iconfont",class:"icon-"+t})])})),0),o("div",{staticClass:"tools-group"},[o("div",{staticClass:"tools-item"},[o("el-color-picker",{attrs:{predefine:e.presetColor,size:"mini"},model:{value:e.bgColor,callback:function(t){e.bgColor=t},expression:"bgColor"}})],1)])])}),c=[],u={props:{tools:{type:Array,default:function(){return["select"]}},active:{type:String,required:!0}},data:function(){return{bgColor:"#00BCD4",presetColor:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722"]}},watch:{bgColor:{handler:function(e){e?this.$emit("bgColorChange",this.bgColor):(this.bgColor="#444444",this.$emit("bgColorChange",null))},immediate:!0}}},d=u,f=(o("230e"),o("2877")),h=Object(f["a"])(d,l,c,!1,null,null,null),m=h.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"led-matrix"},e._l(e.size[1],(function(t,n){return o("div",{key:n,staticClass:"led-row"},e._l(e.size[0],(function(t,s){return o("LEDBlock",{key:s,attrs:{color:e._f("filterColor")(e.getColor(s,n)),active:e.isInsideSelectArea(s,n)},on:{mousedown:function(t){return e.handleLEDMouseDown(s,n)},mouseover:function(t){return e.handleLEDMouseOver(s,n)}}})})),1)})),0)},b=[],v=(o("cb29"),o("a9e3"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"led-block",class:{active:e.active},style:e.style,on:{mousedown:function(t){return t.stopPropagation(),e.$emit("mousedown")},mouseover:function(t){return t.stopPropagation(),e.$emit("mouseover")}}})}),g=[],C={name:"LEDBlock",props:{size:{type:Number,default:16},margin:{type:Number,default:1},color:{type:String,default:"#444"},active:{type:Boolean,default:!1}},computed:{style:function(){return{width:this.size+"px",height:this.size+"px",margin:this.margin+"px",background:this.color}}}},A=C,y=(o("d25d"),Object(f["a"])(A,v,g,!1,null,"1b952cd1",null)),x=y.exports,w={name:"LEDMatrix",components:{LEDBlock:x},filters:{filterColor:function(e){return e||"#444"}},props:{size:{type:Array,default:function(){return[32,8]}},selectMode:{type:Number,default:2}},data:function(){var e=this.size[0]*this.size[1],t=Array(e).fill(null);return{mouseDown:!1,mouseInfo:{down:!1,startX:-1,startY:-1,endX:-1,endY:-1},selectArea:{enable:!1,startPos:[-1,-1],endPos:[-1,-1]},colorData:t}},computed:{maxWidth:function(){return this.size[0]},maxHeight:function(){return this.size[1]}},created:function(){var e=this;document.addEventListener("mousedown",(function(){return e.mouseDown=!0})),document.addEventListener("mouseup",(function(){return e.mouseDown=!1}))},methods:{handleLEDMouseDown:function(e,t){var o=this;if(!this.selectMode)return this.mouseDown=!0,void this.$emit("drag",e,t);this.mouseInfo.down=!0,this.mouseInfo.startX=e,this.mouseInfo.startY=t,this.mouseInfo.endX=e,this.mouseInfo.endY=t,this.calcSelectArea();var n=function(){JSON.parse(JSON.stringify(o.selectArea));o.$emit("select",o.selectArea)},s=function e(){o.mouseInfo.down=!1,o.calcSelectArea(),document.removeEventListener("mouseup",e),n()},r=function(){o.selectArea.enable=!1,document.removeEventListener("mouseup",s)};document.addEventListener("mouseup",s),document.addEventListener("mousedown",r)},handleLEDMouseOver:function(e,t){2===this.selectMode?this.mouseInfo.down&&(this.mouseInfo.endX=e,this.mouseInfo.endY=t,this.calcSelectArea()):1===this.selectMode?this.mouseInfo.down&&(this.mouseInfo.startX=e,this.mouseInfo.startY=t,this.mouseInfo.endX=e,this.mouseInfo.endY=t,this.calcSelectArea()):this.mouseDown&&this.$emit("drag",e,t)},calcSelectArea:function(){~this.mouseInfo.startX||~this.mouseInfo.startY||~this.mouseInfo.endX||~this.mouseInfo.endY?(this.selectArea.startPos=[Math.min(this.mouseInfo.startX,this.mouseInfo.endX),Math.min(this.mouseInfo.startY,this.mouseInfo.endY)],this.selectArea.endPos=[Math.max(this.mouseInfo.startX,this.mouseInfo.endX),Math.max(this.mouseInfo.startY,this.mouseInfo.endY)],this.selectArea.enable=!0):this.selectArea.enable=!1},isInsideSelectArea:function(e,t){return this.selectArea.enable&&e>=this.selectArea.startPos[0]&&e<=this.selectArea.endPos[0]&&t>=this.selectArea.startPos[1]&&t<=this.selectArea.endPos[1]},getColor:function(e,t){return this.colorData[t*this.size[0]+e]},setColor:function(e,t,o){this.$set(this.colorData,t*this.size[0]+e,o)}}},E=w,M=(o("079d"),Object(f["a"])(E,p,b,!1,null,"0293b62e",null)),S=M.exports,I=o("3835"),D=o("d4ec"),P=o("bee2"),O={SELECT:"select",DRAW:"brush",ASSETS:"tpl"},_=function(){function e(t){Object(D["a"])(this,e),this.matrixElm=t}return Object(P["a"])(e,[{key:"handleSelect",value:function(e,t){}},{key:"handleDrag",value:function(e,t,o){if(e===O.DRAW){var n=Object(I["a"])(t,2),s=n[0],r=n[1];this.matrixElm.setColor(s,r,o)}}}]),e}(),L=_,k={name:"App",components:{ToolsPanel:m,LEDMatrix:S},data:function(){return{size:[32,8],tools:Object.values(O),currentMode:O.SELECT,selectMode:2,selectArea:{enable:!1,startPos:[0,0],endPos:[0,0]},bgColor:"#444444",toolbox:null}},computed:{selectAreaText:function(){if(!0===this.selectArea.enable){var e=this.selectArea.startPos,t=this.selectArea.endPos;return"[".concat(e[0],",").concat(e[1],"] [").concat(t[0],",").concat(t[1],"]")}return"[N,N] [N,N]"},bgColorText:function(){return this.bgColor?this.bgColor.toUpperCase():"NULL"}},mounted:function(){this.toolbox=new L(this.$refs.matrix),this.setCurrentMode(O.SELECT)},methods:{setCurrentMode:function(e){this.currentMode=e,e===O.SELECT?this.selectMode=2:e===O.DRAW?this.selectMode=0:e===O.ASSETS&&(this.selectMode=1)},handleSelect:function(e){this.selectArea.enable=e.enable,this.selectArea.startPos=e.startPos,this.selectArea.endPos=e.endPos,this.toolbox.handleSelect(this.currentMode,this.selectArea)},handleDrag:function(e,t){this.toolbox.handleDrag(this.currentMode,[e,t],this.bgColorText)},handleBgColorChange:function(e){this.bgColor=e}}},j=k,z=(o("5c0b"),Object(f["a"])(j,i,a,!1,null,null,null)),T=z.exports;n["default"].use(r.a,{size:"small"}),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(T)}}).$mount("#app")},5903:function(e,t,o){},"5c0b":function(e,t,o){"use strict";var n=o("9c0c"),s=o.n(n);s.a},"820d":function(e,t,o){},"9c0c":function(e,t,o){},a538:function(e,t,o){},d25d:function(e,t,o){"use strict";var n=o("a538"),s=o.n(n);s.a}});
//# sourceMappingURL=app.c6539af8.js.map