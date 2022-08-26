"use strict";(self.webpackChunkexiled_docs=self.webpackChunkexiled_docs||[]).push([[37],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=i,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},s="Exiled Introduction",u={unversionedId:"Intro",id:"Intro",title:"Exiled Introduction",description:"About EXILED",source:"@site/docs/Intro.md",sourceDirName:".",slug:"/Intro",permalink:"/docs/Intro",draft:!1,editUrl:"https://github.com/Exiled-Team/exiled-team.github.io/tree/master/docs/docs/Intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Install automatically EXILED",permalink:"/docs/Installation/Intro"}},d={},p=[{value:"About EXILED",id:"about-exiled",level:2},{value:"What is EXILED?",id:"what-is-exiled",level:2},{value:"How do I install EXILED?",id:"how-do-i-install-exiled",level:2},{value:"How do I install plugins?",id:"how-do-i-install-plugins",level:2},{value:"Where is plugin configuration stored?",id:"where-is-plugin-configuration-stored",level:2},{value:"Is there a plugin for upgrading items in hand, inside SCP-914?",id:"is-there-a-plugin-for-upgrading-items-in-hand-inside-scp-914",level:2},{value:"What is Harmony?",id:"what-is-harmony",level:2}],c={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exiled-introduction"},"Exiled Introduction"),(0,o.kt)("h2",{id:"about-exiled"},"About EXILED"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EXILED")," is a low level plugin framework for SCP: Secret Laboratory."),(0,o.kt)("p",null,"It offers an event system for developers to hook in order to manipulate or change game code, or implement their own functions."),(0,o.kt)("p",null,"All ",(0,o.kt)("strong",{parentName:"p"},"EXILED")," events are coded with ",(0,o.kt)("a",{parentName:"p",href:"https://harmony.pardeike.net/"},"Harmony")," using IL transpilers, meaning they require no direct editing of server Assemblies to function, which allows for two unique benefits."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The entirety of the frameworks code can be freely published and shared. Allowing developers to better understand how it works, as well as contributing to the framework itself."),(0,o.kt)("li",{parentName:"ul"},"Since all of the code related to the framework is done outside of the server assembly, things like small game updates will have little, if any, effect on the framework.")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h2",{id:"what-is-exiled"},"What is EXILED?"),(0,o.kt)("p",null,'EXILED - short for "EXtended In-runtime Library for External Development" is a plugin framework for SCP: Secret Laboratory compatible with MP2. It is not a direct replacement for SMOD, but it\'s purpose is to implement an event-based framework using Harmony patches, that plugin developers can utilize to develop plugins for SCP:SL servers.'),(0,o.kt)("h2",{id:"how-do-i-install-exiled"},"How do I install EXILED?"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Installation/Intro"},"Installation")," page for installation information."),(0,o.kt)("h2",{id:"how-do-i-install-plugins"},"How do I install plugins?"),(0,o.kt)("p",null,"All plugins contain a DLL file (found in its latest release) that is used to load the plugin. Place the plugin in the appropriate plugin folder."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows: ",(0,o.kt)("inlineCode",{parentName:"li"},"%AppData%\\EXILED\\Configs(ServerPortHere)-configs.yml")),(0,o.kt)("li",{parentName:"ul"},"Linux: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.config/EXILED/Configs(ServerPortHere)-configs.yml"))),(0,o.kt)("h2",{id:"where-is-plugin-configuration-stored"},"Where is plugin configuration stored?"),(0,o.kt)("p",null,"Plugin configuration is stored in a separate folder than the base-game config files."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows: ",(0,o.kt)("inlineCode",{parentName:"li"},"%AppData%\\EXILED\\Plugins")),(0,o.kt)("li",{parentName:"ul"},"Linux: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.config/EXILED/Plugins"))),(0,o.kt)("h2",{id:"is-there-a-plugin-for-upgrading-items-in-hand-inside-scp-914"},"Is there a plugin for upgrading items in hand, inside SCP-914?"),(0,o.kt)("p",null,"No, this is unnecessary because this is a base-game feature! Simply set the ",(0,o.kt)("inlineCode",{parentName:"p"},"914_mode")," config_gameplay config to ",(0,o.kt)("inlineCode",{parentName:"p"},"DroppedAndHeld"),"."),(0,o.kt)("h2",{id:"what-is-harmony"},"What is Harmony?"),(0,o.kt)("p",null,"Harmony is a library that examines the code of a program as it is being run, allowing developers to tap into those functions, and run their own code, either adding onto, or completely replacing, the code the program would normally run."),(0,o.kt)("p",null,"The reason EXILED uses harmony is to allow easier updating of the framework in conjunction with game updates. Under ideal circumstances, a new game update will not break EXILED itself, and the only thing needed to make EXILED work again, is a very simple copy/paste of a few lines of code into the new Assembly-CSharp file."),(0,o.kt)("p",null,"By keeping all of our code outside of the Assembly, other developers can have full, unhindered access to the entirety of EXILED's source code, making collaboration easier.  ",(0,o.kt)("br",null),"\nAdditionally, it means that our code will be mostly unaffected by game updates. Unless the game drastically changes code in a very specific function EXILED uses for an event patch, a game update may not even require EXILED itself to also be updated."))}f.isMDXComponent=!0}}]);