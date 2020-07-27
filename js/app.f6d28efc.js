(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},2125:function(e,t,o){},"230e":function(e,t,o){"use strict";var n=o("2315"),s=o.n(n);s.a},2315:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=(o("fa6d"),o("5903"),o("5c96")),r=o.n(s),a=(o("0fae"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",[e._v("Awtrix Simulator")]),o("div",{staticClass:"debug-panel"},[o("div",{staticClass:"debug-item"},[o("label",[e._v("SELECT")]),o("span",[e._v(e._s(e.selectAreaText))])]),o("div",{staticClass:"debug-item"},[o("label",[e._v("FCOLOR")]),o("span",[e._v(e._s(e.bgColorText))])])]),o("ToolsPanel",{attrs:{tools:e.tools,active:e.currentMode},on:{click:e.setCurrentMode,bgColorChange:e.handleBgColorChange}}),o("div",{staticClass:"led-wrapper"},[o("LEDMatrix",{ref:"matrix",attrs:{size:e.size,selectMode:e.selectMode},on:{select:e.handleSelect,drag:e.handleDrag}})],1)],1)}),i=[],c=(o("99af"),o("07ac"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tools-panel"},[o("div",{staticClass:"tools-group"},e._l(e.tools,(function(t){return o("div",{key:t,staticClass:"tools-item",class:{active:e.active===t},on:{click:function(o){return o.stopPropagation(),e.$emit("click",t)},mousedown:function(e){e.stopPropagation()}}},[o("i",{staticClass:"iconfont",class:"icon-"+t})])})),0),o("div",{staticClass:"tools-group"},[o("div",{staticClass:"tools-item",on:{mousedown:function(e){e.stopPropagation()},click:function(e){e.stopPropagation()}}},[o("el-color-picker",{attrs:{predefine:e.presetColor,size:"mini"},model:{value:e.bgColor,callback:function(t){e.bgColor=t},expression:"bgColor"}})],1)]),o("div",{staticClass:"tools-group"},[o("div",{staticClass:"tools-item",on:{mousedown:function(e){e.stopPropagation()},click:function(e){e.stopPropagation()}}},[o("i",{staticClass:"iconfont icon-download"})]),o("div",{staticClass:"tools-item",on:{mousedown:function(e){e.stopPropagation()},click:function(e){e.stopPropagation()}}},[o("i",{staticClass:"iconfont icon-upload"})])])])}),l=[],u=(o("4160"),o("159b"),{props:{tools:{type:Array,default:function(){return["select"]}},active:{type:String,required:!0}},data:function(){return{bgColor:"#00BCD4",presetColor:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722"]}},watch:{bgColor:{handler:function(e){e?this.$emit("bgColorChange",this.bgColor):(this.bgColor="#444444",this.$emit("bgColorChange",null))},immediate:!0}},mounted:function(){var e=document.getElementsByClassName("el-color-dropdown");e.forEach((function(e){e.onmousedown=function(e){return e.stopPropagation()}}))}}),d=u,f=(o("230e"),o("2877")),h=Object(f["a"])(d,c,l,!1,null,null,null),m=h.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"led-matrix"},e._l(e.size[1],(function(t,n){return o("div",{key:n,staticClass:"led-row"},e._l(e.size[0],(function(t,s){return o("LEDBlock",{key:s,attrs:{color:e._f("filterColor")(e.getColor(s,n)),active:e.isInsideSelectArea(s,n)},on:{mousedown:function(t){return e.handleLEDMouseDown(s,n)},mouseover:function(t){return e.handleLEDMouseOver(s,n)}}})})),1)})),0)},b=[],v=(o("cb29"),o("c19f"),o("a9e3"),o("d3b7"),o("5cc6"),o("9a8c"),o("a975"),o("735e"),o("c1ac"),o("d139"),o("3a7b"),o("d5d6"),o("82f8"),o("e91f"),o("60bd"),o("5f96"),o("3280"),o("3fcc"),o("ca91"),o("25a1"),o("cd26"),o("3c5d"),o("2954"),o("649e"),o("219c"),o("170b"),o("b39a"),o("72f7"),o("3835")),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"led-block",class:{active:e.active},style:e.style,on:{mousedown:function(t){return t.stopPropagation(),e.$emit("mousedown")},mouseover:function(t){return t.stopPropagation(),e.$emit("mouseover")}}})},C=[],w={name:"LEDBlock",props:{size:{type:Number,default:16},margin:{type:Number,default:1},color:{type:String,default:"#444"},active:{type:Boolean,default:!1}},computed:{style:function(){return{width:this.size+"px",height:this.size+"px",margin:this.margin+"px",background:this.color}}}},A=w,y=(o("d25d"),Object(f["a"])(A,g,C,!1,null,"1b952cd1",null)),x=y.exports,P=(o("ac1f"),o("25f0"),o("3ca3"),o("ddb0"),o("2b3d"),o("8390"));window.encode=P["encode"],window.decode=P["decode"];var E=function(e){if(/^#[0-9a-fA-F]{3}$/.exec(e)){var t=parseInt(e[1]+e[1],16),o=parseInt(e[2]+e[2],16),n=parseInt(e[3]+e[3],16);return[t,o,n]}if(/^#[0-9a-fA-F]{6}$/.exec(e)){var s=parseInt(e[1]+e[2],16),r=parseInt(e[3]+e[4],16),a=parseInt(e[5]+e[6],16);return[s,r,a]}return[0,0,0]},I=function(e){var t=Object(v["a"])(e,3),o=t[0],n=t[1],s=t[2],r=function(e){var t=e.toString(16);return 1===t.length&&(t+="0"),t};return"#"+r(o)+r(n)+r(s)},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"untitled.led",o=document.createElement("a"),n=window.URL.createObjectURL(new Blob([e]));o.href=n,o.download=t,o.click(),window.URL.revokeObjectURL(n)},M={hex2rgb:E,rgb2hex:I,bin2str:P["encode"],str2bin:P["decode"],downloadBinary:D},O={name:"LEDMatrix",components:{LEDBlock:x},filters:{filterColor:function(e){return e||"#444"}},props:{size:{type:Array,default:function(){return[32,8]}},selectMode:{type:Number,default:2}},data:function(){var e=this.size[0]*this.size[1],t=Array(e).fill(null);return{mouseDown:!1,mouseInfo:{down:!1,startX:-1,startY:-1,endX:-1,endY:-1},selectArea:{enable:!1,startPos:[-1,-1],endPos:[-1,-1]},colorData:t}},created:function(){var e=this;document.addEventListener("mousedown",(function(){return e.mouseDown=!0})),document.addEventListener("mouseup",(function(){return e.mouseDown=!1}))},methods:{handleLEDMouseDown:function(e,t){var o=this;if(!this.selectMode)return this.mouseDown=!0,void this.$emit("drag",e,t);this.mouseInfo.down=!0,this.mouseInfo.startX=e,this.mouseInfo.startY=t,this.mouseInfo.endX=e,this.mouseInfo.endY=t,this.calcSelectArea();var n=function(){JSON.parse(JSON.stringify(o.selectArea));o.$emit("select",o.selectArea)},s=function e(){o.mouseInfo.down=!1,o.calcSelectArea(),document.removeEventListener("mouseup",e),n()},r=function(){o.selectArea.enable=!1,document.removeEventListener("mouseup",s),n()};document.addEventListener("mouseup",s),document.addEventListener("mousedown",r)},handleLEDMouseOver:function(e,t){2===this.selectMode?this.mouseInfo.down&&(this.mouseInfo.endX=e,this.mouseInfo.endY=t,this.calcSelectArea()):1===this.selectMode?this.mouseInfo.down&&(this.mouseInfo.startX=e,this.mouseInfo.startY=t,this.mouseInfo.endX=e,this.mouseInfo.endY=t,this.calcSelectArea()):this.mouseDown&&this.$emit("drag",e,t)},calcSelectArea:function(){~this.mouseInfo.startX||~this.mouseInfo.startY||~this.mouseInfo.endX||~this.mouseInfo.endY?(this.selectArea.startPos=[Math.min(this.mouseInfo.startX,this.mouseInfo.endX),Math.min(this.mouseInfo.startY,this.mouseInfo.endY)],this.selectArea.endPos=[Math.max(this.mouseInfo.startX,this.mouseInfo.endX),Math.max(this.mouseInfo.startY,this.mouseInfo.endY)],this.selectArea.enable=!0):this.selectArea.enable=!1},isInsideSelectArea:function(e,t){return this.selectArea.enable&&e>=this.selectArea.startPos[0]&&e<=this.selectArea.endPos[0]&&t>=this.selectArea.startPos[1]&&t<=this.selectArea.endPos[1]},getColor:function(e,t){return this.colorData[t*this.size[0]+e]},setColor:function(e,t,o){this.$set(this.colorData,t*this.size[0]+e,o)},getData:function(e,t,o,n){var s=o-e+1,r=n-t+1,a=s*r*3+2,i=new ArrayBuffer(a),c=new DataView(i),l=0;c.setUint8(l++,s),c.setUint8(l++,r);for(var u=t;u<=n;++u)for(var d=e;d<=o;++d){var f=this.getColor(d,u),h=M.hex2rgb(f),m=Object(v["a"])(h,3),p=m[0],b=m[1],g=m[2];c.setUint8(l++,p),c.setUint8(l++,b),c.setUint8(l++,g)}return i},setData:function(e,t,o){for(var n=0,s=new Uint8Array(o),r=s[n++],a=s[n++],i=t;i<=t+a-1;++i)for(var c=e;c<=e+r-1;++c){var l=s[n++],u=s[n++],d=s[n++];if(l||u||d){var f=M.rgb2hex([l,u,d]);this.setColor(c,i,f)}else this.setColor(c,i,null)}}}},L=O,k=(o("d0b0"),Object(f["a"])(L,p,b,!1,null,"b5f85584",null)),S=k.exports,_=o("d4ec"),j=o("bee2"),$={SELECT:"select",DRAW:"brush"},T=function(){function e(){Object(_["a"])(this,e),this.matrixElm=null}return Object(j["a"])(e,[{key:"init",value:function(e){this.matrixElm=e}},{key:"onDraw",value:function(e,t){var o=Object(v["a"])(e,2),n=o[0],s=o[1];this.matrixElm.setColor(n,s,t)}},{key:"onDrawArea",value:function(e,t,o){for(var n=Object(v["a"])(e,2),s=n[0],r=n[1],a=Object(v["a"])(t,2),i=a[0],c=a[1],l=r;l<=c;++l)for(var u=s;u<=i;++u)this.onDraw([u,l],o)}}]),e}(),z=T,X={name:"App",components:{ToolsPanel:m,LEDMatrix:S},data:function(){return{matrix:new z,size:[32,8],tools:Object.values($),currentMode:$.SELECT,selectMode:2,selectArea:{enable:!1,startPos:[0,0],endPos:[0,0]},bgColor:"#444444"}},computed:{selectAreaText:function(){if(!0===this.selectArea.enable){var e=this.selectArea.startPos,t=this.selectArea.endPos;return"[".concat(e[0],",").concat(e[1],"] [").concat(t[0],",").concat(t[1],"]")}return"[N,N] [N,N]"},bgColorText:function(){return this.bgColor?this.bgColor.toUpperCase():"NULL"}},mounted:function(){var e=this;this.matrix.init(this.$refs.matrix),this.setCurrentMode($.SELECT),document.addEventListener("keydown",(function(t){68===t.keyCode&&e.selectArea.enable&&e.matrix.onDrawArea(e.selectArea.startPos,e.selectArea.endPos,e.bgColorText)}))},methods:{setCurrentMode:function(e){this.currentMode=e,e===$.SELECT?this.selectMode=2:e===$.DRAW&&(this.selectMode=0)},handleSelect:function(e){this.selectArea.enable=e.enable,this.selectArea.startPos=e.startPos,this.selectArea.endPos=e.endPos},handleDrag:function(e,t){this.currentMode===$.DRAW&&this.matrix.onDraw([e,t],this.bgColorText)},handleBgColorChange:function(e){this.bgColor=e}}},Y=X,U=(o("5c0b"),Object(f["a"])(Y,a,i,!1,null,null,null)),B=U.exports;n["default"].use(r.a,{size:"small"}),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(B)}}).$mount("#app")},5903:function(e,t,o){},"5c0b":function(e,t,o){"use strict";var n=o("9c0c"),s=o.n(n);s.a},"9c0c":function(e,t,o){},a538:function(e,t,o){},d0b0:function(e,t,o){"use strict";var n=o("2125"),s=o.n(n);s.a},d25d:function(e,t,o){"use strict";var n=o("a538"),s=o.n(n);s.a}});
//# sourceMappingURL=app.f6d28efc.js.map