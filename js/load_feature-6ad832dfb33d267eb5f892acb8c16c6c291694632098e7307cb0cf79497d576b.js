!function(){var e=function(e){var t={exports:{}};return e.call(t.exports,t,t.exports),t.exports},t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&s.return&&s.return()}finally{if(n)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e){return e&&e.__esModule?e:{default:e}},o=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){"loading"!==document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",(function(){"loading"!==document.readyState&&e()}))}})),n=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.featureNotFound=function(e){return new Error('The feature { name: "'+e.name+'", version: "'+e.version+'"} does not exist')},t.couldNotCreateEntry=function(e){return new Error("Could not create registry entry "+e)},t.couldNotAddToQuerySelectors=function(){return new Error("Cannot register a feature with the same selector twice")},t.invalidFeaturesArray=function(e){return new Error("Features should be an Array. Received: "+JSON.stringify(e))},t.invalidFeature=function(e){return new Error('Features should be defined as `{ name: "name", version: "version" }`. Received: '+JSON.stringify(e))},t.alreadyLoaded=function(e,t){return new Error(e+" has already been loaded at version "+t)}})),a=e((function(e,t){"use strict";function r(){if(o)return o;var e=document.getElementById("shopify-features");if(e)try{o=JSON.parse(e.textContent)}catch(e){}else o={};return o}Object.defineProperty(t,"__esModule",{value:!0}),t.getBetas=function(){var e=r();if(e)try{return e.betas.reduce((function(e,t){return e[t]=!0,e}),{})}catch(e){}return{}},t.getLocale=function(){return r().locale||"en"};var o=void 0})),i=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}})),s=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={};return{add:function(t,r){e[t]=e[t]||[];for(var o=e[t],a=0;a<o.length;a++){var i=o[a],s=i.name,u=i.version;if(r.name===s){if(r.version!==u)throw(0,n.couldNotAddToQuerySelectors)(t);return}}o.push(r)},getFeatures:function(){return Object.keys(e).reduce((function(t,r){if(!document.querySelector(r))return t;var o=e[r];return delete e[r],t.concat(o)}),[])}}}})),u=e((function(e,t){"use strict";function r(e){var t=e.name,r=e.baseName,i=e.version,s=e.betaFlag,u=e.fileName,l=e.fileNames,d=e.legacy,c=e.localized,p=e.localesSupported,h=e.autoLoadSelector,v=e.props,y=void 0===v?{}:v,m=t+"@"+(i||"latest");if(o[m])throw(0,n.couldNotCreateEntry)(m);h&&(Array.isArray(h)?h:[h]).forEach((function(e){f.lookup.add(e,{name:t,version:i})})),o[m]={props:y,betaFlag:s,scriptId:m,name:t,baseName:r,version:i,locale:(0,a.getLocale)(),localized:c,localesSupported:p,legacy:d,fileName:u,fileNames:l}}Object.defineProperty(t,"__esModule",{value:!0}),t.reset=function(){i={}},t.register=function(e){window.Shopify.modules?(e.legacy=!1,e.props={type:"module"},r(e)):e.hasLegacy&&(e.legacy=!0,e.props={nomodule:""},r(e))},t.getEntry=function(e){var t=e.name+"@"+(e.version||"latest"),r=o[t];if(!r)throw(0,n.featureNotFound)(e);var a=r.name,s=r.baseName,u=r.version,l=r.localized&&r.locale,d=r.legacy,c=r.localesSupported;if(i[a]&&i[a]!==u)throw(0,n.alreadyLoaded)(t,i[a]);i[a]=u;var f=[];return(r.fileNames||[r.fileName]).forEach((function(e){f.push((0,p.urlForFeature)({name:a,baseName:s,version:u,legacy:d,locale:l,localesSupported:c,fileName:e}))})),1===f.length?r.src=f[0]:1<f.length&&(r.srcs=f),r};var o={},i={}})),l=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetBetas=function(){r=null},t.default=function e(t){return r?r[t]:(r=(0,a.getBetas)(),e(t))};var r=null})),d=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){function a(){r.push(l),u(),n(null,l)}function i(){o.push(l),u(),n(new Error("load error: "+e))}function s(){l.addEventListener("load",a),l.addEventListener("error",i)}function u(){l.removeEventListener("load",a),l.removeEventListener("error",i)}var l=document.querySelector('script[src="'+e+'"]');l&&function(e){return-1<r.indexOf(e)}(l)?a():l&&function(e){return-1<o.indexOf(e)}(l)?i():l?s():(l=document.createElement("script"),Object.keys(t).forEach((function(e){l.setAttribute(e,t[e])})),null===l.getAttribute("defer")&&l.setAttribute("defer",""),l.src=e,l.crossorigin="anonymous",s(),document.head.appendChild(l))};var r=[],o=[]})),c=e((function(e,o){"use strict";function a(e,r,o){var a=[];!function(e,r,o){var n=e.reduce((function(e,r){var o=t(r,1)[0];return e+(o.srcs?o.srcs.length:1)}),0);0!==n?e.forEach((function(e){var a=t(e,2),i=a[0],s=a[1].onLoad||c.default,u=i.srcs||[i.src],l=u.length,d=[];u.forEach((function(e){(0,f.default)(e,i.props,(function(e){e&&(r.push(e),d.push(e)),0==--l&&(0===d.length?s(null):1===d.length?s(d[0]):s(d)),0==--n&&o(r)}))}))})):o(r)}(function(e,t,r){return e.reduce((function(e,o){var a=o.onLoad||c.default;try{var i=(0,u.getEntry)(o),l=i.betaFlag,d=!l||(0,s.default)(l);if(r&&!d)throw(0,n.featureNotFound)(o);d&&e.push([i,o])}catch(e){a(e),t.push(e)}return e}),[])}(e,a,r),a,(function(e){var t=0===e.length?null:e;o(t)}))}Object.defineProperty(o,"__esModule",{value:!0}),o.loadMultiple=a,o.loadMultipleErrorIfNotInBeta=function(e,t){a(e,!0,t)},o.loadMultipleSilentIfNotInBeta=function(e,t){a(e,!1,t)};var s=r(l),c=r(i),f=r(d)})),f=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lookup=void 0,t.default=function(e){var t=e||o.default;(0,c.loadMultipleSilentIfNotInBeta)(n.getFeatures(),t)};var o=r(i),n=(0,r(s).default)();t.lookup=n})),p=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.urlForFeature=function(e){var t=e.name,r=e.version,o=e.legacy,n=e.baseName,a=void 0===n?null:n,i=e.locale,s=void 0===i?null:i,u=e.localesSupported,l=void 0===u?[]:u,d=e.fileName,c=a||t,f=(void 0===d?null:d)||c;if(f.endsWith(".js")&&(f=f.slice(0,-3)),o&&(f+="-legacy"),s&&(f=f+"."+(s=0===l.length||l.includes(s)?s:"en")),("shop-js"===t||t.startsWith("shop-js/"))&&window.Shopify.spinShopJsUrl)return"https://"+window.Shopify.spinShopJsUrl+"/"+f+".js";var p=[window.Shopify&&window.Shopify.cdnHost||"cdn.shopify.com","shopifycloud",c];return void 0!==r&&p.push("v"+r),p.push(f+".js"),"https://"+p.join("/")}})),h=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e||"string"!=typeof e.name||"string"!=typeof e.version)throw(0,n.invalidFeature)(e)}})),v=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t||a.default;if(Array.isArray(e))return e.forEach(o.default),void(0,c.loadMultipleErrorIfNotInBeta)(e,r);throw(0,n.invalidFeaturesArray)(e)};var o=r(h),a=r(i)})),y=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=null;return{get isObserving(){return Boolean(t)},enable:function(){this.isObserving||(t=new MutationObserver((function(t){for(var r=!1,o=0;o<t.length;o++)if(t[o].addedNodes.length){r=!0;break}r&&e()}))).observe(document.body,{childList:!0,subtree:!0})},disable:function(){this.isObserving&&(t.disconnect(),t=null)}}}})),m=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=window.Shopify[e]&&window.Shopify[e].q;r&&Array.isArray(r)&&r.forEach((function(e){t.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e))})),window.Shopify[e]=t}}));e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetRegistry=t.resetBetas=t.register=void 0;var n=r(o),a=r(v),i=r(f),s=r(y),d=r(m);t.register=u.register,t.resetBetas=l.resetBetas,t.resetRegistry=u.reset,window.Shopify=window.Shopify||{},window.Shopify.featureAssets=window.Shopify.featureAssets||{},window.Shopify.featureAssets["shop-js"]=window.Shopify.featureAssets["shop-js"]||{},(0,u.register)({name:"model-viewer",version:"0.6",hasLegacy:!0,autoLoadSelector:'model-viewer[data-shopify-feature="0.6"]'}),(0,u.register)({name:"model-viewer",version:"0.7",hasLegacy:!0,autoLoadSelector:'model-viewer[data-shopify-feature="0.7"]'}),(0,u.register)({name:"model-viewer",version:"0.8",hasLegacy:!0,autoLoadSelector:'model-viewer[data-shopify-feature="0.8"]'}),(0,u.register)({name:"model-viewer",version:"1.2",hasLegacy:!0,autoLoadSelector:'model-viewer[data-shopify-feature="1.2"]'}),(0,u.register)({name:"model-viewer",version:"1.7",hasLegacy:!0,autoLoadSelector:'model-viewer[data-shopify-feature="1.7"]'}),(0,u.register)({name:"model-viewer",version:"1.9",hasLegacy:!0,autoLoadSelector:'model-viewer[data-shopify-feature="1.9"]'}),(0,u.register)({name:"model-viewer",version:"1.10",hasLegacy:!0,autoLoadSelector:'model-viewer[data-shopify-feature="1.10"]'}),(0,u.register)({name:"model-viewer",version:"1.11",hasLegacy:!0,autoLoadSelector:'model-viewer[data-shopify-feature="1.11"]'}),(0,u.register)({name:"model-viewer",version:"1.12",hasLegacy:!0,autoLoadSelector:'model-viewer[data-shopify-feature="1.12"]'}),(0,u.register)({name:"shop-js/shopify-payment-terms",baseName:"shop-js",hasLegacy:!1,localized:!1,fileNames:Shopify.featureAssets["shop-js"]["payment-terms"]||["client"],autoLoadSelector:["shopify-payment-terms"]}),(0,u.register)({name:"shop-js/shop-login-button",baseName:"shop-js",hasLegacy:!1,localized:!1,fileNames:Shopify.featureAssets["shop-js"]["login-button"]||["client"],autoLoadSelector:["shop-login-button"]}),(0,u.register)({name:"model-viewer-ui",version:"1.0",hasLegacy:!0,localized:!0,localesSupported:["bg-BG","cs","da","de","el","es","fi","fr","hi","hr-HR","hu","id","it","ja","ko","lt-LT","ms","nb","nl","pl","pt-BR","pt-PT","ro-RO","ru","sk-SK","sl-SI","sv","th","tr","vi","zh-CN","zh-TW"]}),(0,u.register)({name:"shopify-xr",version:"1.0",baseName:"shopify-xr-js",fileName:"shopify-xr",localized:!0,localesSupported:["bg-BG","cs","da","de","el","es","fi","fr","hi","hr-HR","hu","id","it","ja","ko","lt-LT","ms","nb","nl","pl","pt-BR","pt-PT","ro-RO","ru","sk-SK","sl-SI","sv","th","tr","vi","zh-CN","zh-TW"]}),(0,u.register)({name:"video-ui",baseName:"shopify-plyr",version:"1.0",hasLegacy:!0,localized:!0,localesSupported:["cs","da","de","es","fi","fr","hi","it","ja","ko","ms","nb","nl","pl","pt-BR","pt-PT","sv","th","tr","zh-CN","zh-TW"]}),(0,u.register)({name:"video-ui",baseName:"shopify-plyr",version:"1.1",hasLegacy:!0,localized:!0,localesSupported:["cs","da","de","es","fi","fr","hi","it","ja","ko","ms","nb","nl","pl","pt-BR","pt-PT","sv","th","tr","zh-CN","zh-TW"]}),(0,u.register)({name:"video-ui",baseName:"plyr",version:"2.0",hasLegacy:!0,localized:!0,localesSupported:["bg-BG","cs","da","de","el","es","fi","fr","hi","hr-HR","hu","id","it","ja","ko","lt-LT","ms","nb","nl","pl","pt-BR","pt-PT","ro-RO","ru","sk-SK","sl-SI","sv","th","tr","vi","zh-CN","zh-TW"],fileName:"shopify-plyr"}),(0,u.register)({name:"media-analytics",version:"0.1",hasLegacy:!0,fileName:"analytics",betaFlag:"rich-media-storefront-analytics",autoLoadSelector:["video","model-viewer",'a[rel="ar"]','a[href*="package=com.google.ar.core;action=android.intent.action.VIEW;"]',"[data-shopify-xr]",'iframe[src^="https://www.youtube.com/embed/"]','iframe[src^="https://player.vimeo.com/video/"]']}),(0,u.register)({name:"consent-tracking-api",version:"0.1",hasLegacy:!0}),(0,n.default)((function(){function e(){(0,i.default)((function(e){if(e)throw e[0]}))}(0,d.default)("loadFeatures",a.default),(0,d.default)("autoloadFeatures",i.default),e(),(0,s.default)(e).enable()}))}))}("undefined"!=typeof global?global:"undefined"!=typeof window&&window);