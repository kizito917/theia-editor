(()=>{var e,r,i={83250:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DEFAULT_SUPPORTED_API_VERSION=void 0,r.DEFAULT_SUPPORTED_API_VERSION="1.89.1"},74243:(e,r,i)=>{e.exports=i(83250)},82873:(e,r,i)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.VSX_REGISTRY_URL_DEFAULT=r.VSCODE_DEFAULT_API_VERSION=void 0;const n=i(74243);r.VSCODE_DEFAULT_API_VERSION=n.DEFAULT_SUPPORTED_API_VERSION,r.VSX_REGISTRY_URL_DEFAULT="https://open-vsx.org"},20583:(e,r,i)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.doInitialization=void 0;const n=i(48782),o=i(82873);process.env.VSCODE_PID=process.env.THEIA_PARENT_PID;const t=new Map,u=new Array;let l,s,d=!1;function a(e,r){const i=e(r);return i.version=process.env.VSCODE_API_VERSION||o.VSCODE_DEFAULT_API_VERSION,i}r.doInitialization=(e,r)=>{t.set(r.model.id,a(e,r)),u.push(r),s=e,d||(!function(){const e=i(73339),r="vscode",o=e._load;e._load=function(e,i,d){if(e!==r)return o.apply(this,arguments);const c=(P=i.filename,u.find((e=>P.startsWith(e.pluginFolder))));var P;if(c){return t.get(c.model.id)}return l||(console.warn(`Could not identify plugin for 'Theia' require call from ${i.filename}`),l=a(s,n.emptyPlugin)),l}}(),d=!0)}},48782:(e,r,i)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=i(31635);n.__exportStar(i(20044),r),n.__exportStar(i(30092),r),n.__exportStar(i(72943),r);(0,i(85126).registerMsgPackExtensions)()},72943:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.MainPluginApiProvider=r.ExtPluginApiProvider=void 0,r.ExtPluginApiProvider="extPluginApi",r.MainPluginApiProvider=Symbol("mainPluginApi")},45522:(e,r)=>{"use strict";var i;Object.defineProperty(r,"__esModule",{value:!0}),r.PluginIdentifiers=void 0,function(e){function r({publisher:r=e.UNPUBLISHED,name:i}){return`${r.toLowerCase()}.${i.toLowerCase()}`}e.UNPUBLISHED="<unpublished>",e.componentsToUnversionedId=r,e.componentsToVersionedId=function({publisher:r=e.UNPUBLISHED,name:i,version:n}){return`${r.toLowerCase()}.${i.toLowerCase()}@${n}`},e.componentsToVersionWithId=function(e){return{id:r(e),version:e.version}},e.idAndVersionToVersionedId=function({id:e,version:r}){return`${e}@${r}`},e.unversionedFromVersioned=function(e){const r=e.indexOf("@");return e.slice(0,r)},e.identifiersFromVersionedId=function(e){const r=e.indexOf("."),i=e.indexOf("@",r);if(-1!==r&&-1!==i)return{publisher:e.slice(0,r),name:e.slice(r+1,i),version:e.slice(i+1)}},e.idAndVersionFromVersionedId=function(e){const r=e.indexOf("."),i=e.indexOf("@",r);if(-1!==r&&-1!==i)return{id:e.slice(0,i),version:e.slice(i+1)}}}(i||(r.PluginIdentifiers=i={}))},20044:(e,r,i)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PluginHostEnvironmentVariable=r.ServerPluginRunner=r.PluginServer=r.pluginServerJsonRpcPath=r.PLUGIN_HOST_BACKEND=r.HostedPluginServer=r.PluginDeployerHandler=r.HostedPluginClient=r.buildFrontendModuleName=r.getPluginId=r.MetadataProcessor=r.IconContribution=r.PluginType=r.PluginDeployerEntryType=r.PluginDeployerParticipant=r.PluginDeployer=r.PluginDeployerFileHandler=r.PluginDeployerDirectoryHandler=r.PluginDeployerResolver=r.PluginScanner=r.PluginViewType=r.CustomEditorPriority=r.PluginPackage=r.hostedServicePath=r.PluginIdentifiers=void 0;const n=i(45522);var o,t,u,l,s,d;function a(e){return`${e.publisher}_${e.name}`.replace(/\W/g,"_")}Object.defineProperty(r,"PluginIdentifiers",{enumerable:!0,get:function(){return n.PluginIdentifiers}}),r.hostedServicePath="/services/hostedPlugin",function(e){e.toPluginUrl=function(e,r){return`hostedPlugin/${a(e)}/${encodeURIComponent(r)}`}}(o||(r.PluginPackage=o={})),function(e){e.default="default",e.builtin="builtin",e.option="option"}(t||(r.CustomEditorPriority=t={})),function(e){e.Tree="tree",e.Webview="webview"}(u||(r.PluginViewType=u={})),r.PluginScanner=Symbol("PluginScanner"),r.PluginDeployerResolver=Symbol("PluginDeployerResolver"),r.PluginDeployerDirectoryHandler=Symbol("PluginDeployerDirectoryHandler"),r.PluginDeployerFileHandler=Symbol("PluginDeployerFileHandler"),r.PluginDeployer=Symbol("PluginDeployer"),r.PluginDeployerParticipant=Symbol("PluginDeployerParticipant"),function(e){e[e.FRONTEND=0]="FRONTEND",e[e.BACKEND=1]="BACKEND",e[e.HEADLESS=2]="HEADLESS"}(l||(r.PluginDeployerEntryType=l={})),function(e){e[e.System=0]="System",e[e.User=1]="User"}(s||(r.PluginType=s={})),function(e){e.isIconDefinition=function(e){return"fontCharacter"in e}}(d||(r.IconContribution=d={})),r.MetadataProcessor=Symbol("MetadataProcessor"),r.getPluginId=a,r.buildFrontendModuleName=function(e){return`${e.publisher}_${e.name}`.replace(/\W/g,"_")},r.HostedPluginClient=Symbol("HostedPluginClient"),r.PluginDeployerHandler=Symbol("PluginDeployerHandler"),r.HostedPluginServer=Symbol("HostedPluginServer"),r.PLUGIN_HOST_BACKEND="main",r.pluginServerJsonRpcPath="/services/plugin-ext",r.PluginServer=Symbol("PluginServer"),r.ServerPluginRunner=Symbol("ServerPluginRunner"),r.PluginHostEnvironmentVariable=Symbol("PluginHostEnvironmentVariable")},93655:e=>{function r(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id=93655,e.exports=r},20181:e=>{"use strict";e.exports=require("buffer")},35317:e=>{"use strict";e.exports=require("child_process")},76982:e=>{"use strict";e.exports=require("crypto")},79896:e=>{"use strict";e.exports=require("fs")},73339:e=>{"use strict";e.exports=require("module")},69278:e=>{"use strict";e.exports=require("net")},70857:e=>{"use strict";e.exports=require("os")},16928:e=>{"use strict";e.exports=require("path")},2203:e=>{"use strict";e.exports=require("stream")},13193:e=>{"use strict";e.exports=require("string_decoder")},87016:e=>{"use strict";e.exports=require("url")},39023:e=>{"use strict";e.exports=require("util")},8365:e=>{"use strict";e.exports={version:"1.50.1"}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return i[e].call(t.exports,t,t.exports,o),t.exports}o.m=i,o.x=()=>{var e=o.O(void 0,[640,92],(()=>o(20583)));return e=o.O(e)},e=[],o.O=(r,i,n,t)=>{if(!i){var u=1/0;for(a=0;a<e.length;a++){for(var[i,n,t]=e[a],l=!0,s=0;s<i.length;s++)(!1&t||u>=t)&&Object.keys(o.O).every((e=>o.O[e](i[s])))?i.splice(s--,1):(l=!1,t<u&&(u=t));if(l){e.splice(a--,1);var d=n();void 0!==d&&(r=d)}}return r}t=t||0;for(var a=e.length;a>0&&e[a-1][2]>t;a--)e[a]=e[a-1];e[a]=[i,n,t]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var i in r)o.o(r,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,i)=>(o.f[i](e,r),r)),[])),o.u=e=>e+".js",o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={448:1};o.O.require=r=>e[r];o.f.require=(r,i)=>{e[r]||(r=>{var i=r.modules,n=r.ids,t=r.runtime;for(var u in i)o.o(i,u)&&(o.m[u]=i[u]);t&&t(o);for(var l=0;l<n.length;l++)e[n[l]]=1;o.O()})(require("./"+o.u(r)))}})(),r=o.x,o.x=()=>(o.e(640),o.e(92),r());var t=o.x();module.exports=t})();