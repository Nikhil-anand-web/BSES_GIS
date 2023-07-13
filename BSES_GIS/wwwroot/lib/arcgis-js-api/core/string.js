/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./object"],(function(e,t){"use strict";const n=/\{([^\}]+)\}/g;function r(e){return e??""}function o(e,o){return e.replaceAll(n,"object"==typeof o?(e,n)=>r(t.getDeepValue(n,o)):(e,t)=>r(o(t)))}function c(e,t){return e.replaceAll(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(e=>t&&t.includes(e)?e:`\\${e}`))}function u(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function i(e){return(new DOMParser).parseFromString(e||"","text/html").body.innerText||""}function l(e,t){return new RegExp(`{${t}}`,"ig").test(e)}e.escapeRegExpString=c,e.numericHash=u,e.replace=o,e.stripHTML=i,e.templateHasKey=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
