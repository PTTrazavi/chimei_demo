(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0e94":function(e,t,a){},"2c26":function(e,t,a){},"36a4":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],r=(a("5c0b"),a("2877")),o={},l=Object(r["a"])(o,i,n,!1,null,null,null),c=l.exports,d=a("8c4f"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home",class:{unload:"INITIAL"===e.vmode}},[a("header-info"),a("div",{staticClass:"d-flex"},[a("div",{staticClass:"left-panel"},[a("div",{staticClass:"info-block"},[e._m(0),e._m(1),"INITIAL"===e.vmode?a("vue2-dropzone",{ref:"dropzone",staticClass:"align-self-center",attrs:{id:"dropzone",options:e.dropzoneOptions,useCustomSlot:!0},on:{"vdropzone-success":e.onUploaded}},[a("div",{staticClass:"dropzone-custom-content"},[a("div",{staticClass:"dropzone-custom-title text-theme"},[a("i",{staticClass:"fas fa-arrow-circle-up fa-2x"})]),a("div",{staticClass:"subtitle text-theme"},[a("div",[a("b-icon",{attrs:{icon:"cloud-upload","font-scale":"2"}})],1),a("div",[e._v("拖曳或點擊上傳")])])])]):e._e(),"UPLOADED"===e.vmode?a("video",{attrs:{src:e.dicomMp4Url,controls:""}}):e._e(),a("red-label",{attrs:{text:"U0"}})],1)]),a("div",{staticClass:"right-panel"},[a("div",[a("div",[a("div",{staticClass:"info-block"},[e._m(2),"UPLOADED"===e.vmode?a("img",{staticClass:"analyze-img",attrs:{src:e.endDiastoleImg}}):e._e(),a("red-label",{attrs:{text:"End-diastole"}})],1)]),a("div",[a("div",{staticClass:"info-block"},[e._m(3),"UPLOADED"===e.vmode?a("img",{staticClass:"analyze-img",attrs:{src:e.endSystoleImg}}):e._e(),a("red-label",{attrs:{text:"End-systole"}})],1)])]),a("div",{staticClass:"info-block"},[e._m(4),a("div",{staticClass:"d-flex"},[a("div",["UPLOADED"===e.vmode?a("img",{staticClass:"analyze-img",attrs:{src:e.camImg}}):e._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:"UPLOADED"===e.vmode,expression:"vmode === 'UPLOADED'"}],staticClass:"cam-info"},[a("div",[a("div",{staticClass:"title"},[e._v("EF")]),a("b-progress",{attrs:{value:e.ef,max:100}}),a("div",{staticClass:"desc"},[e._v("EF: "+e._s(e.ef)+"%")])],1),a("div",[a("div",{staticClass:"title"},[e._v("RWMA")]),a("div",{staticClass:"desc"},[e._v(e._s(e.rwma))])]),e._m(5)])]),a("red-label",{attrs:{text:"CAM"}})],1)])])],1)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lt-text"},[e._v(" Lareas moluar "),a("br"),e._v(" iisad drats "),a("br"),e._v(" faou ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lb-text"},[e._v(" Lareas moluar "),a("br"),e._v(" iisad drats "),a("br"),e._v(" faou ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lt-text"},[e._v(" Lareas moluar "),a("br"),e._v(" iisad drats "),a("br"),e._v(" faou ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lt-text"},[e._v(" Lareas moluar "),a("br"),e._v(" iisad drats "),a("br"),e._v(" faou ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lt-text"},[e._v(" Lareas moluar "),a("br"),e._v(" iisad drats "),a("br"),e._v(" faou ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"title"},[e._v("Result")]),a("div",{staticClass:"desc"},[e._v("Lorem ipsum dolor (+)")])])}],v=(a("a434"),a("92c3")),m=a.n(v),p=(a("1e3f"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header-info"},[s("img",{staticClass:"logo",attrs:{src:a("e347")}}),s("div",{staticClass:"text"},[e._v("NO. 1209 234 134 345")])])}],b={name:"HeaderInfo",props:{}},h=b,g=(a("be99"),Object(r["a"])(h,p,_,!1,null,"60f01cfa",null)),C=g.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"red-label"},[a("div",{staticClass:"text"},[e._v(e._s(e.text))])])},x=[],I={name:"RedLabel",props:{text:String}},O=I,E=(a("ba7b"),Object(r["a"])(O,y,x,!1,null,"48edbad8",null)),z=E.exports,w={name:"Home",components:{vue2Dropzone:m.a,HeaderInfo:C,RedLabel:z},data:function(){return{vmode:"INITIAL",dropzoneOptions:{url:"/api/chimei_api",method:"post",addRemoveLinks:!0,dictRemoveFile:"刪除",dictRemoveFileConfirmation:"確定刪除？",paramName:"filename",acceptedFiles:".dcm",maxFilesize:100,timeout:3e5,thumbnailMethod:"contain",headers:{},init:function(){this.on("success",(function(e){this.removeFile(e)})),this.on("error",(function(){var e=document.querySelectorAll("[data-dz-errormessage]");e[e.length-1].innerHTML="上傳失敗"}))}},analyze:{},dicomMp4Url:null,camImg:null,endDiastoleImg:null,endSystoleImg:null,rwma:"",ef:0}},methods:{onUploaded:function(e,t){this.analyze=t[0],this.dicomMp4Url="/api"+this.analyze.dicom_mp4,this.camImg=this.getBase64Img(this.analyze.cam),this.endDiastoleImg=this.getBase64Img(this.analyze.end_diastole),this.endSystoleImg=this.getBase64Img(this.analyze.end_systole),this.ef=this.analyze.EF,this.rwma=this.analyze.RWMA,this.vmode="UPLOADED"},getBase64Img:function(e){return"data:image/jpeg;base64,"+e},removeImage:function(e){"undefined"!==typeof this.predictImages[e]&&this.predictImages.splice(e,1)}}},L=w,D=(a("8b4b"),a("b5d4"),Object(r["a"])(L,u,f,!1,null,"00992278",null)),j=D.exports;s["default"].use(d["a"]);var A=[{path:"/",name:"Home",component:j}],P=new d["a"]({routes:A}),U=P,M=a("2f62");s["default"].use(M["a"]);var S=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),$=a("5f5b"),k=a("b1e0");a("f9e3"),a("2dd8");s["default"].use($["a"]),s["default"].use(k["a"]),s["default"].config.productionTip=!1,new s["default"]({router:U,store:S,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"83c2":function(e,t,a){},"8b4b":function(e,t,a){"use strict";a("2c26")},"9c0c":function(e,t,a){},b5d4:function(e,t,a){"use strict";a("0e94")},ba7b:function(e,t,a){"use strict";a("36a4")},be99:function(e,t,a){"use strict";a("83c2")},e347:function(e,t,a){e.exports=a.p+"img/logo.61bb4020.svg"}});
//# sourceMappingURL=app.851e896d.js.map