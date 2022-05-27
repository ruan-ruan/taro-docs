"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17262],{79874:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(93106);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=c(a),u=l,k=s["".concat(p,".").concat(u)]||s[u]||d[u]||r;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},52671:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});a(93106);var n=a(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},l.apply(this,arguments)}function r(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}const o={title:"Cloud",sidebar_label:"Cloud"},i=void 0,p={unversionedId:"apis/cloud/cloud",id:"version-3.x/apis/cloud/cloud",title:"Cloud",description:"\u65b9\u6cd5",source:"@site/versioned_docs/version-3.x/apis/cloud/cloud.md",sourceDirName:"apis/cloud",slug:"/apis/cloud/",permalink:"/taro-docs/docs/apis/cloud/",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/cloud/cloud.md",tags:[],version:"3.x",frontMatter:{title:"Cloud",sidebar_label:"Cloud"},sidebar:"API",previous:{title:"RewardedVideoAd",permalink:"/taro-docs/docs/apis/ad/RewardedVideoAd"},next:{title:"DB",permalink:"/taro-docs/docs/apis/cloud/DB"}},c={},m=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"init",id:"init",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"CloudID",id:"cloudid",level:3},{value:"callFunction",id:"callfunction",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:4},{value:"uploadFile",id:"uploadfile",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-2",level:4},{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",level:5},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",level:5},{value:"downloadFile",id:"downloadfile",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-3",level:4},{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1-1",level:5},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2-1",level:5},{value:"getTempFileURL",id:"gettempfileurl",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-4",level:4},{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1-2",level:5},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2-2",level:5},{value:"deleteFile",id:"deletefile",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-5",level:4},{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1-3",level:5},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2-3",level:5},{value:"database",id:"database",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-6",level:4},{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1-4",level:5},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2-4",level:5},{value:"callContainer",id:"callcontainer",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-7",level:4},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],d={toc:m};function s(t){var{components:e}=t,o=r(t,["components"]);return(0,n.kt)("wrapper",l({},d,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",l({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",l({},{id:"init"}),"init"),(0,n.kt)("p",null,"\u5728\u8c03\u7528\u4e91\u5f00\u53d1\u5404 API \u524d\uff0c\u9700\u5148\u8c03\u7528\u521d\u59cb\u5316\u65b9\u6cd5 init \u4e00\u6b21\uff08\u5168\u5c40\u53ea\u9700\u4e00\u6b21\uff0c\u591a\u6b21\u8c03\u7528\u65f6\u53ea\u6709\u7b2c\u4e00\u6b21\u751f\u6548\uff09"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(98548).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(38309).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(69768).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/init/client.init.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(config?: IInitConfig) => Promise<void>\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"config"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"IInitConfig"))))),(0,n.kt)("h4",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.cloud.init({\n  env: 'test-x1dzi'\n})\n")),(0,n.kt)("h3",l({},{id:"cloudid"}),"CloudID"),(0,n.kt)("p",null,"\u58f0\u660e\u5b57\u7b26\u4e32\u4e3a CloudID\uff08\u5f00\u653e\u6570\u636e ID\uff09\uff0c\u8be5\u63a5\u53e3\u4f20\u5165\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u4e00\u4e2a CloudID \u7279\u6b8a\u5bf9\u8c61\uff0c\u5c06\u8be5\u5bf9\u8c61\u4f20\u81f3\u4e91\u51fd\u6570\u53ef\u4ee5\u83b7\u53d6\u5176\u5bf9\u5e94\u7684\u5f00\u653e\u6570\u636e\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/open/Cloud.CloudID.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(cloudID: string) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cloudID"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h3",l({},{id:"callfunction"}),"callFunction"),(0,n.kt)("p",null,"\u8c03\u7528\u4e91\u51fd\u6570"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(98548).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(38309).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(69768).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/functions/Cloud.callFunction.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"{ (param: OQ<CallFunctionParam>): void; (param: RQ<CallFunctionParam>): Promise<CallFunctionResult>; }\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"param"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OQ<CallFunctionParam>"))))),(0,n.kt)("h4",l({},{id:"\u793a\u4f8b\u4ee3\u7801-1"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("p",null,"\u5047\u8bbe\u5df2\u6709\u4e00\u4e2a\u4e91\u51fd\u6570 add\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7aef\u53d1\u8d77\u5bf9\u4e91\u51fd\u6570 add \u7684\u8c03\u7528\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.cloud.callFunction({\n// \u8981\u8c03\u7528\u7684\u4e91\u51fd\u6570\u540d\u79f0\nname: 'add',\n  // \u4f20\u9012\u7ed9\u4e91\u51fd\u6570\u7684event\u53c2\u6570\n  data: {\n    x: 1,\n    y: 2,\n  }\n}).then(res => {\n  // output: res.result === 3\n}).catch(err => {\n  // handle error\n})\n")),(0,n.kt)("h3",l({},{id:"uploadfile"}),"uploadFile"),(0,n.kt)("p",null,"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u81f3\u4e91\u5b58\u50a8\u7a7a\u95f4\uff0c\u5982\u679c\u4e0a\u4f20\u81f3\u540c\u4e00\u8def\u5f84\u5219\u662f\u8986\u76d6\u5199"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(98548).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(38309).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(69768).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/uploadFile/client.uploadFile.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"{ (param: OQ<UploadFileParam>): UploadTask; (param: RQ<UploadFileParam>): Promise<UploadFileResult>; }\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"param"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OQ<UploadFileParam>"))))),(0,n.kt)("h4",l({},{id:"\u793a\u4f8b\u4ee3\u7801-2"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("h5",l({},{id:"\u793a\u4f8b-1"}),"\u793a\u4f8b 1"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.cloud.uploadFile({\n  cloudPath: 'example.png',\n  filePath: '', // \u6587\u4ef6\u8def\u5f84\n  success: res => {\n    // get resource ID\n    console.log(res.fileID)\n  },\n  fail: err => {\n    // handle error\n  }\n})\n")),(0,n.kt)("h5",l({},{id:"\u793a\u4f8b-2"}),"\u793a\u4f8b 2"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.cloud.uploadFile({\n  cloudPath: 'example.png',\n  filePath: '', // \u6587\u4ef6\u8def\u5f84\n}).then(res => {\n  // get resource ID\n  console.log(res.fileID)\n}).catch(error => {\n  // handle error\n})\n")),(0,n.kt)("h3",l({},{id:"downloadfile"}),"downloadFile"),(0,n.kt)("p",null,"\u4ece\u4e91\u5b58\u50a8\u7a7a\u95f4\u4e0b\u8f7d\u6587\u4ef6"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(98548).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(38309).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(69768).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/downloadFile/client.downloadFile.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"{ (param: OQ<DownloadFileParam>): DownloadTask; (param: RQ<DownloadFileParam>): Promise<DownloadFileResult>; }\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"param"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OQ<DownloadFileParam>"))))),(0,n.kt)("h4",l({},{id:"\u793a\u4f8b\u4ee3\u7801-3"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("h5",l({},{id:"\u793a\u4f8b-1-1"}),"\u793a\u4f8b 1"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.cloud.downloadFile({\n  fileID: 'a7xzcb',\n  success: res => {\n    // get temp file path\n    console.log(res.tempFilePath)\n  },\n  fail: err => {\n    // handle error\n  }\n})\n")),(0,n.kt)("h5",l({},{id:"\u793a\u4f8b-2-1"}),"\u793a\u4f8b 2"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.cloud.downloadFile({\n  fileID: 'a7xzcb'\n}).then(res => {\n  // get temp file path\n  console.log(res.tempFilePath)\n}).catch(error => {\n  // handle error\n})\n")),(0,n.kt)("h3",l({},{id:"gettempfileurl"}),"getTempFileURL"),(0,n.kt)("p",null,"\u7528\u4e91\u6587\u4ef6 ID \u6362\u53d6\u771f\u5b9e\u94fe\u63a5\uff0c\u516c\u6709\u8bfb\u7684\u6587\u4ef6\u83b7\u53d6\u7684\u94fe\u63a5\u4e0d\u4f1a\u8fc7\u671f\uff0c\u79c1\u6709\u7684\u6587\u4ef6\u83b7\u53d6\u7684\u94fe\u63a5\u5341\u5206\u949f\u6709\u6548\u671f\u3002\u4e00\u6b21\u6700\u591a\u53d6 50 \u4e2a\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(98548).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(38309).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(69768).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/Cloud.getTempFileURL.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"{ (param: OQ<GetTempFileURLParam>): void; (param: RQ<GetTempFileURLParam>): Promise<GetTempFileURLResult>; }\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"param"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OQ<GetTempFileURLParam>"))))),(0,n.kt)("h4",l({},{id:"\u793a\u4f8b\u4ee3\u7801-4"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("h5",l({},{id:"\u793a\u4f8b-1-2"}),"\u793a\u4f8b 1"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.cloud.getTempFileURL({\n  fileList: [{\n    fileID: 'a7xzcb',\n    maxAge: 60 * 60, // one hour\n  }]\n}).then(res => {\n  // get temp file URL\n  console.log(res.fileList)\n}).catch(error => {\n  // handle error\n})\n")),(0,n.kt)("h5",l({},{id:"\u793a\u4f8b-2-2"}),"\u793a\u4f8b 2"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.cloud.getTempFileURL({\n  fileList: ['cloud://xxx', 'cloud://yyy'],\n  success: res => {\n    // get temp file URL\n    console.log(res.fileList)\n  },\n  fail: err => {\n    // handle error\n  }\n})\n")),(0,n.kt)("h3",l({},{id:"deletefile"}),"deleteFile"),(0,n.kt)("p",null,"\u4ece\u4e91\u5b58\u50a8\u7a7a\u95f4\u5220\u9664\u6587\u4ef6\uff0c\u4e00\u6b21\u6700\u591a 50 \u4e2a"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(98548).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(38309).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(69768).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/Cloud.deleteFile.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"{ (param: OQ<DeleteFileParam>): void; (param: RQ<DeleteFileParam>): Promise<DeleteFileResult>; }\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"param"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OQ<DeleteFileParam>"))))),(0,n.kt)("h4",l({},{id:"\u793a\u4f8b\u4ee3\u7801-5"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("h5",l({},{id:"\u793a\u4f8b-1-3"}),"\u793a\u4f8b 1"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),".cloud.deleteFile({\n  fileList: ['a7xzcb']\n}).then(res => {\n  // handle success\n  console.log(res.fileList)\n}).catch(error => {\n  // handle error\n})\n")),(0,n.kt)("h5",l({},{id:"\u793a\u4f8b-2-3"}),"\u793a\u4f8b 2"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.cloud.deleteFile({\n  fileList: ['a7xzcb'],\n  success: res => {\n    // handle success\n    console.log(res.fileList)\n  },\n  fail: err => {\n    // handle error\n  },\n  complete: res => {\n    // ...\n  }\n})\n")),(0,n.kt)("h3",l({},{id:"database"}),"database"),(0,n.kt)("p",null,"\u83b7\u53d6\u6570\u636e\u5e93\u5b9e\u4f8b"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(98548).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(38309).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(69768).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/Cloud.database.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(config?: IConfig) => Database\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"config"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"IConfig"))))),(0,n.kt)("h4",l({},{id:"\u793a\u4f8b\u4ee3\u7801-6"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("h5",l({},{id:"\u793a\u4f8b-1-4"}),"\u793a\u4f8b 1"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u8c03\u7528\u83b7\u53d6\u9ed8\u8ba4\u73af\u5883\u7684\u6570\u636e\u5e93\u7684\u5f15\u7528\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"const db = Taro.cloud.database()\n")),(0,n.kt)("h5",l({},{id:"\u793a\u4f8b-2-4"}),"\u793a\u4f8b 2"),(0,n.kt)("p",null,"\u5047\u8bbe\u6709\u4e00\u4e2a\u73af\u5883\u540d\u4e3a test-123\uff0c\u7528\u505a\u6d4b\u8bd5\u73af\u5883\uff0c\u90a3\u4e48\u53ef\u4ee5\u5982\u4e0b\u83b7\u53d6\u6d4b\u8bd5\u73af\u5883\u6570\u636e\u5e93\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"const testDB = Taro.cloud.database({\n  env: 'test-123'\n})\n")),(0,n.kt)("h3",l({},{id:"callcontainer"}),"callContainer"),(0,n.kt)("p",null,"\u8c03\u7528\u4e91\u6258\u7ba1\u670d\u52a1"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(98548).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(38309).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(69768).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/container/Cloud.callContainer.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"<R = any, P = any>(params: CallContainerParam<P>) => Promise<CallContainerResult<R>>\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"params"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"R"))))),(0,n.kt)("h4",l({},{id:"\u793a\u4f8b\u4ee3\u7801-7"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("p",null,"\u5047\u8bbe\u5df2\u7ecf\u521d\u59cb\u5316\u4e86\u4e00\u4e2a\u53ebc1\u7684\u4e91\u5f00\u53d1\u5b9e\u4f8b\uff0c\u5e76\u53d1\u8d77\u4e91\u6258\u7ba1\u8c03\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"const r = await c1.callContainer({\n  path: '/path/to/container', // \u586b\u5165\u5bb9\u5668\u7684\u8bbf\u95ee\u8def\u5f84\n  method: 'POST',\n})\n")),(0,n.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"Harmony"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Cloud.init"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Cloud.callFunction"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Cloud.uploadFile"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Cloud.downloadFile"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Cloud.getTempFileURL"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Cloud.deleteFile"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Cloud.database"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Cloud.callContainer"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0},30304:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},69768:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},38309:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},98548:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);