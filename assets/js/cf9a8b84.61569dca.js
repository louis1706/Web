"use strict";(self.webpackChunkexiled_docs=self.webpackChunkexiled_docs||[]).push([[723],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),g=u(t),d=a,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return t?i.createElement(f,l(l({ref:n},c),{},{components:t})):i.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var u=2;u<o;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3730:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return p}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],r={sidebar_position:1},s=void 0,u={unversionedId:"Plugins/Plugin Structure",id:"Plugins/Plugin Structure",title:"Plugin Structure",description:"This tutorial assumes that you are familiar with C#.",source:"@site/docs/Plugins/Plugin Structure.mdx",sourceDirName:"Plugins",slug:"/Plugins/Plugin Structure",permalink:"/Web/docs/Plugins/Plugin Structure",draft:!1,editUrl:"https://github.com/Exiled-Team/Web/tree/master/docs/docs/Plugins/Plugin Structure.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/Web/docs/Resources/Intro"},next:{title:"MoreEffectiveCoroutines",permalink:"/Web/docs/Plugins/MoreEffectiveCoroutines"}},c={},p=[{value:"Plugin Structure",id:"plugin-structure",level:3},{value:"Plugin Core",id:"plugin-core",level:2},{value:"OnEnabled and OnDisabled",id:"onenabled-and-ondisabled",level:2},{value:"Plugin Data",id:"plugin-data",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Creating Configs",id:"creating-configs",level:3},{value:"Reading Configs",id:"reading-configs",level:3}],g={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This tutorial assumes that you are familiar with C#."))),(0,o.kt)("h3",{id:"plugin-structure"},"Plugin Structure"),(0,o.kt)("p",null,"In order to be loaded onto the framework, ",(0,o.kt)("em",{parentName:"p"},"every")," plugin must follow a certain structure and inherit from certain members. If this is not achieved, the plugin will not execute. This tutorial will explain the proper setup for a plugin on the EXILED framework."),(0,o.kt)("h2",{id:"plugin-core"},"Plugin Core"),(0,o.kt)("p",null,'Every plugin must have a .cs file that consists of the plugin class itself. This file (and the class itself) are typically simply named "Plugin"; however, any name is appropriate for the main plugin class. This example will use "Plugin" as the name of the class.'),(0,o.kt)("p",null,"After the main file is created, the Plugin class must be declared as a plugin, so that the EXILED framework loads it. This can be done by inheriting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin<IConfig>")," class, provided in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Exiled.API.Features")," namespace."),(0,o.kt)("p",null,"The following example shows how to properly inherit the class. However, notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"Config")," class inside of the angled brackets. This class must be created and must inherit from ",(0,o.kt)("inlineCode",{parentName:"p"},"IConfig"),", which is part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Exiled.API.Interfaces")," namespace. Upon the creation of the Config class, the interface will require you to add an ",(0,o.kt)("inlineCode",{parentName:"p"},"IsEnabled")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"namespace MyPluginNamespace\n{\n    using Exiled.API.Features;\n    public class Plugin : Plugin<Config>\n    {\n        // This plugin will now be recognized by the EXILED framework!\n    }\n    // It is strongly encouraged to create a separate file for your Config class.\n    using Exiled.API.Interfaces;\n    public class Config : IConfig\n    {\n        public bool IsEnabled { get; set; }\n    }\n}\n")),(0,o.kt)("p",null,"By creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"Config")," class and including it in the angled brackets, the rest of the plugin's code, as well as the EXILED framework, will recognize that the class resembles configuration for server owners. For more information about setting up configuration, see the Configuration section below."),(0,o.kt)("h2",{id:"onenabled-and-ondisabled"},"OnEnabled and OnDisabled"),(0,o.kt)("p",null,"The plugin is now successfully loaded onto the framework. However, it doesn't actually do anything; no functionality has been assigned. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin<IConfig>")," class provides two overridable methods in order to give the plugin functionality: ",(0,o.kt)("inlineCode",{parentName:"p"},"OnEnabled")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OnDisabled"),". These two methods do exactly as they sound: Execute when the plugin is enabled/loaded, and when it is disabled."),(0,o.kt)("p",null,"The following example shows how to utilize these methods to send a message to the console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'namespace MyPluginNamespace\n{\n    using Exiled.API.Features;\n    public class Plugin : Plugin<Config>\n    {\n        public override void OnEnabled()\n        {\n            Log.Info("My plugin has been enabled!");\n        }\n        public override void OnDisabled()\n        {\n            Log.Info("My plugin has been disabled!");\n        }\n    }\n    // Config.cs file\n    using Exiled.API.Interfaces;\n    public class Config : IConfig\n    {\n        public bool IsEnabled { get; set; }\n    }\n}\n')),(0,o.kt)("p",null,"All of the code for the plugin ",(0,o.kt)("em",{parentName:"p"},"must")," be enabled in the OnEnabled method, and ",(0,o.kt)("em",{parentName:"p"},"must")," be disabled on the OnDisabled method. It is important that these two methods execute as expected, because server hosts can enable and disable plugins as much as they'd like, and the plugin ",(0,o.kt)("em",{parentName:"p"},"must")," be able to respond to these changes appropriately."),(0,o.kt)("h2",{id:"plugin-data"},"Plugin Data"),(0,o.kt)("p",null,"In order for a plugin to be submitted for public use, the plugin must override three properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"Name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Version"),". The first two are strings, whereas the last one is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Version")," class (",(0,o.kt)("inlineCode",{parentName:"p"},"using System;")," is required)."),(0,o.kt)("p",null,"The following example shows how to properly override this data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'namespace MyPluginNamespace\n{\n    using System;\n    using Exiled.API.Features;\n    public class Plugin : Plugin<Config>\n    {\n        public override string Name => "My Awesome Plugin";\n        public override string Author => "MyName";\n        public override Version Version => new Version(1, 0, 0);\n    }\n    // ...\n}\n')),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"This section is related to creating and reading the value of configuration."),(0,o.kt)("h3",{id:"creating-configs"},"Creating Configs"),(0,o.kt)("p",null,"A lot of plugins provide configuration to allow the server hosts to change various features of the plugin. Luckily, creating configuration is very simple."),(0,o.kt)("p",null,"To start, take a look at your Config.cs file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"namespace MyPluginNamespace\n{\n    using Exiled.API.Interfaces;\n    public class Config : IConfig\n    {\n        public bool IsEnabled { get; set; }\n    }\n}\n")),(0,o.kt)("p",null,"There is currently one config, called ",(0,o.kt)("inlineCode",{parentName:"p"},"IsEnabled"),". As stated above, this config is required and cannot be removed. However, more config can be added. The YAML serialization allows almost any type to be added and still work, including bools, ints, arrays of anything, enums, and even whole classes!"),(0,o.kt)("p",null,"In the following example, a config file with three configs is created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"namespace MyPluginNamespace\n{\n    using Exiled.API.Interfaces;\n    public class Config : IConfig\n    {\n        public bool IsEnabled { get; set; }\n        public bool MyBoolConfig { get; set; }\n        public string MyStringConfig { get; set; }\n        public int MyIntConfig { get; set; } = 5; // Set to 5 by default.\n    }\n}\n")),(0,o.kt)("p",null,"To server hosts, the functionality of these configs might be confusing at first. So, the ",(0,o.kt)("inlineCode",{parentName:"p"},"System.ComponentModel.DescriptionAttribute")," can be used to provide a description for each config!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'namespace MyPluginNamespace\n{\n    using System.ComponentModel;\n    using Exiled.API.Interfaces;\n    public class Config : IConfig\n    {\n        [Description("Whether or not the plugin is enabled.")]\n        public bool IsEnabled { get; set; }\n        [Description("Config that must be true or false!")]\n        public bool MyBoolConfig { get; set; }\n        [Description("Config that must be a string!")]\n        public string MyStringConfig { get; set; }\n        [Description("Config that must be a number! Defaults to 5.")]\n        public int MyIntConfig { get; set; } = 5;\n    }\n}\n')),(0,o.kt)("h3",{id:"reading-configs"},"Reading Configs"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!NOTE]","\nYou do not need to read the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"IsEnabled")," config; EXILED will automatically prevent your plugin from executing if its ",(0,o.kt)("inlineCode",{parentName:"p"},"IsEnabled")," config is set to false.")),(0,o.kt)("p",null,"Reading configuration is more simple than creating it. The base ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin<IConfig>")," class provides a property, called ",(0,o.kt)("inlineCode",{parentName:"p"},"Config"),", which can be used to access these values."),(0,o.kt)("p",null,"In the following example, our config from the previous class is displayed when the plugin starts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'namespace MyPluginNamespace\n{\n    using Exiled.API.Features;\n    public class Plugin : Plugin<Config>\n    {\n        public override void OnEnabled()\n        {\n            Log.Info("Boolean config: " + Config.MyBoolConfig);\n            Log.Info("String config: " + Config.MyStringConfig);\n            Log.Info("Int config: " + Config.MyIntConfig);\n        }\n    }\n    // Config.cs file\n    using System.ComponentModel;\n    using Exiled.API.Interfaces;\n    public class Config : IConfig\n    {\n        [Description("Whether or not the plugin is enabled.")]\n        public bool IsEnabled { get; set; }\n        [Description("Config that must be true or false!")]\n        public bool MyBoolConfig { get; set; }\n        [Description("Config that must be a string!")]\n        public string MyStringConfig { get; set; }\n        [Description("Config that must be a number! Defaults to 5.")]\n        public int MyIntConfig { get; set; } = 5;\n    }\n}\n')))}d.isMDXComponent=!0}}]);