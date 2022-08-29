"use strict";(self.webpackChunkexiled_docs=self.webpackChunkexiled_docs||[]).push([[636],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Manual Installation",u={unversionedId:"Installation/Manual/WindowsOrLinux",id:"Installation/Manual/WindowsOrLinux",title:"Manual Installation",description:"You can download exiled manually following this steps:",source:"@site/docs/Installation/Manual/WindowsOrLinux.md",sourceDirName:"Installation/Manual",slug:"/Installation/Manual/WindowsOrLinux",permalink:"/Web/docs/Installation/Manual/WindowsOrLinux",draft:!1,editUrl:"https://github.com/Exiled-Team/Web/tree/main/docs/docs/Installation/Manual/WindowsOrLinux.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Automatic Linux Installation",permalink:"/Web/docs/Installation/Automatic/Linux"},next:{title:"Intro",permalink:"/Web/docs/Resources/Intro"}},p={},c=[{value:"Pick a release",id:"pick-a-release",level:3},{value:"Download the release",id:"download-the-release",level:3},{value:"Installation",id:"installation",level:3},{value:"Note:",id:"note",level:4}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manual-installation"},"Manual Installation"),(0,o.kt)("p",null,"You can download exiled manually following this steps:"),(0,o.kt)("h3",{id:"pick-a-release"},"Pick a release"),(0,o.kt)("p",null,"You can select a release inside ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Exiled-Team/EXILED/releases/"},"our official GitHub repo"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Exiled Release",src:n(9849).Z,width:"1156",height:"461"})),(0,o.kt)("h3",{id:"download-the-release"},"Download the release"),(0,o.kt)("p",null,"Download the ",(0,o.kt)("inlineCode",{parentName:"p"},"Exiled.tar.gz")," file and extract it with your favourite tool, we recommend ",(0,o.kt)("a",{parentName:"p",href:"https://www.7-zip.org/"},"7Zip")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.win-rar.com/download.html?&L=6"},"WinRar"),"."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Move the file ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Assembly-CSharp.dll"))," to: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"(Your Server Folder)/SCPSL_Data/Managed"))," and replace the file."),(0,o.kt)("li",{parentName:"ol"},"Move the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"EXILED"))," folder to ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"%appdata%")))),(0,o.kt)("h4",{id:"note"},"Note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows: This ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"%appdata%"))," folder is the one located inside ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"AppData/Roaming")),", not just ",(0,o.kt)("inlineCode",{parentName:"li"},"AppData"),"."),(0,o.kt)("li",{parentName:"ul"},"Linux: This ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"%appdata%"))," folder is the one called ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"~/.config")),".")))}m.isMDXComponent=!0},9849:function(e,t,n){t.Z=n.p+"assets/images/Release-ebdfdc73d8b3b021a10aac420e6ed4c3.png"}}]);